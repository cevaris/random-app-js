import { IonGrid, IonItem, IonLabel, IonList, IonNote, IonRow, IonSearchbar } from '@ionic/react';
import React from 'react';
import { Word } from '../types';

interface WordSearchProps {
    words: Word[],
    setSearchText: (text: string) => void
}

const WordSearchContainer: React.FC<WordSearchProps> = (props) => {
    return (
        <IonGrid>
            <IonRow>
                <IonSearchbar onIonChange={e => props.setSearchText(e.detail.value!)} debounce={500} showCancelButton="never" placeholder="Search for word"></IonSearchbar>
            </IonRow>
            <IonRow>
                <IonList>
                    {props?.words && props.words.map((word, idx) =>
                        <IonItem key={idx}>
                            <IonLabel>{word.word}</IonLabel>
                            <IonNote>{word.definition}</IonNote>
                        </IonItem>
                    )}
                </IonList>
            </IonRow>
        </IonGrid>
    );
};

export default WordSearchContainer;
