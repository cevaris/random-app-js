import { yupResolver } from '@hookform/resolvers/yup';
import { IonButton, IonInput, IonItem, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { number, object } from 'yup';
import { getRandomString } from '../actions/random';

interface IFormInputs {
    length: number
}
interface RandomStringFormProps {
}

const RandomStringForm: React.FC<RandomStringFormProps> = () => {
    const [randomString, setRandomString] = useState('');
    const validationSchema = object().shape({
        length: number().required('This field is required.').min(1),
    });

    const { register, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data: IFormInputs) => {
        const result = await getRandomString(data.length);
        setRandomString(result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
                <IonInput
                    type="text"
                    name="length"
                    ref={register}
                    placeholder={'Length of random string Number'}
                />
            </IonItem>
            {errors.length && (
                <IonText color="danger" className="ion-padding-start">
                    <small>{errors.length.message}</small>
                </IonText>
            )}
            <IonItem>
                <IonInput value={randomString} readonly={true} />
            </IonItem>
            <IonButton expand="block" type="submit" className="ion-margin-top">
                Generate Random String
            </IonButton>
        </form>
    );
};

export default RandomStringForm;
