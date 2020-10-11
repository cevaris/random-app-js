import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import RandomChooseForm from "../components/RandomChooseForm";
import RandomNumberForm from "../components/RandomNumberForm";
import RandomStringForm from "../components/RandomStringForm";

const RandomContainer: React.FC = () => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol size="3"></IonCol>
                <IonCol>
                    <RandomStringForm />
                </IonCol>
                <IonCol size="3"></IonCol>
            </IonRow>
            <IonRow className="ion-margin-top">
                <IonCol size="3"></IonCol>
                <IonCol>
                    <RandomNumberForm />
                </IonCol>
                <IonCol size="3"></IonCol>
            </IonRow>
            <IonRow className="ion-margin-top">
                <IonCol size="3"></IonCol>
                <IonCol>
                    <RandomChooseForm />
                </IonCol>
                <IonCol size="3"></IonCol>
            </IonRow>
        </IonGrid>
    );
};
export default RandomContainer;