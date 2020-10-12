import { yupResolver } from '@hookform/resolvers/yup';
import { IonButton, IonInput, IonItem, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { number, object } from 'yup';

interface IFormInputs {
    length: number
}
interface RandomStringFormProps {
    getRandomString(length: number): Promise<string>
}

const RandomStringForm: React.FC<RandomStringFormProps> = (props) => {
    const [randomString, setRandomString] = useState('');
    const validationSchema = object().shape({
        length: number().required('This field is required.').min(1),
    });

    const { register, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(validationSchema),
        mode: "onChange"
    });

    const onSubmit = async (data: IFormInputs) => {
        const result = await props.getRandomString(data.length);
        setRandomString(result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem >
                <IonInput
                    title="Input Length"
                    type="text"
                    name="length"
                    ref={register}
                    role="text"
                    className='input-length'
                    placeholder={'Length of random string Number'}
                    onIonChange={(e) => console.log(e.detail.value)}
                />
            </IonItem>
            {errors.length && (
                <IonText role="error" color="danger" className="ion-padding-start">
                    <small>{errors.length.message}</small>
                </IonText>
            )}
            <IonItem>
                <IonInput value={randomString} readonly={true} />
            </IonItem>
            <IonButton role="button" expand="block" type="submit" className="ion-margin-top">
                Generate Random String
            </IonButton>
        </form>
    );
};

export default RandomStringForm;
