import { useEffect, useState } from "react";

import euclideanDistance from "../../utils/euclideanDistance";
import getQDriveAtSize from "../../utils/getQDriveAtSize";
import I18n from "../I18n";
import POIDistance from "../QDriveRange/POIDistance";
import QDriveRange from "../QDriveRange/QDriveRange";
import "./ListQuantumDrives.css";

const posPLCrusader = [-18962176.0, -2664960.0, 0.0];
const posPLHurston = [12850457.093, 0.0, 0.0];
const posPLmicroTech = [22462085.252, 37185744.965, 0.0];
const posJPStantonToMagnus = [-62284273.861, 23467618.051, 20198396.608];
const posJPStantonToTerra = [51118221.617, -5269981.303, -4339551.619];

/* Distance Unit: Gm */
const disCRU_HUR = euclideanDistance(posPLCrusader, posPLHurston) / 1e6;
const disCRU_MIC = euclideanDistance(posPLCrusader, posPLmicroTech) / 1e6;
const disJPS2M_JPS2T =
  euclideanDistance(posJPStantonToMagnus, posJPStantonToTerra) / 1e6;

const ListQuantumDrives = ({
  maxSize,
  minSize,
  defaultQDClassName,
  QTFuel,
}) => {
  const [listQDrive, setListQDrive] = useState([]);

  useEffect(() => {
    let _tempRankQDriveRange = [];
    getQDriveAtSize(maxSize).forEach((item) => {
      _tempRankQDriveRange.push({
        type: "QDrive",
        range: QTFuel / item.stdItem.QuantumDrive.FuelRate / 1e9,
        item: item,
      });
    });
    _tempRankQDriveRange.reverse();
    _tempRankQDriveRange = _tempRankQDriveRange.concat([
      {
        type: "distance",
        range: disCRU_HUR,
        name: "QTRangeCRU2HUR",
      },
      {
        type: "distance",
        range: disCRU_MIC,
        name: "QTRangeCRU2MIC",
      },
      {
        type: "distance",
        range: disJPS2M_JPS2T,
        name: "QTRangeJPS2M2JPS2T",
      },
    ]);

    _tempRankQDriveRange.sort((a, b) => a.range - b.range);
    setListQDrive(_tempRankQDriveRange);
  }, []);

  return (
    <div className="QT-drive-range-container">
      <div className="unit">
        <p>
          <I18n text="StandardSpoolTime" />
        </p>
        <p>
          <I18n text="StandardCooldownTimeMax" />
        </p>
        <p>
          <I18n text="TimeFromCru2Hur" />
        </p>
        <p>
          <I18n text="QTRangeMax" />
        </p>
      </div>
      {listQDrive.map((item) =>
        item.type === "QDrive" ? (
          <QDriveRange
            QDrive={item.item}
            key={item.item.className}
            maxRange={listQDrive?.at(listQDrive.length - 1).range}
            QTRange={item.range}
            isDefault={item.item.className == defaultQDClassName}
          />
        ) : (
          <POIDistance
            name={item.name}
            maxRange={listQDrive?.at(listQDrive.length - 1).range}
            range={item.range}
            key={item.name}
          />
        ),
      )}
    </div>
  );
};

export default ListQuantumDrives;
