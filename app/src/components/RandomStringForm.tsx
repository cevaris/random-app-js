import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

interface IFormInputs {
    length: number
}
interface RandomStringFormProps {
}

const RandomStringForm: React.FC<RandomStringFormProps> = (props) => {
    const { control, register, handleSubmit } = useForm<IFormInputs>();

    const onSubmit = async (data: IFormInputs) => {
        console.log(`/random/string.json?length=${data.length}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
                <IonLabel position="stacked">Random Number</IonLabel>
                <Controller
                    as={<IonInput type="number" ref={register} />}
                    name="length"
                    control={control}
                />
            </IonItem>
            <IonButton expand="block" type="submit" className="ion-margin-top">
                Submit
            </IonButton>
        </form>
    );
};

export default RandomStringForm;
