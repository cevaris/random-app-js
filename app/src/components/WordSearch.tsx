import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';
import { Props, State } from '../containers/wordSearch';
import ExploreContainer from './ExploreContainer';

class WordSearch extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 2</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonSearchbar value={this.props.wordSearchText} onIonChange={e => this.props.setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
          <ExploreContainer name="Tab 2 page" />
        </IonContent>
      </IonPage>
    );
  };
}

export default WordSearch;
