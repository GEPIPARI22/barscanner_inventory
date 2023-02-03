import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import JsonData from "../data.json";
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";

export default function ItemsList(props) {

  const { wares } = usePage().props

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Items List</h2>}
        >
            <Head title="Items List" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Items List</div>

                        <div className="flex items-center justify-between p-6">
                            <Link
                                className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                href={ route("pallets") }
                            >
                                Back
                            </Link>
                        </div>

                        <div></div>

                            <table className="table-fixed w-full p-6">
                              <thead>
                                  <tr className="bg-gray-100">
                                      <th className="px-4 py-2">Palette_Nr</th>
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
                                  {JsonData.Palette.map((item, index) => (
                                      <tr key={index}>
                                        <td className="border px-4 py-2">{ item.Palette_Nr }</td>
                                        {item.Artikels.map((subitem, subindex) => (
                                          <tr key={subindex}>
                                            <td className="border px-4 py-2">{ subitem.Art_Nr }</td>
                                            <td className="border px-4 py-2">{ subitem.Werbung }</td>
                                            <td className="border px-4 py-2">{ subitem.Menge }</td>
                                            <td className="border px-4 py-2">{ subitem.Artikelbezeichnung }</td>
                                            {/* <td className="border px-4 py-2">{ subitem.VA }</td>
                                            <td className="border px-4 py-2">{ subitem.VK }</td>
                                            <td className="border px-4 py-2">{ subitem.Gesamt-VK }</td>
                                            <td className="border px-4 py-2">{ subitem.KG }</td> */}
                                            <td className="border px-4 py-2">
                                            <Link
                                                tabIndex="1"
                                                className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                href={route("wares.create", subindex+1)}
                                            >
                                                Save
                                            </Link>
                                            </td>
                                          </tr>
                                        ))}
                                      </tr>

                                  ))}

                              </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
