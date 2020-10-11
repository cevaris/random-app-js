import { yupResolver } from '@hookform/resolvers/yup';
import { IonButton, IonInput, IonItem, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { getRandomChoose } from '../actions/random';

interface IFormInputs {
    data: string // CSV
}
interface RandomChooseFormProps {
}

const RandomChooseForm: React.FC<RandomChooseFormProps> = () => {
    const [randomChoose, setRandomChoose] = useState('');
    const validationSchema = object().shape({
        data: string().required('This field is required.')
    });

    const { register, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data: IFormInputs) => {
        const result = await getRandomChoose(data.data);
        setRandomChoose(result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
                <IonInput
                    type="text"
                    name="data"
                    ref={register}
                    placeholder={'Enter Comma-separated values to choose from'}
                />
            </IonItem>
            {errors.data && (
                <IonText color="danger" className="ion-padding-start">
                    <small>{errors.data.message}</small>
                </IonText>
            )}
            <IonItem>
                <IonInput value={randomChoose} readonly={true} />
            </IonItem>
            <IonButton expand="block" type="submit" className="ion-margin-top">
                Choose random value
            </IonButton>
        </form>
    );
};

export default RandomChooseForm;
