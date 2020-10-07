import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import React from "react";
import { Controller, useForm } from 'react-hook-form';

const RandomContainer: React.FC = () => {
    const { control, handleSubmit } = useForm();

    const registerUser = (data: any) => {
        console.log('creating a new user account with: ', data);
    }

    return (
        <IonGrid>
            <IonRow>
                <IonCol size="3"></IonCol>
                <IonCol>
                    <form onSubmit={handleSubmit(registerUser)}>
                        <IonItem>
                            <IonLabel position="floating">Random</IonLabel>
                            <Controller
                                as={<IonInput type="number" />}
                                name="name"
                                defaultValue=""
                                control={control}
                                onChangeName="onIonChange"
                            />
                        </IonItem>
                        <IonButton expand="block" type="submit" className="ion-margin-top">
                            Random
                        </IonButton>
                    </form>
                </IonCol>
                <IonCol size="3"></IonCol>
            </IonRow>
        </IonGrid>
    );
};
export default RandomContainer;