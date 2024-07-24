"use client";

import { Suspense } from "react";
import Loader from "../../components/Loader";
import HomeComponent from "../HomeComponent";
import ContactFormComponent from "../ContactFormComponent";
import LocationsComponents from "../LocationsComponent";
import { MapComponent } from "../MapComponent";
import { MapProvider } from "@/app/providers/map-provider";

import "./contactComponent.scss";

export default function ContactComponent() {
  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="contact-wrapper">
            <div className="title-contact">
              <h1 className="d-flex pageHeader align-items-center justify-content-start mb-4">
                Контакт с нас
              </h1>
            </div>
              <div className="row">
                <div className="col-md-8">
                  <ContactFormComponent />
                </div>
                <div className="col-md-4">
                  <div className="contact-image"/>  
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                <LocationsComponents
                    title='ТЪРГОВСКА БАЗА и склад "ВЕКО ОЙЛ"'
                    message={`бул. „Христо Ботев“ 12
                      тел./факс: 0700 20 320
                      мобилен тел.: 0866 861 616
                      e-mail: office@kiaruse.com`}
                    statusMessage="Русе"
                    component={
                      <MapProvider>
                        <MapComponent
                          lat="43.83615669296568"
                          lng="25.965429756577716"
                          markerLat="43.8361"
                          markerLng="25.96481"
                          title='ВЕКО "ОЙЛ" ЕООД'
                          city="гр. Русе"
                          street="бул. „Христо Ботев“ 12"
                          fax="тел./факс: 0700 20 320"
                          phone="мобилен тел.: 0866 861 616"
                          hrefLink="https://www.google.com/maps/place//data=!4m2!3m1!1s0x40ae61d865c50243:0xb8052e6522d0f3e8?sa=X&ved=1t:8290&ictx=111"
                        />
                      </MapProvider>
                    }
                  />
                </div>
                <div className="col-md-6" style={{ position: "relative" }}>
                  <LocationsComponents
                    title='ТЪРГОВСКА БАЗА и склад "ВЕКО ОЙЛ"'
                    message={`ул. Магистрална № 9
                      тел./факс: 062 601 171
                      мобилен тел.: 0885 807 782
                      e-mail: vekovt@abv.bg`}
                      statusMessage="Велико Търново"
                      component={
                        <MapProvider>
                          <MapComponent 
                            lat="42.890395806548256"
                            lng="25.32305843849706"
                            markerLat="42.8903"
                            markerLng="25.3230"
                            title='ВЕКО "ОЙЛ" ЕООД'
                            city="гр. Велико Търново"
                            street="ул. Магистрална № 9"
                            fax="тел./факс: 062 601 171"
                            phone="мобилен тел.: 0885 807 782"
                            hrefLink="https://www.google.com/maps/place/%D0%92%D0%95%D0%9A%D0%9E+%D0%9E%D0%99%D0%9B+%D0%95%D0%9E%D0%9E%D0%94%2FVEKO+OIL+Ltd./@42.890184,25.32308,16z/data=!4m6!3m5!1s0x40a91a84d3f5f8f3:0x86f7e8acc9d7c3e2!8m2!3d42.8901836!4d25.3230799!16s%2Fg%2F1tj83bqn?hl=en-US&entry=ttu"
                          />
                      </MapProvider>
                    }
                  />
                </div>
              </div>
              <div className="row my-5">
                <div className="col-md-6">
                  <LocationsComponents
                    title='АВТОЦЕНТЪР "ВЕКО ОЙЛ" ЕООД'
                    message={`бул. Христо Смирненски № 41
                    тел.: 0889 309 396
                    Александър Конов - управител и дилър Субару
                    тел.: 088 933 3079
                    ШОУРУМ:
                    e-mail: sales@veko-oil.eu
                    Росен Занев - дилър Киа
                    тел.: 0886 448 946
                    Александър Атанасов - дилър Киа
                    тел.: 0886 449 023`}
                    statusMessage="Габрово"
                    component={
                      <MapProvider>
                        <MapComponent
                          lat=" 42.89042767761082"
                          lng="25.324024137536224"
                          markerLat="42.8904"
                          markerLng="25.3240"
                          title='ВЕКО "ОЙЛ" ЕООД'
                          city="гр. Габрово"
                          street="бул. Христо Смирненски №41"
                          phone="мобилен тел.: 0889 309 396"
                          hrefLink="https://www.google.com/maps?ll=42.890184,25.32308&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=9725497749148255202"
                        />
                    </MapProvider>
                    }
                  />
                </div>
                <div className="col-md-6">
                  <LocationsComponents
                    title='АВТОСЕРВИЗ "ВЕКО ОЙЛ" ЕООД'
                    message={`e-mail: service@veko-oil.eu
                      skype: Субару Киа Сервиз Габрово
                      Станислав Саламанов - управител автосервиз
                      тел.: 0887 932 700
                      приемчик автосервиз
                      тел.: 0886 448 909
                      резервни части
                      тел.: 0882 693 721`}
                      statusMessage="Габрово"
                      component={
                        <MapProvider>
                          <MapComponent
                            lat=" 42.89042767761082"
                            lng="25.324024137536224"
                            markerLat="42.8904"
                            markerLng="25.3240"
                            title='ВЕКО "ОЙЛ" ЕООД'
                            city="гр. Габрово"
                            street="бул. Христо Смирненски №41"
                            phone="мобилен тел.: 0887 932 700"
                            hrefLink="https://www.google.com/maps?ll=42.890184,25.32308&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=9725497749148255202"
                          />
                      </MapProvider>
                    }
                  />
                </div>
              </div>
            </div>
        }
      />
    </Suspense>
  );
}
