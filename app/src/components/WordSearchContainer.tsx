import { IonItem, IonLabel, IonList, IonSearchbar } from '@ionic/react';
import React from 'react';

interface WordSearchProps {
    words: string[],
    setSearchText: (text: string) => void
}

const WordSearchContainer: React.FC<WordSearchProps> = (props) => {
    return (
        <div className="container">
            <div>
                <IonSearchbar onIonChange={e => props.setSearchText(e.detail.value!)} debounce={500} showCancelButton="never" placeholder="Search for word"></IonSearchbar>
            </div>
            <div>
                <IonList>
                    {props.words.map((word, idx) =>
                        <IonItem key={idx}>
                            <IonLabel>{word}</IonLabel>
                        </IonItem>
                    )}
                </IonList>
            </div>
        </div>
    );
};

export default WordSearchContainer;
