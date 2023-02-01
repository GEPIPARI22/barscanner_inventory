import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import icon_sto from '../../images/icon_sto_45px.png';
import image_scan from '../../images/image_scan-barcodes-into-arbitrary-targets_888x514.png';
import image_pair from '../../images/image_EN_STO_05_pair_device_456.png';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <div className="p-6 text-gray-900">You're logged in!</div>

                          <div className="flex gap-2 justify-center">
                            <div>
                              <img className='p-1' src={icon_sto} alt="" />
                            </div>
                            <div><p className='text-2xl font-bold flex'>Scan-IT to Office</p><p>A Mobil adatgyűjtés és távoli vonalkód/NFC szkennelés</p></div>
                          </div>

                          <div className='p-6'>
                          A Scan-IT to Office alkalmazás Android vagy iOS rendszert futtató mobileszközökön (okostelefonok és táblagépek) érhető el. Az alkalmazás használatához telepítenie kell a kívánt Scan-IT to Office-bővítményeket vagy a Scan-IT to Office-eszközöket az asztali számítógépére.
                          </div>

                          <div className='flex justify-center'>
                              <img src={image_scan} alt="" />
                          </div>

                          <div>
                            <h2 className='text-2xl font-bold flex justify-center pt-6'>Letöltés és telepítés</h2>
                          </div>

                          <div>
                            <ul className='list-disc list-inside p-20 marker:text-red-600'>
                              <li>
                                <a className='text-blue-500 underline'
                                href="https://play.google.com/store/apps/details?id=com.tecit.android.bluescanner.office"
                                target="_blank"
                                title="Telepítse a Scan-IT-t az Office for Androidra"
                                >Scan-IT to Office App for Android
                                </a> (Google Play)</li>
                              <li>
                                <a className='text-blue-500 underline' href="https://itunes.apple.com/app/scan-it-to-office/id1241932661"
                                target="_blank"
                                title="Telepítse a Scan-IT-t az Office for iOS-re">Scan-IT to Office App iOS-hez
                                </a> (App Store)</li>
                            </ul>
                          </div>

                          <div>
                            <p className='text-2xl font-bold flex justify-center p-6'>Kapcsolat hozzáadása (párosítás)
                            </p>
                          </div>

                          <div className='flex'>
                            <div className="p-6">A párosítás összekapcsolja a Scan-IT-t az Office alkalmazással az asztali számítógépen lévő célalkalmazással vagy céldokumentummal:
                              <div className='flex py-6 justify-center'>Asztali számítógép:</div>
                              <div>
                               Nyissa meg a telepített
                               <a className='text-blue-500 underline'
                               href="https://tec-it.com/en/software/mobile-data-acquisition/scan-it-to-office/manual-add-in/Default.aspx"
                               target="_blank"
                               title="Felhasználói kézikönyv – Scan-IT to Office bővítmény/eszközök"
                               >Scan-IT to Office bővítményt/eszközt
                               </a> , amely QR-kódot jelenít meg a kezdeti párosításhoz. Ha nem jelenik meg QR-kód, kattintson a gombra Add Phone.</div>
                            </div>

                            <div className='inline float-right'>
                                <img className='' src={image_pair} alt="" />
                            </div>
                          </div>

                      </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
