import { yupResolver } from '@hookform/resolvers/yup';
import { IonButton, IonInput, IonItem, IonLabel, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { number, object } from 'yup';
import { getRandomNumber } from '../actions/random';

interface IFormInputs {
    min: number
    max: number
}

interface RandomNumberFormProps {
}

const RandomNumberForm: React.FC<RandomNumberFormProps> = () => {
    // const [minNumber, setMin] = useState<number>();

    const validationSchema = object().shape({
        min: number().required('This field is required.'),
        max: number().required('This field is required.'),
    });

    const { control, register, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(validationSchema)
    });
    const [randomNumber, setRandomNumber] = useState('');

    const onSubmit = async (data: IFormInputs) => {
        const result = await getRandomNumber(data.min, data.max);
        setRandomNumber(result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
                <IonLabel>Min Number:</IonLabel>
                <Controller
                    as={<IonInput type="text" ref={register} />}
                    name="min"
                    defaultValue=""
                    control={control}
                    onChangeName="onIonChange"
                />

            </IonItem>
            {errors && errors.min && (
                <IonText color="danger" className="ion-padding-start">
                    <small>{errors.min.message}</small>
                </IonText>
            )}
            <IonItem>
                <IonLabel>Max Number:</IonLabel>
                <Controller
                    as={<IonInput type="text" ref={register} onChange={(e => { console.log(e) })} />}
                    name="max"
                    defaultValue=""
                    control={control}
                    onChangeName="onIonChange"
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
            <IonButton expand="block" type="submit" className="ion-margin-top">
                Generate Random Number
            </IonButton>
        </form>
    );
};

export default RandomNumberForm;
