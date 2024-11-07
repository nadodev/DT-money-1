import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, Overlay, TransactionType, TransactionTypeButton, } from './style';
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../lib/axios';

const newTransactionSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
});

type NewTransactionType = z.infer<typeof newTransactionSchema>;



export default function NewTransactionModal() {

    const {
        register,
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = useForm<NewTransactionType>({
        resolver: zodResolver(newTransactionSchema),
        defaultValues : {
            type: 'income'
        }
    })

    const newTransaction = async (data: NewTransactionType) => {

        const {
            description,
            price,
            category,
            type,
        } = data;

        await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date().toISOString()
        });
        
        //close modal and reload transactions

        window.location.reload();

    };

    return (
        <>
            <Dialog.Portal>
                <Overlay />
                <Content>
                    <Dialog.Title>
                        Nova Transação
                    </Dialog.Title>
                    <Close>
                        <X size={24} />
                    </Close>
                    <form action="#" onSubmit={handleSubmit(newTransaction)}>
                        <input type="text" placeholder="Descrição" required
                            {...register('description')}
                        />
                        <input type="number" placeholder="Preço" required
                            {...register('price', { valueAsNumber: true })}
                        />
                        <input type="text" placeholder="Categoria" required
                            {...register('category')}
                        />
                        <Controller
                            control={control}
                            name="type"
                            render={({field}) => {
                                return (
                                    <TransactionType
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <TransactionTypeButton
                                            value='income'
                                            variant='income'
                                            type="button"
                                            className="income"
                                            
                                        >
                                            <ArrowCircleUp size={24} /> Entrada
                                        </TransactionTypeButton>
                                        <TransactionTypeButton value='outcome' variant='outcome' type="button" className="outcome">
                                            <ArrowCircleDown size={24} /> Saída
                                        </TransactionTypeButton>
                                    </TransactionType>
                                )
                            }}
                        />
                        <button
                            disabled={isSubmitting}
                            type="submit">Cadastrar</button>
                    </form>
                </Content>
            </Dialog.Portal>
        </>
    )
}
