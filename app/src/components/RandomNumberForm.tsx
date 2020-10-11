import { yupResolver } from '@hookform/resolvers/yup';
import { IonButton, IonInput, IonItem, IonText } from '@ionic/react';
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
    const validationSchema = object().shape({
        min: number().required('This field is required.'),
        max: number().required('This field is required.'),
    });

    const { control, register, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(validationSchema)
    });
    const [randomNumber, setRandomNumber] = useState('');

    const onSubmit = async (data: IFormInputs) => {
        console.log('submission', data);
        const result = await getRandomNumber(data.min, data.max);
        setRandomNumber(result);
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
            <IonButton expand="block" type="submit" className="ion-margin-top">
                Generate Random Number
            </IonButton>
        </form>
    );
};

export default RandomNumberForm;
