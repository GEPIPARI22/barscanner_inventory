import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {

  const { ware } = usePage().props;

  const { data, setData, put, errors } = useForm({
    Art_Nr: ware.Art_Nr || '',
    Werbung: ware.Werbung || '',
    Menge: ware.Menge || '',
    Artikelbezeichnung: ware.Artikelbezeichnung || '',
    VE: ware.VE || '',
    VK: ware.VK || '',
    Gesamt_VK: ware.Gesamt_VK || '',
    KG: ware.KG || '',
    Barcode: ware.Barcode || ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    put(route("wares.update", ware.id));
}

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit ware</h2>}
        >
            <Head title="Edit ware" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Edit ware</div>


                         <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("wares.index") }
                                >
                                    Back
                                </Link>
                            </div>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">

                                <div className="mb-4">
                                    <label className="">Art_Nr</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded"
                                        label="Art_Nr"
                                        name="Art_Nr"
                                        value={data.Art_Nr}
                                        onChange={(e) =>
                                            setData("Art_Nr", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.Art_Nr}
                                    </span>
                                </div>

                                <div className="mb-0">
                                    <label className="">Werbung</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded"
                                        label="Werbung"
                                        name="Werbung"
                                        errors={errors.Werbung}
                                        value={data.Werbung}
                                        onChange={(e) =>
                                            setData("Werbung", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.Werbung}
                                    </span>
                                </div>

                                <div className="mb-0">
                                    <label className="">Menge</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded"
                                        label="Menge"
                                        name="Menge"
                                        errors={errors.Menge}
                                        value={data.Menge}
                                        onChange={(e) =>
                                            setData("Menge", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.Menge}
                                    </span>
                                </div>

                                <div className="mb-0">
                                    <label className="">Artikelbezeichnung</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded"
                                        label="Artikelbezeichnung"
                                        name="Artikelbezeichnung"
                                        errors={errors.Artikelbezeichnung}
                                        value={data.Artikelbezeichnung}
                                        onChange={(e) =>
                                            setData("Artikelbezeichnung", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.Artikelbezeichnung}
                                    </span>
                                </div>

                                <div className="mb-0">
                                    <label className="">VE</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded"
                                        label="VE"
                                        name="VE"
                                        errors={errors.VE}
                                        value={data.VE}
                                        onChange={(e) =>
                                            setData("VE", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.VE}
                                    </span>
                                </div>

                                <div className="mb-0">
                                    <label className="">VK</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded"
                                        label="VK"
                                        name="VK"
                                        errors={errors.VK}
                                        value={data.VK}
                                        onChange={(e) =>
                                            setData("VK", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.VK}
                                    </span>
                                </div>

                                <div className="mb-0">
                                    <label className="">Gesamt_VK</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded"
                                        label="Gesamt_VK"
                                        name="Gesamt_VK"
                                        errors={errors.Gesamt_VK}
                                        value={data.Gesamt_VK}
                                        onChange={(e) =>
                                            setData("Gesamt_VK", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.Gesamt_VK}
                                    </span>
                                </div>

                                <div className="mb-0">
                                    <label className="">KG</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded"
                                        label="KG"
                                        name="KG"
                                        errors={errors.KG}
                                        value={data.KG}
                                        onChange={(e) =>
                                            setData("KG", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.KG}
                                    </span>
                                </div>

                                <div className="mb-0">
                                    <label className="">Barcode</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded"
                                        label="Barcode"
                                        name="Barcode"
                                        errors={errors.Barcode}
                                        value={data.Barcode}
                                        onChange={(e) =>
                                            setData("Barcode", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.Barcode}
                                    </span>
                                </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>

                        </div>


                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

