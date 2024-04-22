/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IEventItem {
    id: string,
    eventDate: string,
    eventTime: string,
    name: string,
    img?: string,
    location: string,
    description: string,
    shortDescription: string,
    price: number,
    currency: string,
    locationType: 'Online Event' | 'In Person'
    [rest: string]: any
}

export interface IEventItemProps {
    event?: IEventItem,
    onClick: (value?: any) => void
}
export interface IContactRowItem {
    id:string
    name: string,
    profession: string,
    linkedInUrl: string,
    email: string,
    txn?: string
    event?: string
    owner?: string
    [rest: string]: any
}

export interface IEventRowItem {
    date: string,
    time: string,
    img?: string,
    venue: string,
    attending: string,
    [rest: string]: any
}


export interface CheckboxProps {
    theme?: 'nodes' | 'primary'
    size?: 'default' | 'lg'
    checked: boolean,
    setChecked: (value: any) => void,
    className?: string
}

export interface SearchbarProps {
    iconPosition?: 'left' | 'right',
    searchTerm: string,
    placeholder?: string,
    className?: string,
    setSearchTerm: (value: any) => void
}

export interface AxiosData {
    message?: string,
    data: any
}

export interface IPaystackCallbackResponse {
    reference: string;
    trans: string;
    status: string;
    message: string;
    transaction: string;
    trxref: string;
    redirecturl: string;
}

export interface IPayWithPaystack {
    email: string,
    amount: number,
    plan: string,
    onSuccess: (response: IPaystackCallbackResponse) => void,
    onClose: () => void
}


export interface EventsQuery {
    title?: string;
    search?: string;
    page?: number;
    pageSize?: number
}

export interface ContactsQuery {
    name?: string;
    search?: string;
    page?: number;
    pageSize?: number
}


export interface StringMap {
    [key: string]: any
}