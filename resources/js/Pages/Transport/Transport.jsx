import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import JsonData from "../data.json";
import { Head } from '@inertiajs/inertia-react';

export default function Transport(props) {
  /* const { data, setData, post, processing, errors, reset } = useForm({
    barscan: "",
    barcode: ""
  }); */



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



                        <form>
                          <InputLabel
                            forInput="barscan" value="Barscan"
                          />
                          <TextInput
                            id="barscan"
                            name="barscan"
                            //value={data.name}
                            className="mt-2"
                            isFocused={true}
                            //handleChange={onHandleChange}
                            //required
                          />
                          <InputLabel
                            forInput="barcode" value="Barcode"
                          />
                          <TextInput
                            id="barcode"
                            name="barcode"
                            value={JsonData.Transport_Nr}
                            className="mt-2"
                            //handleChange={onHandleChange}
                            //required
                          />
                        </form>



                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
