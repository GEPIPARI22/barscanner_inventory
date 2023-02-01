import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import JsonData from "../data.json";
import { Inertia } from "@inertiajs/inertia";
import { Head, useForm, Link } from '@inertiajs/inertia-react';

export default function Transport(props) {
  const { data, setData, post, processing, errors} = useForm({
    barscan: ''
  });

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    (data.barscan === transport_nr.value) ? Inertia.get(route('pallets')) : alert('Wrong');

  };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Transport</h2>}
        >
            <Head title="Transport" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Transport</div>

                        <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("dashboard") }
                                >
                                    Back
                                </Link>
                        </div>

                        <form onSubmit={submit}>
                            <div className="flex flex-col">

                                <div className="mt-4">
                                    <InputLabel forInput="barscan" value="Barscan" />

                                    <TextInput
                                        id="barscan"
                                        type="text"
                                        name="barscan"
                                        value={data.barscan}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.barscan} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel forInput="transport_nr" value="Transport_Nr" />

                                    <TextInput
                                        id="transport_nr"
                                        type="text"
                                        name="transport_nr"
                                        value={JsonData.Transport_Nr}
                                        className="mt-1 block w-full"
                                    />

                                </div>

                            </div>
                            <div className="flex items-center justify-end mt-4">


                                <PrimaryButton className="ml-4" processing={processing}>
                                    Go to pallets
                                </PrimaryButton>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
