import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import WordSearchContainer from '../components/WordSearchContainer';
import './Tab2.css';


const Tab2: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);

  const setSearchText = async (query: string) => {
    console.log('typed: ' + query);
    const results = await Promise.resolve([
      'hello',
      'world',
      'momba',
    ]);
    setWords(results);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <WordSearchContainer words={words} setSearchText={setSearchText} />
      </IonContent>
    </IonPage >
  );
}

export default Tab2;
