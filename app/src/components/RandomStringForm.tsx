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
    const [randomString, setRandomString] = useState('');
    const { control, register, handleSubmit } = useForm<IFormInputs>({});

    const onSubmit = async (data: IFormInputs) => {
        const result = await getRandomString(data.length);
        setRandomString(result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
                <IonLabel>Length of random string:</IonLabel>
                <Controller
                    as={<IonInput type="number" ref={register} />}
                    name="length"
                    defaultValue=''
                    control={control}
                />
            </IonItem>
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
