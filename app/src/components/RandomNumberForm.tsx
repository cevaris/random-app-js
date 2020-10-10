import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getRandomNumber } from '../actions/random';

interface IFormInputs {
    min: number
    max: number
}

interface RandomNumberFormProps {
}

const RandomNumberForm: React.FC<RandomNumberFormProps> = () => {
    const { control, register, handleSubmit } = useForm<IFormInputs>();
    const [randomNumber, setRandomNumber] = useState('');

    const onSubmit = async (data: IFormInputs) => {
        const result = await getRandomNumber(data.min, data.max);
        setRandomNumber(result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
                <IonLabel>Min Number</IonLabel>
                <Controller
                    as={<IonInput type="number" ref={register} />}
                    name="min"
                    defaultValue=""
                    control={control}
                />
            </IonItem>
            <IonItem>
                <IonLabel>Max Number</IonLabel>
                <Controller
                    as={<IonInput type="number" ref={register} />}
                    name="max"
                    defaultValue=""
                    control={control}
                />
            </IonItem>
            <IonItem>
                <IonInput value={randomNumber} />
            </IonItem>
            <IonButton expand="block" type="submit" className="ion-margin-top">
                Generate Random Number
            </IonButton>
        </form>
    );
};

export default RandomNumberForm;
