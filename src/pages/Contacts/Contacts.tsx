import React, { FC } from 'react';

import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from 'react-hook-form';

import { themeColors } from '../../packages/const';
import emailKey from '../../packages/utils/emailKey';
import { Wrapper, Text, Form, FieldContainer, Field, TextArea, SubmitButton } from './styled';

type FormFields = {
    name: string;
    email: string;
    phoneNumber: string;
    subject: string;
    query: string;
};

export const Contacts: FC = () => {
    const { register, handleSubmit, reset } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        emailjs.send(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID, data, emailKey.USER_ID).then(
            () => {
                alert('Email successfully sent');
            },
            (error) => {
                alert(error.text);
            }
        );

        reset();
    };

    return (
        <Wrapper>
            <Text size='36px' color={themeColors.pink}>
                Contact Us
            </Text>
            <Text>Leave message</Text>
            <Text size='15px' color={themeColors.green}>
                If you have a question regarding our services, feel free to contact us using the
                form below.
            </Text>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FieldContainer>
                    <Field
                        placeholder='Enter your name*'
                        {...register('name', { required: true })}
                        type='text'
                    />
                    <Field
                        placeholder='Enter your email*'
                        {...register('email', {
                            required: true,
                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                        })}
                        type='email'
                    />
                </FieldContainer>
                <FieldContainer>
                    <Field
                        placeholder='Enter your phone number*'
                        {...register('phoneNumber', { required: true, minLength: 13 })}
                        type='tel'
                    />
                    <Field placeholder='Enter your subject' {...register('subject')} type='text' />
                </FieldContainer>
                <TextArea as='textarea' placeholder='Type your query here' {...register('query')} />
                <SubmitButton type='submit' value={'Send message'} />
            </Form>
        </Wrapper>
    );
};
