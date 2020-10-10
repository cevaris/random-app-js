import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getRandomString } from '../actions/random';

interface IFormInputs {
    length: number
}
interface RandomStringFormProps {
}

const RandomStringForm: React.FC<RandomStringFormProps> = () => {
    const { control, register, handleSubmit } = useForm<IFormInputs>();
    const [randomString, setRandomString] = useState('');

    const onSubmit = async (data: IFormInputs) => {
        const result = await getRandomString(data.length);
        setRandomString(result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
                <IonLabel position="stacked">Random Number</IonLabel>
                <Controller
                    as={<IonInput type="number" ref={register} />}
                    name="length"
                    defaultValue=""
                    control={control}
                />
            </IonItem>
            <IonItem>
                <IonInput value={randomString} />
            </IonItem>
            <IonButton expand="block" type="submit" className="ion-margin-top">
                Generate Random
            </IonButton>
        </form>
    );
};

export default RandomStringForm;
