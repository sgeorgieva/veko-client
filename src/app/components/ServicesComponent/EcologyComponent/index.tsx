"use client";

import { Suspense } from "react";
import { Icon } from "gestalt";
import Loader from "../../Loader";
import HomeComponent from "../../HomeComponent";

import "./ecologyComponent.scss";

export default function EcologyComponent() {
  return (
    <Suspense fallback={<Loader />}>
      <HomeComponent
        isHomePage={false}
        component={
          <div className="contact-wrapper">
            <div className="title-contact">
              <h1 className="pageHeader mb-4">Екология</h1>
            </div>
            <div className="description-contact pageContent">
              <div className="row">
                <div className="col-md-9">
                  <p>
                    &ldquo;ВЕКО ОЙЛ&ldquo; ЕООД притежава разрешително № 010-ДО-686-00 от 14.06.2012 г. 
                    от РИОСВ – гр. Русе за извършване на дейности по събиране, временно съхранение и транспортиране на отпадъци 
                    на териториятана цялата страна.
                    Фирмата предлага консултации, изготвяне на документи по ЗУО, сключване на договор за отпадъци с лицензирана фирма.
                    Дружеството има разработена програма за дейностите по управление на следните видове отпадъци: 
                  </p>
                  <ul>
                    <li>приемане на отработени /отпадъчни/ масла от крайния потребител, и от площадките за временно съхранение на масла,
                      които са образувани в резултат на експлоатацията на техниката и оборудването на юридическите лица, код:13.02.05*,
                      13.02.06*, 13.02.08*, 13.01.10*, 13.01.11*, 13.01.13*, 13.03.07*, 13.03.08*, 13.03.10*, 13.05.06*,13.05.07*; 
                    </li>
                    <li>негодни за употреба батерии и акумулатори, код: 16.06.01*;</li>
                    <li>абсорбенти, филтърни материали , кърпи за изтриване и предпазни облекла замърсени с опасни вещества,
                      код:15.02.02*;
                    </li>
                    <li>маслени филтри, код: 16.01.07*</li>
                    <li>флуоресцентни тръби и други отпадъци, съдържащи живак, код: 20.01.21*; </li>
                  </ul>
                  <p>Фирмените площадки за временно съхранение на отработени масла са с местонахождение както следва:</p>
                  <ul>
                    <li>Площадка №1 - гр. Велико Търново, ул.Магистрална № 9;</li>
                    <li>Площадка №2 - гр. Габрово, ул.Христо Смирненски № 41.</li>
                  </ul>
                  <hr />
                  <h5 className="text-uppercase mb-3">за контакти:</h5>
                  <div className="d-flex mb-2">
                    <Icon icon="phone" color="darkGrey"/><p className="d-flex mb-0 ms-2">062/ 600 324</p>
                  </div>
                  <div className="d-flex mb-2">
                    <Icon icon="phone" color="darkGrey"/><p className="d-flex mb-0 ms-2">0887 740 189</p>
                  </div>
                  <div className="d-flex mb-2">
                    <Icon icon="gmail" color="darkGrey"/><p className="d-flex mb-0 ms-2">vekovt@abv.bg</p>
                  </div>
                  <div className="d-flex mt-3">
                    <Icon icon="file-box" color="darkGrey"/>
                    <span className="ms-2">Копие от Разрешителното може да видите&nbsp;  
                      <a className="fw-bold" href="https://veko-oil.eu/image/data/Dokumenti/Razreshitelno Veko oil 2014.pdf" target="_blanck">тук</a>.
                    </span>
                  </div>
                </div>
                <div className="col-md-3">
                  <span className="ecology-image" />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </Suspense>
  );
}