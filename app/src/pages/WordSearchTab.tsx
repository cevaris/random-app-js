import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import React, { useState } from 'react';
import WordSearchContainer from '../containers/WordSearchContainer';
import { Word } from '../types';

const WordSearchTab: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);

  const setSearchText = async (query: string) => {
    const results = await axios.get<Word[]>(`http://localhost:3000/words.json?q=${query}`);
    setWords(results.data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Word Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <WordSearchContainer words={words} setSearchText={setSearchText} />
      </IonContent>
    </IonPage >
  );
}

export default WordSearchTab;
