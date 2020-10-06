import { IonCol, IonGrid, IonList, IonRow, IonSearchbar } from '@ionic/react';
import axios from 'axios';
import React, { useState } from 'react';
import WordSearchItem from '../components/WordSearchItem';
import { environment } from '../envrionment';
import { Word } from '../types';

interface WordSearchProps { }

const WordSearchContainer: React.FC<WordSearchProps> = (props) => {
    const [words, setWords] = useState<Word[]>([]);

    const setSearchText = async (query: string) => {
        const apiHost = environment.apiHost;
        const results = await axios.get<Word[]>(`${apiHost}/words.json?q=${query}`);
        setWords(results.data);
    };

    return (
        <IonGrid>
            <IonRow>
                <IonCol size="1"></IonCol>
                <IonCol size="10">
                    <IonSearchbar onIonChange={e => setSearchText(e.detail.value!)} debounce={500} showCancelButton="never" placeholder="Search for word"></IonSearchbar>
                </IonCol>
                <IonCol size="1"></IonCol>
            </IonRow>
            <IonRow>
                <IonCol size="1"></IonCol>
                <IonCol size="10">
                    <IonList lines="full">
                        {words && words.map((word, idx) =>
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
