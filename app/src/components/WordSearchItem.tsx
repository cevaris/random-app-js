import { IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import { Word } from '../types';

interface WordSearchItemProps {
    word: Word
}

const WordSearchItem: React.FC<WordSearchItemProps> = (props) => {
    return (
        <IonItem>
            <IonLabel>
                <h1>{props.word.word}</h1>
                <div>{props.word.definition}</div>
            </IonLabel>
        </IonItem>
    );
};

export default WordSearchItem;
