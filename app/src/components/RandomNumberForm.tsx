import { yupResolver } from '@hookform/resolvers/yup';
import { IonButton, IonInput, IonItem, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { number, object } from 'yup';
import { getRandomNumber } from '../actions/random';

interface IFormInputs {
    min: number
    max: number
}

interface RandomNumberFormProps {
}

const RandomNumberForm: React.FC<RandomNumberFormProps> = () => {
    // const [state, setState] = useState({
    //     min: null,
    //     max: null
    // })

    const handleChange = (e: any) => {
        // const { id, value } = e.target

        // console.log('new value', value);
        // setState(prevState => ({
        //     ...prevState,
        //     [id]: value
        // }));
    };

    const validationSchema = object().shape({
        min: number().required('This field is required.'),
        max: number().required('This field is required.'),
    });

    const { control, register, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(validationSchema)
    });
    const [randomNumber, setRandomNumber] = useState('');

    const onSubmit = async (data: IFormInputs) => {
        console.log('submission', data);
        const result = await getRandomNumber(data.min, data.max);
        setRandomNumber(result);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
                <IonInput
                    type="text"
                    name="min"
                    ref={register}
                    placeholder={'Min Number'}
                    onIonChange={handleChange}
                />
                {/* <Controller
                    as={<IonInput type="text" name="min" ref={register} placeholder={'Min Number'} onIonChange={handleChange} />}
                    name="min"
                    defaultValue=""
                    // defaultValue={state.min}
                    control={control}
                    // onChange={handleChange}
                    onChangeName="onIonChange"
                // rules={{
                //     required: "This field is required."
                // }}
                /> */}
            </IonItem>
            {errors.min && (
                <IonText color="danger" className="ion-padding-start">
                    <small>{errors.min.message}</small>
                </IonText>
            )}
            <IonItem>

                <IonInput
                    type="text"
                    name="max"
                    ref={register}
                    placeholder={'Max Number'}
                    onIonChange={handleChange}
                />
                {/* <Controller
                    as={<IonInput type="text" name="max" ref={register} placeholder={'Max Number'} onIonChange={handleChange} />}
                    name="max"
                    defaultValue=""
                    // defaultValue={state.max}
                    control={control}
                    // onChange={handleChange}
                    onChangeName="onIonChange"
                // rules={{
                //     required: "This field is required."
                // }}
                /> */}
            </IonItem>
            {errors.max && (
                <IonText color="danger" className="ion-padding-start">
                    <small>{errors.max.message}</small>
                </IonText>
            )}
            <IonItem>
                <IonInput value={randomNumber} readonly={true} />
            </IonItem>
            <IonButton expand="block" type="submit" className="ion-margin-top">
                Generate Random Number
            </IonButton>
        </form>
    );
};

export default RandomNumberForm;
