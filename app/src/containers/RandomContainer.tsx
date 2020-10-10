import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
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
        </IonGrid>
    );
};
export default RandomContainer;