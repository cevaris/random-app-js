import { IonCol, IonGrid, IonList, IonRow, IonSearchbar } from '@ionic/react';
import React from 'react';
import { Word } from '../types';
import WordSearchItem from './WordSearchItem';

interface WordSearchProps {
    words: Word[],
    setSearchText: (text: string) => void
}

const WordSearchContainer: React.FC<WordSearchProps> = (props) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol size="1"></IonCol>
                <IonCol size="10">
                    <IonSearchbar onIonChange={e => props.setSearchText(e.detail.value!)} debounce={500} showCancelButton="never" placeholder="Search for word"></IonSearchbar>
                </IonCol>
                <IonCol size="1"></IonCol>
            </IonRow>
            <IonRow>
                <IonCol size="1"></IonCol>
                <IonCol size="10">
                    <IonList lines="full">
                        {props?.words && props.words.map((word, idx) =>
                            <WordSearchItem word={word} idx={idx} />
                        )}
                    </IonList>
                </IonCol>
                <IonCol size="1"></IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default WordSearchContainer;
