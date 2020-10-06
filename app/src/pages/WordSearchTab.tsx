import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import WordSearchContainer from '../containers/WordSearchContainer';

const WordSearchTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Word Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <WordSearchContainer />
      </IonContent>
    </IonPage >
  );
}

export default WordSearchTab;
