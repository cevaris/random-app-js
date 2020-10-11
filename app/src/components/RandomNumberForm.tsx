import { yupResolver } from '@hookform/resolvers/yup';
import { IonButton, IonInput, IonItem, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { number, object } from 'yup';
import { getRandomNumber } from '../actions/random';


interface IFormInputs {
    min: number
    max: number
}

interface RandomNumberFormProps {
}

const RandomNumberForm: React.FC<RandomNumberFormProps> = () => {
    const validationSchema = object().shape({
        min: number().required('This field is required.'),
        max: number().required('This field is required.'),
    });

    const { register, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(validationSchema),
        mode: 'onChange'
    });
    const [randomNumber, setRandomNumber] = useState('');
    const [submitError, setSubmitError] = useState<Error | false>();

    const onSubmit = async (data: IFormInputs) => {
        try {
            // reset any errors
            setSubmitError(false);
            
            const result = await getRandomNumber(data.min, data.max);
            setRandomNumber(result);
        } catch (error) {
            setSubmitError(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
                <IonInput
                    type="text"
                    name="min"
                    ref={register}
                    placeholder={'Min Number'}
                />
            </IonItem>
            {errors.min && (
                <IonText color="danger" className="ion-padding-start">
                    <small>{errors.min.message}</small>
                </IonText>
            )}
            <IonItem>
                <IonInput
                    type="text"
                    name="max"
                    ref={register}
                    placeholder={'Max Number'}
                />
            </IonItem>
            {errors.max && (
                <IonText color="danger" className="ion-padding-start">
                    <small>{errors.max.message}</small>
                </IonText>
            )}
            <IonItem>
                <IonInput value={randomNumber} readonly={true} />
            </IonItem>
            {submitError && (
                <IonText color="danger" className="ion-padding-start">
                    <small>{submitError.message}</small>
                </IonText>
            )}
            <IonButton expand="block" type="submit" className="ion-margin-top">
                Generate Random Number
            </IonButton>
        </form>
    );
};

export default RandomNumberForm;
