import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";

export default function WaresList(props) {

  const { wares } = usePage().props

  function destroy(e) {
    if (confirm("Are you sure you want to delete this ware?")) {
        Inertia.delete(route("wares.destroy", e.currentTarget.id));
    }
}

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Wares List</h2>}
        >
            <Head title="Wares List" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Wares List</div>


                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                href={ route("wares.create") }
                            >
                                Create Ware
                            </Link>
                        </div>


                        <table className="table-fixed w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 w-20">id</th>
                                    <th className="px-4 py-2">Art-Nr</th>
                                    <th className="px-4 py-2">Werbung</th>
                                    <th className="px-4 py-2">Menge</th>
                                    <th className="px-4 py-2">Artikelbezeichnung</th>
                                    <th className="px-4 py-2">VE</th>
                                    <th className="px-4 py-2">VK</th>
                                    <th className="px-4 py-2">Gesamt-VK</th>
                                    <th className="px-4 py-2">KG</th>
                                    <th className="px-4 py-2">Barcode</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wares.map(({
                                  id,
                                  Art_Nr,
                                  Werbung,
                                  Menge,
                                  Artikelbezeichnung,
                                  VE,
                                  VK,
                                  Gesamt_VK,
                                  KG,
                                  Barcode
                                  }) => (
                                    <tr>
                                        <td className="border px-4 py-2">{ id }</td>
                                        <td className="border px-4 py-2">{ Art_Nr }</td>
                                        <td className="border px-4 py-2">{ Werbung }</td>
                                        <td className="border px-4 py-2">{ Menge }</td>
                                        <td className="border px-4 py-2">{ Artikelbezeichnung }</td>
                                        <td className="border px-4 py-2">{ VE }</td>
                                        <td className="border px-4 py-2">{ VK }</td>
                                        <td className="border px-4 py-2">{ Gesamt_VK }</td>
                                        <td className="border px-4 py-2">{ KG }</td>
                                        <td className="border px-4 py-2">{ Barcode }</td>
                                        <td className="border px-4 py-2">
                                            <Link
                                                tabIndex="1"
                                                className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                href={route("wares.edit", id)}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={destroy}
                                                id={id}
                                                tabIndex="-1"
                                                type="button"
                                                className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {wares.length === 0 && (
                                    <tr>
                                        <td
                                            className="px-6 py-4 border-t"
                                            colSpan="4"
                                        >
                                            No wres found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


