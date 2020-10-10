import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import React from "react";
import { Controller, useForm } from 'react-hook-form';

interface IFormInputs {
    email: string
}

const RandomContainer: React.FC = () => {
    const { control, register, handleSubmit } = useForm();

    function onSubmit(data: IFormInputs) {
        console.log(data);
    }

    return (
        <IonGrid>
            <IonRow>
                <IonCol size="3"></IonCol>
                <IonCol>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <IonItem>
                            <IonLabel position="floating">Random Number</IonLabel>
                            <Controller
                                as={<IonInput type="email" ref={register} />}
                                name="email"
                                control={control}
                            />
                        </IonItem>
                        <IonButton expand="block" type="submit" className="ion-margin-top">
                            Register
                        </IonButton>
                    </form>
                </IonCol>
                <IonCol size="3"></IonCol>
            </IonRow>
        </IonGrid>
    );
};
export default RandomContainer;