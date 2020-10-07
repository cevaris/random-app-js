import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import RandomContainer from '../containers/RandomContainer';

const RandomTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Random</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Random</IonTitle>
          </IonToolbar>
        </IonHeader>
        <RandomContainer />
      </IonContent>
    </IonPage>
  );
};

export default RandomTab;
