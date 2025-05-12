import FlightCharacteristics from "../components/FlightCharacteristics/FlightCharacteristics";

const shipList = [
  {
    "ClassName": "AEGS_Avenger_Stalker",
    "Name": "Aegis Avenger Stalker",
    "Description": "Initially designed as Aegis’ frontline carrier ship for the military, the Avenger Stalker took a different path, ultimately having a long and storied career as the standard patrol craft of the UEE Advocacy. Utilizing its cargo hold for prisoner transport, the Avenger features a sturdy, reliable hull and the capacity for larger-than-expected engine mounts.",
    "Career": "Combat",
    "Role": "Interceptor",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.71
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 48986.3,
    "ComponentsMass": 4759.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 16.5,
      "Height": 5.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 2500.0,
          "Body": 2500.0
        },
        "Parts": {
          "Canopy": 1500.0,
          "Wing_Right": 680.0,
          "Wing_Flap_Right": 10.0,
          "WingTip_Right": 1000.0,
          "Wing_Left": 680.0,
          "Wing_Flap_Left": 10.0,
          "WingTip_Left": 1000.0,
          "HullTail_Right": 1000.0,
          "Right_Tail_Fin_Flap": 10.0,
          "HullTail_Left": 1000.0,
          "Left_Tail_Fin_Flap": 10.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_attach": 9100.0
        },
        "Retro": {
          "thruster_left_retro": 8100.0,
          "thruster_right_retro": 8100.0
        },
        "Maneuvering": {
          "thruster_left_upper_front": 7100.0,
          "thruster_right_upper_front": 7100.0,
          "thruster_left_lower_front": 7100.0,
          "thruster_right_lower_front": 7100.0,
          "thruster_left_upper_rear": 7100.0,
          "thruster_right_upper_rear": 7100.0,
          "thruster_left_lower_rear": 7100.0,
          "thruster_right_lower_rear": 7100.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 260.0,
      "MaxSpeed": 1425.0,
      "Pitch": 52.5,
      "Yaw": 48.5,
      "Roll": 180.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 6174081.0,
        "Retro": 2000.0,
        "Vtol": 0.0,
        "Maneuvering": 5880000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.5,
        "Retro": 4.0,
        "Strafe": 4.5,
        "Up": 6.0,
        "Down": 4.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 610.0,
          "BoostSpeedBackward": 280.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.675,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 2.25,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 9000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 771.76,
        "Retro": 0.25,
        "Vtol": 0.0,
        "Maneuvering": 735.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 4908.0,
        "SCMActive": 5849.0,
        "NAV": 12441.0
      },
      "Infrared": {
        "Start": 5748.0
      },
      "CrossSection": {
        "Front": 2028.0,
        "Side": 5923.0,
        "Top": 8114.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 2360.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 8098.0
    },
    "Insurance": {
      "StandardClaimTime": 4.86,
      "ExpeditedClaimTime": 1.62,
      "ExpeditedCost": 2658.0
    },
    "Buy": {
      "New Deal, Lorville": 1587600.0
    }
  },
  {
    "ClassName": "AEGS_Avenger_Titan",
    "Name": "Aegis Avenger Titan",
    "Description": "Lacking the Prisoner Cells of the Stalker or the EMP Generator of the Warlock, the Titan’s hold is free to carry cargo. Couple that available space with the Avenger’s tried and true combat abilities and you’ve got a light cargo hauler that’s more than capable of handling itself in a fight.",
    "Career": "Transporter",
    "Role": "Courier",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 8.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.01
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 48986.68,
    "ComponentsMass": 5147.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 16.5,
      "Height": 5.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 2500.0,
          "Body": 2500.0
        },
        "Parts": {
          "Canopy": 1500.0,
          "Wing_Right": 680.0,
          "Wing_Flap_Right": 10.0,
          "WingTip_Right": 1000.0,
          "Wing_Left": 680.0,
          "Wing_Flap_Left": 10.0,
          "WingTip_Left": 1000.0,
          "HullTail_Right": 1000.0,
          "Right_Tail_Fin_Flap": 10.0,
          "HullTail_Left": 1000.0,
          "Left_Tail_Fin_Flap": 10.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_attach": 9100.0
        },
        "Retro": {
          "thruster_left_retro": 8100.0,
          "thruster_right_retro": 8100.0
        },
        "Maneuvering": {
          "thruster_left_upper_front": 7100.0,
          "thruster_right_upper_front": 7100.0,
          "thruster_left_lower_front": 7100.0,
          "thruster_right_lower_front": 7100.0,
          "thruster_left_upper_rear": 7100.0,
          "thruster_right_upper_rear": 7100.0,
          "thruster_left_lower_rear": 7100.0,
          "thruster_right_lower_rear": 7100.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 260.0,
      "MaxSpeed": 1425.0,
      "Pitch": 52.5,
      "Yaw": 48.5,
      "Roll": 180.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 6237929.0,
        "Retro": 2000.0,
        "Vtol": 0.0,
        "Maneuvering": 5951392.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.5,
        "Retro": 4.0,
        "Strafe": 4.5,
        "Up": 6.0,
        "Down": 4.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 610.0,
          "BoostSpeedBackward": 280.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.675,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 2.25,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 9000000.0,
      "FuelIntakeRate": 22.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 779.741,
        "Retro": 0.25,
        "Vtol": 0.0,
        "Maneuvering": 743.924
      },
      "IntakeToMainFuelRatio": 2.82,
      "TimeForIntakesToFillTank": 409090.91
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 4908.0,
        "SCMActive": 5849.0,
        "NAV": 12441.0
      },
      "Infrared": {
        "Start": 5832.0
      },
      "CrossSection": {
        "Front": 1904.0,
        "Side": 5561.0,
        "Top": 7617.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3700.0,
      "PilotBurstDPS": 2360.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9515.0
    },
    "Insurance": {
      "StandardClaimTime": 4.05,
      "ExpeditedClaimTime": 1.35,
      "ExpeditedCost": 2343.0
    },
    "Buy": {
      "New Deal, Lorville": 1358280.0
    }
  },
  {
    "ClassName": "AEGS_Avenger_Titan_Renegade",
    "Name": "Aegis Avenger Titan Renegade",
    "Description": "Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Renegade pays tribute to famed pilot Danny Solomon for his notable work with the Advocacy to bring justice to Bremen. This Avenger Titan comes equipped with a specialized dogfighting focused loadout and a custom special edition livery honoring this iconic ship.",
    "Career": "Transporter",
    "Role": "Courier",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 8.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.01
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 48986.42,
    "ComponentsMass": 5067.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 16.5,
      "Height": 5.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 2500.0,
          "Body": 2500.0
        },
        "Parts": {
          "Canopy": 1500.0,
          "Wing_Right": 680.0,
          "Wing_Flap_Right": 10.0,
          "WingTip_Right": 1000.0,
          "Wing_Left": 680.0,
          "Wing_Flap_Left": 10.0,
          "WingTip_Left": 1000.0,
          "HullTail_Right": 1000.0,
          "Right_Tail_Fin_Flap": 10.0,
          "HullTail_Left": 1000.0,
          "Left_Tail_Fin_Flap": 10.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_attach": 9100.0
        },
        "Retro": {
          "thruster_left_retro": 8100.0,
          "thruster_right_retro": 8100.0
        },
        "Maneuvering": {
          "thruster_left_upper_front": 7100.0,
          "thruster_right_upper_front": 7100.0,
          "thruster_left_lower_front": 7100.0,
          "thruster_right_lower_front": 7100.0,
          "thruster_left_upper_rear": 7100.0,
          "thruster_right_upper_rear": 7100.0,
          "thruster_left_lower_rear": 7100.0,
          "thruster_right_lower_rear": 7100.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 260.0,
      "MaxSpeed": 1425.0,
      "Pitch": 52.5,
      "Yaw": 48.5,
      "Roll": 180.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 6237929.0,
        "Retro": 2000.0,
        "Vtol": 0.0,
        "Maneuvering": 5951392.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.6,
        "Retro": 4.0,
        "Strafe": 4.5,
        "Up": 6.0,
        "Down": 4.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 610.0,
          "BoostSpeedBackward": 280.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.675,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 2.25,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 9000000.0,
      "FuelIntakeRate": 22.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 779.741,
        "Retro": 0.25,
        "Vtol": 0.0,
        "Maneuvering": 743.924
      },
      "IntakeToMainFuelRatio": 2.82,
      "TimeForIntakesToFillTank": 409090.91
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 4908.0,
        "SCMActive": 5849.0,
        "NAV": 12441.0
      },
      "Infrared": {
        "Start": 5832.0
      },
      "CrossSection": {
        "Front": 1904.0,
        "Side": 5561.0,
        "Top": 7617.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3700.0,
      "PilotBurstDPS": 1549.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9515.0
    },
    "Insurance": {
      "StandardClaimTime": 4.05,
      "ExpeditedClaimTime": 1.35,
      "ExpeditedCost": 2343.0
    },
    "Buy": {
      "New Deal, Lorville": 1852200.0
    }
  },
  {
    "ClassName": "AEGS_Avenger_Warlock",
    "Name": "Aegis Avenger Warlock",
    "Description": "The Avenger Warlock was built towards a single design philosophy: stop ships, don’t destroy them. Probably the closest to a non-lethal fighter, the Warlock is outfitted with a Behring REP-8 EMP Generator, capable of emitting a powerful electromagnetic wave to disable any electronics unfortunate enough to be within the blast radius.",
    "Career": "Combat",
    "Role": "Interceptor",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.71
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 48986.75,
    "ComponentsMass": 8889.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 16.5,
      "Height": 5.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 2500.0,
          "Body": 2500.0
        },
        "Parts": {
          "Canopy": 1500.0,
          "Wing_Right": 680.0,
          "Wing_Flap_Right": 10.0,
          "WingTip_Right": 1000.0,
          "Wing_Left": 680.0,
          "Wing_Flap_Left": 10.0,
          "WingTip_Left": 1000.0,
          "HullTail_Right": 1000.0,
          "Right_Tail_Fin_Flap": 10.0,
          "HullTail_Left": 1000.0,
          "Left_Tail_Fin_Flap": 10.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_attach": 9100.0
        },
        "Retro": {
          "thruster_left_retro": 8100.0,
          "thruster_right_retro": 8100.0
        },
        "Maneuvering": {
          "thruster_left_upper_front": 7100.0,
          "thruster_right_upper_front": 7100.0,
          "thruster_left_lower_front": 7100.0,
          "thruster_right_lower_front": 7100.0,
          "thruster_left_upper_rear": 7100.0,
          "thruster_right_upper_rear": 7100.0,
          "thruster_left_lower_rear": 7100.0,
          "thruster_right_lower_rear": 7100.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 260.0,
      "MaxSpeed": 1425.0,
      "Pitch": 52.5,
      "Yaw": 48.5,
      "Roll": 180.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 6226192.0,
        "Retro": 2000.0,
        "Vtol": 0.0,
        "Maneuvering": 5942835.2
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.6,
        "Retro": 4.0,
        "Strafe": 4.5,
        "Up": 6.0,
        "Down": 4.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 610.0,
          "BoostSpeedBackward": 280.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.675,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 2.25,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 9000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 778.274,
        "Retro": 0.25,
        "Vtol": 0.0,
        "Maneuvering": 742.854
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 6225.0,
        "SCMActive": 7825.0,
        "NAV": 13758.0
      },
      "Infrared": {
        "Start": 6048.0
      },
      "CrossSection": {
        "Front": 2031.0,
        "Side": 5929.0,
        "Top": 8122.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 2360.0,
      "TurretsBurstDPS": 0.0,
      "TotalEMPDmg": 2750.0,
      "TotalMissilesDmg": 9558.0
    },
    "Insurance": {
      "StandardClaimTime": 4.86,
      "ExpeditedClaimTime": 1.62,
      "ExpeditedCost": 2724.0
    },
    "Buy": {
      "New Deal, Lorville": 2249100.0
    }
  },
  {
    "ClassName": "AEGS_Eclipse",
    "Name": "Aegis Eclipse",
    "Description": "The Aegis Eclipse is a bomber designed to get in and strike before it's ever even spotted. After extensive service with the UEE, this high-tech military equipment made its civilian market debut in 2947.",
    "Career": "Combat",
    "Role": "Stealth Bomber",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 45720.0,
    "ComponentsMass": 12936.0,
    "Dimensions": {
      "Length": 20.5,
      "Width": 36.6,
      "Height": 4.4
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.6,
        "Infrared": 0.6,
        "CrossSection": 0.6
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 10000.0,
          "body": 10000.0
        },
        "Parts": {
          "cockpit_canopy": 1500.0,
          "wing_left": 1500.0,
          "wing_left_broken": 320.0,
          "wingtip_left": 200.0,
          "wing_right": 1500.0,
          "wing_right_broken": 320.0,
          "wingtip_right": 200.0,
          "tail": 1500.0,
          "bay_door_l_a": 1.0,
          "bay_door_l_b": 1.0,
          "bay_door_r_a": 1.0,
          "bay_door_r_b": 1.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 12500.0,
          "engine_right": 12500.0
        },
        "Retro": {
          "thruster_retro_left": 11500.0,
          "thruster_retro_right": 11500.0
        },
        "Maneuvering": {
          "thruster_topFL": 10500.0,
          "thruster_bottomFL": 10500.0,
          "thruster_bottomFR": 10500.0,
          "thruster_topFR": 10500.0,
          "thruster_topRL": 10500.0,
          "thruster_topRR": 10500.0,
          "thruster_bottomRL": 10500.0,
          "thruster_bottomRR": 10500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 202.0,
      "MaxSpeed": 1050.0,
      "Pitch": 33.0,
      "Yaw": 33.0,
      "Roll": 110.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 3566000.0,
        "Retro": 216000.0,
        "Vtol": 0.0,
        "Maneuvering": 5448000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.5,
        "Retro": 4.5,
        "Strafe": 6.5,
        "Up": 6.5,
        "Down": 3.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 500.0,
          "BoostSpeedBackward": 215.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.6,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 2.25,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 9000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 445.75,
        "Retro": 27.0,
        "Vtol": 0.0,
        "Maneuvering": 681.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3514.0,
        "SCMActive": 4201.0,
        "NAV": 8034.0
      },
      "Infrared": {
        "Start": 4026.0
      },
      "CrossSection": {
        "Front": 537.0,
        "Side": 4366.0,
        "Top": 2452.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 1186861.0
    },
    "Insurance": {
      "StandardClaimTime": 16.54,
      "ExpeditedClaimTime": 5.51,
      "ExpeditedCost": 17643.0
    },
    "Buy": {
      "New Deal, Lorville": 7938000.0
    }
  },
  {
    "ClassName": "AEGS_Gladius",
    "Name": "Aegis Gladius",
    "Description": "The Gladius is an older design which has been updated over the years to keep up with modern technology. In military circles, the Gladius is beloved for its performance and its simplicity. A fast, light fighter with a laser-focus on dogfighting, the Gladius is an ideal interceptor or escort ship.",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 48552.06,
    "ComponentsMass": 6005.0,
    "Dimensions": {
      "Length": 20.0,
      "Width": 17.0,
      "Height": 5.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.43,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2134.0,
          "Nose": 2000.0
        },
        "Parts": {
          "WingLeft": 600.0,
          "WingLeft_Tip": 260.0,
          "TipWing_Left_B": 50.0,
          "TipWing_Left_A": 50.0,
          "WingLeft_Mid_Flap": 50.0,
          "WingRight": 600.0,
          "WingRight_Tip": 260.0,
          "TipWing_Right_A": 50.0,
          "TipWing_Right_B": 50.0,
          "WingRight_Mid_Flap": 50.0,
          "Belly": 240.0,
          "Belly_Wing_Left": 150.0,
          "Belly_Wing_Right": 150.0,
          "Rudder_Right": 50.0,
          "Rudder_Right_Flap": 50.0,
          "RearWingRight": 50.0,
          "RearWingRight_Flap": 50.0,
          "RearWingLeft": 50.0,
          "RearWingLeft_Flap": 50.0,
          "Rudder_Left": 50.0,
          "Rudder_Left_Flap": 50.0,
          "FrontWing_Right": 50.0,
          "FrontWing_Left": 50.0,
          "Canopy": 100.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 11500.0,
          "thruster_main_right": 11500.0
        },
        "Retro": {
          "thruster_retro_left": 10500.0,
          "thruster_retro_right": 10500.0
        },
        "Maneuvering": {
          "thruster_wing_left_top": 9500.0,
          "thruster_wing_left_bottom": 9500.0,
          "thruster_wing_right_top": 9500.0,
          "thruster_wing_right_bottom": 9500.0,
          "thruster_front_left_top": 9500.0,
          "thruster_front_left_side": 9500.0,
          "thruster_front_right_side": 9500.0,
          "thruster_front_right_top": 9500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1230.0,
      "Pitch": 70.0,
      "Yaw": 52.0,
      "Roll": 200.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4910000.0,
        "Retro": 412000.0,
        "Vtol": 0.0,
        "Maneuvering": 11336000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 13.7,
        "Retro": 4.4,
        "Strafe": 10.4,
        "Up": 10.0,
        "Down": 5.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 520.0,
          "BoostSpeedBackward": 268.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 13500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 613.75,
        "Retro": 51.5,
        "Vtol": 0.0,
        "Maneuvering": 1417.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 4838.0,
        "SCMActive": 5733.0,
        "NAV": 13351.0
      },
      "Infrared": {
        "Start": 9324.0
      },
      "CrossSection": {
        "Front": 1956.0,
        "Side": 7823.0,
        "Top": 9779.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 1598.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 14568.0
    },
    "Insurance": {
      "StandardClaimTime": 5.83,
      "ExpeditedClaimTime": 1.94,
      "ExpeditedCost": 2335.0
    },
    "Buy": {
      "New Deal, Lorville": 2381400.0
    }
  },
  {
    "ClassName": "AEGS_Gladius_Valiant",
    "Name": "Aegis Gladius Valiant",
    "Description": "Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Valiant pays tribute to famed defense pilot Condi Hillard for being the first Human on record to defeat a Vanduul in combat. This Gladius comes equipped with a specialized dogfighting focused loadout and a custom special edition livery honoring her iconic ship.",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 50151.51,
    "ComponentsMass": 6101.0,
    "Dimensions": {
      "Length": 20.0,
      "Width": 17.0,
      "Height": 5.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.43,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2134.0,
          "Nose": 2000.0
        },
        "Parts": {
          "WingLeft": 600.0,
          "WingLeft_Tip": 260.0,
          "TipWing_Left_B": 50.0,
          "TipWing_Left_A": 50.0,
          "WingLeft_Mid_Flap": 50.0,
          "WingRight": 600.0,
          "WingRight_Tip": 260.0,
          "TipWing_Right_A": 50.0,
          "TipWing_Right_B": 50.0,
          "WingRight_Mid_Flap": 50.0,
          "Belly": 240.0,
          "Belly_Wing_Left": 150.0,
          "Belly_Wing_Right": 150.0,
          "Rudder_Right": 50.0,
          "Rudder_Right_Flap": 50.0,
          "RearWingRight": 50.0,
          "RearWingRight_Flap": 50.0,
          "RearWingLeft": 50.0,
          "RearWingLeft_Flap": 50.0,
          "Rudder_Left": 50.0,
          "Rudder_Left_Flap": 50.0,
          "FrontWing_Right": 50.0,
          "FrontWing_Left": 50.0,
          "Canopy": 100.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 11500.0,
          "thruster_main_right": 11500.0
        },
        "Retro": {
          "thruster_retro_left": 10500.0,
          "thruster_retro_right": 10500.0
        },
        "Maneuvering": {
          "thruster_wing_left_top": 9500.0,
          "thruster_wing_left_bottom": 9500.0,
          "thruster_wing_right_top": 9500.0,
          "thruster_wing_right_bottom": 9500.0,
          "thruster_front_left_top": 9500.0,
          "thruster_front_left_side": 9500.0,
          "thruster_front_right_side": 9500.0,
          "thruster_front_right_top": 9500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1230.0,
      "Pitch": 70.0,
      "Yaw": 52.0,
      "Roll": 200.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4910000.0,
        "Retro": 412000.0,
        "Vtol": 0.0,
        "Maneuvering": 11336000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 13.7,
        "Retro": 4.4,
        "Strafe": 10.4,
        "Up": 10.0,
        "Down": 5.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 520.0,
          "BoostSpeedBackward": 268.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 13500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 613.75,
        "Retro": 51.5,
        "Vtol": 0.0,
        "Maneuvering": 1417.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 4838.0,
        "SCMActive": 5733.0,
        "NAV": 13351.0
      },
      "Infrared": {
        "Start": 9324.0
      },
      "CrossSection": {
        "Front": 1956.0,
        "Side": 7823.0,
        "Top": 9779.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 1639.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 15147.0
    },
    "Insurance": {
      "StandardClaimTime": 5.83,
      "ExpeditedClaimTime": 1.94,
      "ExpeditedCost": 2934.0
    },
    "Buy": {
      "New Deal, Lorville": 2910600.0
    }
  },
  {
    "ClassName": "AEGS_Hammerhead",
    "Name": "Aegis Hammerhead",
    "Description": "A fast patrol ship with multiple turrets designed to combat fighters, the Hammerhead is equally suited to support larger capital ships in a fleet or act as a flagship for fighter groups.",
    "Career": "Combat",
    "Role": "Corvette",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 40.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 10.8,
      "PersonalInventory": 10.28
    },
    "Crew": 2,
    "WeaponCrew": 6,
    "OperationsCrew": 0,
    "Mass": 4542311.0,
    "ComponentsMass": 106468.0,
    "Dimensions": {
      "Length": 120.0,
      "Width": 72.0,
      "Height": 16.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 80000.0,
          "nose": 80000.0
        },
        "Parts": {
          "custom_decal": 200.0,
          "Tail": 65000.0,
          "Front_Right": 15200.0,
          "Front_Left": 15200.0,
          "Engine_MountB_Right": 10000.0,
          "Engine_MountB_Left": 10000.0,
          "Engine_mountA_Right": 10000.0,
          "Engine_mountA_Left": 10000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_bottom_right": 25000.0,
          "thruster_main_bottom_left": 25000.0,
          "thruster_main_top_right": 25000.0,
          "thruster_main_top_left": 25000.0
        },
        "Retro": {
          "thruster_retro_right": 23400.0,
          "thruster_retro_left": 23400.0
        },
        "Maneuvering": {
          "thruster_side_rear_right": 20000.0,
          "thruster_side_rear_left": 20000.0,
          "thruster_bottom_rear_right": 20000.0,
          "thruster_bottom_rear_left": 20000.0,
          "thruster_top_rear_right": 20000.0,
          "thruster_top_rear_left": 20000.0,
          "thruster_bottom_front_right": 20000.0,
          "thruster_bottom_front_left": 20000.0,
          "thruster_side_front_right": 20000.0,
          "thruster_top_front_right": 20000.0,
          "thruster_side_front_left": 20000.0,
          "thruster_top_front_left": 20000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 160.0,
      "MaxSpeed": 950.0,
      "Pitch": 20.0,
      "Yaw": 18.0,
      "Roll": 30.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 232600000.0,
        "Retro": 93000000.0,
        "Vtol": 0.0,
        "Maneuvering": 428400000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.10,
        "Retro": 2.0,
        "Strafe": 2.0,
        "Up": 2.5,
        "Down": 2.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 7.0,
        "ScmMode": {
          "BoostSpeedForward": 320.0,
          "BoostSpeedBackward": 170.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 450000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 6600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 29075.0,
        "Retro": 11625.0,
        "Vtol": 0.0,
        "Maneuvering": 53550.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 13312.0,
        "SCMActive": 15463.0,
        "NAV": 28759.0
      },
      "Infrared": {
        "Start": 19612.0
      },
      "CrossSection": {
        "Front": 8392.0,
        "Side": 39312.0,
        "Top": 6037.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 10.0
      },
      "Modifiers": {
        "PowerRatioMultiplier": 2.9,
        "MaxAmmoLoadMultiplier": 1.0,
        "MaxRegenPerSecMultiplier": 1.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 112200.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 19629.0,
      "TotalMissilesDmg": 91933.0
    },
    "Insurance": {
      "StandardClaimTime": 48.6,
      "ExpeditedClaimTime": 16.2,
      "ExpeditedCost": 24582.0
    },
    "Buy": {
      "New Deal, Lorville": 47958752.0
    }
  },
  {
    "ClassName": "AEGS_Idris_M_PU",
    "Name": "Aegis Idris M (XenoThreat)",
    "Description": "A mark two 'peacekeeper' variant developed for the UEE patrol services, the Idris-P strips the standard ship's ship-to-ship gun and spinal mount in favor of additional cargo capacity and superior speed.",
    "Career": "Capital Ship",
    "Role": "Frigate",
    "Size": 6,
    "Cargo": {
      "CargoGrid": 1216.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 32.0
    },
    "Crew": 1,
    "WeaponCrew": 11,
    "OperationsCrew": 0,
    "Mass": 37854373.0,
    "ComponentsMass": 354585.0,
    "Dimensions": {
      "Length": 243.0,
      "Width": 127.0,
      "Height": 57.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 6100000.0
        },
        "Parts": {
          "airlock_section": 375000.0,
          "Idris_Thruster_Main_01_Left": 300000.0,
          "Idris_Thruster_Main_01_Right": 300000.0,
          "Nose": 2750000.0,
          "Nose_VFX_Hack": 1000000.0,
          "walkway_left": 1000000.0,
          "tail_engine_mount_left": 300000.0,
          "Idris_Thruster_Main_02_Left": 200000.0,
          "Bridge": 2150000.0,
          "Idris_Thruster_Main_01_RearLeft": 300000.0,
          "Idris_Thruster_Main_01_RearRight": 300000.0,
          "Tail": 2150000.0,
          "escapepod_door_rear_left": 5000.0,
          "escapepod_door_rear_right": 5000.0,
          "radar": 190000.0,
          "tail_antennamount": 190000.0,
          "walkway_right": 100000.0,
          "tail_engine_mount_right": 100000.0,
          "Idris_Thruster_Main_02_Right": 200000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left_3": 500000.0,
          "engine_right_3": 500000.0,
          "engine_left_1": 100000.0,
          "engine_left_2": 500000.0,
          "engine_right_2": 500000.0,
          "engine_right_1": 100000.0
        },
        "Retro": {
          "thruster_retro_right": 80000.0,
          "thruster_retro_left": 80000.0
        },
        "Maneuvering": {
          "thruster_side_front_left": 500000.0,
          "thruster_side_front_right": 500000.0,
          "thruster_bottom_front_left": 500000.0,
          "thruster_bottom_front_right": 500000.0,
          "thruster_top_middle_left": 500000.0,
          "thruster_top_middle_right": 500000.0,
          "thruster_bottom_rear_left": 500000.0,
          "thruster_bottom_rear_right": 500000.0,
          "thruster_top_front_middle": 500000.0,
          "thruster_side_rear_left": 500000.0,
          "thruster_side_rear_right": 500000.0,
          "thruster_top_rear_left": 500000.0,
          "thruster_top_rear_right": 500000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 45.0,
      "MaxSpeed": 800.0,
      "Pitch": 12.0,
      "Yaw": 10.0,
      "Roll": 22.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 972426600.0,
        "Retro": 289355000.0,
        "Vtol": 0.0,
        "Maneuvering": 1956663800.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.6,
        "Retro": 0.7,
        "Strafe": 0.8,
        "Up": 1.6,
        "Down": 2.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 9.0,
        "ScmMode": {
          "BoostSpeedForward": 290.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 2.0,
            "Y": 2.0,
            "Z": 2.0
          },
          "NegativeAxis": {
            "X": 2.0,
            "Y": 2.0,
            "Z": 2.0
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 3.0,
          "Yaw": 3.0,
          "Roll": 3.0
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 1500.0,
        "CapacitorRegenPerSec": 50.0,
        "CapacitorIdleCost": 50.0,
        "CapacitorLinearCost": 1.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.3,
        "RegenerationTime": 30.0,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 6399000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 120000000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 7.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 16.25
      },
      "FuelUsagePerSecond": {
        "Main": 121553.325,
        "Retro": 36169.375,
        "Vtol": 0.0,
        "Maneuvering": 244582.975
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 28815.0,
        "SCMActive": 51002.0,
        "NAV": 28820.0
      },
      "Infrared": {
        "Start": 25020.0
      },
      "CrossSection": {
        "Front": 10000.0,
        "Side": 31000.0,
        "Top": 60000.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 10.0
      },
      "Modifiers": {
        "PowerRatioMultiplier": 2.7,
        "MaxAmmoLoadMultiplier": 1.0,
        "MaxRegenPerSecMultiplier": 1.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2340000.0,
      "PilotBurstDPS": 17336.0,
      "TurretsBurstDPS": 25314.0,
      "TotalMissilesDmg": 170917.0
    },
    "Insurance": {
      "StandardClaimTime": 112.5,
      "ExpeditedClaimTime": 37.5,
      "ExpeditedCost": 56250.0
    }
  },
  {
    "ClassName": "AEGS_Idris_P",
    "Name": "Aegis Idris",
    "Description": "A mark two 'peacekeeper' variant developed for the UEE patrol services, the Idris-P strips the standard ship's ship-to-ship gun and spinal mount in favor of additional cargo capacity and superior speed.",
    "Career": "Frigate",
    "Role": "Frigate",
    "Size": 6,
    "Cargo": {
      "CargoGrid": 1280.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 32.0
    },
    "Crew": 1,
    "WeaponCrew": 10,
    "OperationsCrew": 0,
    "Mass": 37854373.0,
    "ComponentsMass": 351515.0,
    "Dimensions": {
      "Length": 243.0,
      "Width": 127.0,
      "Height": 57.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 6100000.0
        },
        "Parts": {
          "airlock_section": 375000.0,
          "Idris_Thruster_Main_01_Left": 300000.0,
          "Idris_Thruster_Main_01_Right": 300000.0,
          "Nose": 2750000.0,
          "Nose_VFX_Hack": 1000000.0,
          "walkway_left": 1000000.0,
          "tail_engine_mount_left": 300000.0,
          "Idris_Thruster_Main_02_Left": 200000.0,
          "Bridge": 2150000.0,
          "Idris_Thruster_Main_01_RearLeft": 300000.0,
          "Idris_Thruster_Main_01_RearRight": 300000.0,
          "Tail": 2150000.0,
          "escapepod_door_rear_left": 5000.0,
          "escapepod_door_rear_right": 5000.0,
          "radar": 190000.0,
          "tail_antennamount": 190000.0,
          "walkway_right": 100000.0,
          "tail_engine_mount_right": 100000.0,
          "Idris_Thruster_Main_02_Right": 200000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left_3": 500000.0,
          "engine_right_3": 500000.0,
          "engine_left_1": 100000.0,
          "engine_left_2": 500000.0,
          "engine_right_2": 500000.0,
          "engine_right_1": 100000.0
        },
        "Retro": {
          "thruster_retro_right": 80000.0,
          "thruster_retro_left": 80000.0
        },
        "Maneuvering": {
          "thruster_side_front_left": 500000.0,
          "thruster_side_front_right": 500000.0,
          "thruster_bottom_front_left": 500000.0,
          "thruster_bottom_front_right": 500000.0,
          "thruster_top_middle_left": 500000.0,
          "thruster_top_middle_right": 500000.0,
          "thruster_bottom_rear_left": 500000.0,
          "thruster_bottom_rear_right": 500000.0,
          "thruster_top_front_middle": 500000.0,
          "thruster_side_rear_left": 500000.0,
          "thruster_side_rear_right": 500000.0,
          "thruster_top_rear_left": 500000.0,
          "thruster_top_rear_right": 500000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 45.0,
      "MaxSpeed": 800.0,
      "Pitch": 12.0,
      "Yaw": 10.0,
      "Roll": 22.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 972426600.0,
        "Retro": 289355000.0,
        "Vtol": 0.0,
        "Maneuvering": 1956663800.0
      },
      "AccelerationG": {
        "IsValidated": false,
        "Main": 2.62,
        "Retro": 0.78,
        "Strafe": 0.0,
        "Up": 0.0,
        "Down": 0.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 9.0,
        "ScmMode": {
          "BoostSpeedForward": 290.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 2.0,
            "Y": 2.0,
            "Z": 2.0
          },
          "NegativeAxis": {
            "X": 2.0,
            "Y": 2.0,
            "Z": 2.0
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 3.0,
          "Yaw": 3.0,
          "Roll": 3.0
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 1500.0,
        "CapacitorRegenPerSec": 50.0,
        "CapacitorIdleCost": 50.0,
        "CapacitorLinearCost": 1.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.3,
        "RegenerationTime": 30.0,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 6399000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 120000000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 7.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 16.25
      },
      "FuelUsagePerSecond": {
        "Main": 121553.325,
        "Retro": 36169.375,
        "Vtol": 0.0,
        "Maneuvering": 244582.975
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 28742.0,
        "SCMActive": 50927.0,
        "NAV": 28747.0
      },
      "Infrared": {
        "Start": 25245.0
      },
      "CrossSection": {
        "Front": 10000.0,
        "Side": 31000.0,
        "Top": 60000.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 10.0
      },
      "Modifiers": {
        "PowerRatioMultiplier": 2.7,
        "MaxAmmoLoadMultiplier": 1.0,
        "MaxRegenPerSecMultiplier": 1.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2340000.0,
      "PilotBurstDPS": 10128.0,
      "TurretsBurstDPS": 27769.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 112.5,
      "ExpeditedClaimTime": 37.5,
      "ExpeditedCost": 56250.0
    }
  },
  {
    "ClassName": "AEGS_Reclaimer",
    "Name": "Aegis Reclaimer",
    "Description": "The Aegis Reclaimer is an industrial salvage ship. Equipped with a reinforced cargo bay, a long-range jump drive and launch pods for unmanned drones, the Reclaimer is an ideal ship for taking advantage of deep space wrecks. Tractor beams, floodlights, scanner options and docking ports round out the tools on this capable, utilitarian spacecraft.",
    "Career": "Industrial",
    "Role": "Heavy Salvage",
    "Size": 6,
    "Cargo": {
      "CargoGrid": 420.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 6.9,
      "PersonalInventory": 7.22
    },
    "Crew": 1,
    "WeaponCrew": 7,
    "OperationsCrew": 2,
    "Mass": 9509853.5,
    "ComponentsMass": 275810.0,
    "Dimensions": {
      "Length": 155.0,
      "Width": 118.0,
      "Height": 50.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Front": 50000.0,
          "Rear": 50000.0
        },
        "Parts": {
          "Main_Engine_BlockRight_VTOL": 1.0,
          "Main_Engine_BlockRight": 2000.0,
          "Joint_Right": 2000.0,
          "Main_Engine_Right": 2000.0,
          "Arms_TopRight_Tip_VTOL": 200.0,
          "Arms_TopRight_Tip": 100.0,
          "Arms_LowerRight_Tip_VTOL": 200.0,
          "Arms_LowerRight_Tip": 100.0,
          "Main_Engine_BlockLeft_VTOL": 1.0,
          "Main_Engine_BlockLeft": 2000.0,
          "Joint_Left": 2000.0,
          "Main_Engine_Left": 2000.0,
          "Arms_TopLeft_Tip_VTOL": 200.0,
          "Arms_TopLeft_Tip": 100.0,
          "Arms_LowerLeft_Tip_VTOL": 200.0,
          "Arms_LowerLeft_Tip": 100.0,
          "Arms_TopRight_Block_VTOL": 200.0,
          "Arms_TopRight_Block": 100.0,
          "Arms_TopRight_VTOL": 200.0,
          "Arms_TopRight": 100.0,
          "Arms_Top_Pistons_Right_VTOL": 200.0,
          "Arms_Top_Pistons_Right": 100.0,
          "Arms_TopLeft_Block_VTOL": 200.0,
          "Arms_TopLeft_Block": 100.0,
          "Arms_TopLeft_VTOL": 200.0,
          "Arms_TopLeft": 100.0,
          "Arms_Top_Pistons_Left_VTOL": 200.0,
          "Arms_Top_Pistons_Left": 100.0,
          "Arms_LowerRight_VTOL": 200.0,
          "Arms_LowerRight": 100.0,
          "Arms_Lower_Pistons_Right_VTOL": 200.0,
          "Arms_Lower_Pistons_Right": 100.0,
          "Arms_LowerLeft_VTOL": 200.0,
          "Arms_LowerLeft": 100.0,
          "Arms_Lower_Pistons_Left_VTOL": 200.0,
          "Arms_Lower_Pistons_Left": 100.0,
          "Bracket_Right": 1000.0,
          "Aux_Arms_Lower_Right_Bottom": 100.0,
          "Aux_Arms_Lower_Right_B": 100.0,
          "Aux_Arms_Top_Right_A": 100.0,
          "Aux_Arms_Top_Right_B": 100.0,
          "Aux_Arms_Block_Right": 2000.0,
          "Bracket_Left": 1000.0,
          "Aux_Arms_Lower_Left_Bottom": 100.0,
          "Aux_Arms_Lower_Left_B": 100.0,
          "Aux_Arms_Top_Left_A": 100.0,
          "Aux_Arms_Top_Left_B": 100.0,
          "Aux_Arms_Block_Left": 2000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 29000.0,
          "thruster_main_left": 29000.0,
          "thruster_aux_right": 28500.0,
          "thruster_aux_left": 28500.0
        },
        "Retro": {
          "thruster_retro_front_left": 28000.0,
          "thruster_retro_front_right": 28000.0,
          "thruster_retro_right_02": 28000.0,
          "thruster_retro_right_01": 28000.0,
          "thruster_retro_left_02": 28000.0,
          "thruster_retro_left_01": 28000.0
        },
        "Maneuvering": {
          "thruster_front_left_side": 26500.0,
          "thruster_front_right_side": 26500.0,
          "thruster_front_right_top": 26500.0,
          "thruster_front_left_top": 26500.0,
          "thruster_front_left_bottom": 26500.0,
          "thruster_front_right_bottom": 26500.0,
          "thruster_outer_front_right": 26500.0,
          "thruster_outer_front_left": 26500.0,
          "thruster_back_right_top": 26500.0,
          "thruster_back_left_top": 26500.0,
          "thruster_back_left_side": 26500.0,
          "thruster_back_right_side": 26500.0,
          "thruster_back_right_bottom": 26500.0,
          "thruster_back_left_bottom": 26500.0,
          "thruster_outer_rear_right": 26500.0,
          "thruster_outer_rear_left": 26500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 110.0,
      "MaxSpeed": 890.0,
      "Pitch": 15.0,
      "Yaw": 15.0,
      "Roll": 30.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 195000000.0,
        "Retro": 146500000.0,
        "Vtol": 0.0,
        "Maneuvering": 585200000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.0,
        "Retro": 1.5,
        "Strafe": 1.0,
        "Up": 2.0,
        "Down": 2.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 7.0,
        "ScmMode": {
          "BoostSpeedForward": 290.0,
          "BoostSpeedBackward": 100.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 1754000000.0,
      "FuelIntakeRate": 200.0,
      "QuantumFuelCapacity": 8600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 7.5,
        "Vtol": 0.0,
        "Maneuvering": 20.0
      },
      "FuelUsagePerSecond": {
        "Main": 24375.0,
        "Retro": 18312.5,
        "Vtol": 0.0,
        "Maneuvering": 73150.0
      },
      "IntakeToMainFuelRatio": 0.82,
      "TimeForIntakesToFillTank": 8770000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 13487.0,
        "SCMActive": 15733.0,
        "NAV": 28934.0
      },
      "Infrared": {
        "Start": 23145.0
      },
      "CrossSection": {
        "Front": 18111.0,
        "Side": 24656.0,
        "Top": 36221.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 10.0
      },
      "Modifiers": {
        "PowerRatioMultiplier": 1.18,
        "MaxAmmoLoadMultiplier": 1.0,
        "MaxRegenPerSecMultiplier": 1.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 165000.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 9002.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 30.69,
      "ExpeditedClaimTime": 10.23,
      "ExpeditedCost": 12555.0
    },
    "Buy": {
      "New Deal, Lorville": 31752000.0
    }
  },
  {
    "ClassName": "AEGS_Redeemer",
    "Name": "Aegis Redeemer",
    "Description": "Designed by Aegis Dynamics, the Redeemer is a powerful fighting ship capable of holding its own in combat with a powerful weapons payload. Dotted with turrets and missiles, the Redeemer also doubles as an armored landing craft capable of delivering soldiers to the frontlines.",
    "Career": "Combat",
    "Role": "Gunship",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 2.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 4.0,
      "PersonalInventory": 4.22
    },
    "Crew": 4,
    "WeaponCrew": 4,
    "OperationsCrew": 0,
    "Mass": 420870.26,
    "ComponentsMass": 37942.0,
    "Dimensions": {
      "Length": 51.0,
      "Width": 25.0,
      "Height": 14.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 17000.0
        },
        "Parts": {
          "Nose": 5700.0,
          "Underbelly": 4500.0,
          "Wing_Right": 5600.0,
          "wing_pitch_right": 1000.0,
          "wing_debris_right_bottom": 5600.0,
          "wing_debris_right_top": 5600.0,
          "Wing_Left": 5600.0,
          "wing_pitch_left": 1000.0,
          "wing_debris_left_top": 5600.0,
          "wing_debris_left_bottom": 5600.0,
          "Tail": 3300.0,
          "rudder_right": 200.0,
          "rudder_flap_right": 100.0,
          "rudder_left": 200.0,
          "rudder_flap_left": 100.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_rear_main_right": 27500.0,
          "thruster_rear_main_left": 27500.0,
          "thruster_wing_bottom_main_right": 21400.0,
          "thruster_wing_top_main_right": 21400.0,
          "thruster_wing_top_main_left": 21400.0,
          "thruster_wing_bottom_main_left": 21400.0
        },
        "Retro": {
          "thruster_retro_right": 28950.0,
          "thruster_retro_left": 28950.0
        },
        "Maneuvering": {
          "thruster_mid_top_right": 25500.0,
          "thruster_mid_top_left": 25500.0,
          "thruster_mid_botom_left": 25500.0,
          "thruster_mid_bottom_right": 25500.0,
          "thruster_front_bottom_left": 25500.0,
          "thruster_front_bottom_right": 25500.0,
          "thruster_front_top_left": 25500.0,
          "thruster_front_top_right": 25500.0,
          "thruster_rear_side_right": 25500.0,
          "thruster_rear_side_left": 25500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 202.5,
      "MaxSpeed": 1050.0,
      "Pitch": 32.0,
      "Yaw": 32.0,
      "Roll": 115.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 27840000.0,
        "Retro": 220000.0,
        "Vtol": 10200000.0,
        "Maneuvering": 31800000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 8.1,
        "Retro": 2.5,
        "Strafe": 3.5,
        "Up": 4.0,
        "Down": 3.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 215.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.7,
        "RampDown": 0.5,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.25,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.0,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.5,
        "Y_AccelMultiplicator": 1.3,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 66000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 7.5,
        "Retro": 2.5,
        "Vtol": 2.5,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 3480.0,
        "Retro": 27.5,
        "Vtol": 1275.0,
        "Maneuvering": 3975.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 22774.0,
        "SCMActive": 30335.0,
        "NAV": 37856.0
      },
      "Infrared": {
        "Start": 16018.0
      },
      "CrossSection": {
        "Front": 3742.0,
        "Side": 12976.0,
        "Top": 27317.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 28440.0,
      "PilotBurstDPS": 542.0,
      "TurretsBurstDPS": 7798.0,
      "TotalMissilesDmg": 32920.0
    },
    "Insurance": {
      "StandardClaimTime": 28.35,
      "ExpeditedClaimTime": 9.45,
      "ExpeditedCost": 13199.0
    },
    "Buy": {
      "New Deal, Lorville": 17199000.0
    }
  },
  {
    "ClassName": "AEGS_Retaliator",
    "Name": "Aegis Retaliator",
    "Description": "This civilian refit of the Retaliator updates the military ship's chassis with unladen space able to be fitted with various modules to suit your needs.",
    "Career": "Combat",
    "Role": "Gunship",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 5.3,
      "PersonalInventory": 8.0
    },
    "Crew": 1,
    "WeaponCrew": 5,
    "OperationsCrew": 0,
    "Mass": 317870.29,
    "ComponentsMass": 35410.0,
    "Dimensions": {
      "Length": 71.0,
      "Width": 30.0,
      "Height": 9.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 35000.0
        },
        "Parts": {
          "body": 50000.0,
          "body_lower_left": 200.0,
          "wing_left_rl_geom": 240.0,
          "wing_left_rl_damage": 10000.0,
          "wing_left_rl_fin_geom": 50.0,
          "wing_left_mlr_geom": 480.0,
          "wing_left_mlr_damage": 240.0,
          "wing_left_m_geom": 480.0,
          "wing_left_m_damage": 2800.0,
          "main_wing_slider_a_left": 4000.0,
          "large_wing_piston_geom_l": 4000.0,
          "large_wing_piston_2": 4000.0,
          "left_wing_rs_geom": 50.0,
          "body_lower_right": 200.0,
          "wing_right_rl_geom": 240.0,
          "wing_right_rl_damage": 10000.0,
          "wing_right_rl_fin_geom": 50.0,
          "wing_right_mlr_geom": 480.0,
          "wing_right_mlr_damage": 240.0,
          "wing_right_m_geom": 480.0,
          "wing_right_m_damage": 2800.0,
          "right_wing_rs_geom": 50.0,
          "main_wing_slider_a_right": 4000.0,
          "main_wing_slider_a_left_r": 4000.0,
          "large_wing_piston_003": 4000.0,
          "front_left_wing_damage": 100.0,
          "front_left_wing_flp_geom": 100.0,
          "front_right_wing_damage": 1.0,
          "front_right_wing_flp_geom": 600.0,
          "glass": 100.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "mainthruster_left": 18500.0,
          "mainthruster_right": 18500.0
        },
        "Retro": {
          "thruster_maneuver_frontleftretro": 17250.0,
          "thruster_maneuver_frontrightretro": 17250.0
        },
        "Vtol": {
          "thruster_vtol_rearleft2": 15500.0,
          "thruster_vtol_rearleft1": 15500.0,
          "thruster_vtol_rearright2": 15500.0,
          "thruster_vtol_rearright1": 15500.0,
          "thruster_vtol_frontleft": 15500.0,
          "thruster_vtol_frontright": 15500.0
        },
        "Maneuvering": {
          "thruster_maneuver_backbottomleft": 16000.0,
          "thruster_maneuver_backbottomright": 16000.0,
          "thruster_maneuver_backtopright": 16000.0,
          "thruster_maneuver_backtopleft": 16000.0,
          "thruster_maneuver_backright": 16000.0,
          "thruster_maneuver_backleft": 16000.0,
          "thruster_maneuver_fronttopleft": 16000.0,
          "thruster_maneuver_fronttopright": 16000.0,
          "thruster_maneuver_frontleft": 16000.0,
          "thruster_maneuver_frontright": 16000.0,
          "thruster_maneuver_frontbottomright": 16000.0,
          "thruster_maneuver_frontbottomleft": 16000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1000.0,
      "Pitch": 30.0,
      "Yaw": 30.0,
      "Roll": 60.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 12440000.0,
        "Retro": 8940000.0,
        "Vtol": 5480000.0,
        "Maneuvering": 37912000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.2,
        "Retro": 2.6,
        "Strafe": 2.6,
        "Up": 3.1,
        "Down": 2.6
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 205.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.5,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 2.25,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 51000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 2600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 7.5,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1555.0,
        "Retro": 1117.5,
        "Vtol": 685.0,
        "Maneuvering": 4739.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 22732.0,
        "SCMActive": 30665.0,
        "NAV": 38212.0
      },
      "Infrared": {
        "Start": 14080.0
      },
      "CrossSection": {
        "Front": 4700.0,
        "Side": 15100.0,
        "Top": 36000.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 28440.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 5456.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 25.74,
      "ExpeditedClaimTime": 8.58,
      "ExpeditedCost": 32116.0
    },
    "Dimensions2": {
      "Length": 71.0,
      "Width": 30.0,
      "Height": 12.5
    },
    "Buy": {
      "New Deal, Lorville": 7938000.0
    }
  },
  {
    "ClassName": "AEGS_Sabre",
    "Name": "Aegis Sabre",
    "Description": "Part of Aegis Dynamics’ Phase Two of new ship models, the Sabre was designed as a space superiority fighter for those situations where you need to leave a lighter footprint. Designed to be a rapid responder, the Sabre is more than capable of establishing battlefield dominance for any number of combat scenarios.",
    "Career": "Combat",
    "Role": "Stealth Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 83092.72,
    "ComponentsMass": 6179.0,
    "Dimensions": {
      "Length": 24.0,
      "Width": 26.0,
      "Height": 5.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.6,
        "Infrared": 0.6,
        "CrossSection": 0.6
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 4000.0,
          "Body": 4000.0
        },
        "Parts": {
          "canopy": 1000.0,
          "bay_door_l_a": 500.0,
          "bay_door_l_b": 500.0,
          "bay_door_r_a": 500.0,
          "bay_door_r_b": 500.0,
          "Rear_Wing_Left": 2000.0,
          "Rear_Wing_Right": 2000.0,
          "Front_Wing_Left": 2000.0,
          "Wing_Left": 2000.0,
          "Front_Wing_Right": 2000.0,
          "Wing_Right": 2000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 14500.0,
          "engine_right": 14500.0
        },
        "Retro": {
          "thruster_retro_left": 13450.0,
          "thruster_retro_right": 13450.0
        },
        "Maneuvering": {
          "thruster_bottomRR": 12750.0,
          "thruster_bottomRL": 12750.0,
          "thruster_bottomFL": 12750.0,
          "thruster_bottomFR": 12750.0,
          "thruster_topFL": 12750.0,
          "thruster_topFR": 12750.0,
          "thruster_topRR": 12750.0,
          "thruster_topRL": 12750.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 206.0,
      "MaxSpeed": 1235.0,
      "Pitch": 55.0,
      "Yaw": 55.0,
      "Roll": 160.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8800000.0,
        "Retro": 1800000.0,
        "Vtol": 0.0,
        "Maneuvering": 5725176.4
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 12.0,
        "Retro": 4.2,
        "Strafe": 8.5,
        "Up": 9.0,
        "Down": 4.7
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 13500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 1100.0,
        "Retro": 225.0,
        "Vtol": 0.0,
        "Maneuvering": 715.647
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 2967.0,
        "SCMActive": 3534.0,
        "NAV": 7487.0
      },
      "Infrared": {
        "Start": 4519.0
      },
      "CrossSection": {
        "Front": 1414.0,
        "Side": 3880.0,
        "Top": 3331.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 2182.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 11606.0
    },
    "Insurance": {
      "StandardClaimTime": 9.45,
      "ExpeditedClaimTime": 3.15,
      "ExpeditedCost": 4689.0
    },
    "Buy": {
      "New Deal, Lorville": 4498200.0
    }
  },
  {
    "ClassName": "AEGS_Sabre_Comet",
    "Name": "Aegis Sabre Comet",
    "Description": "Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Comet pays tribute to famed pilot Captain Kamur Dalion for his work with Aegis to usher in a new era of combat ship design. This Sabre comes equipped with a specialized dogfighting focused loadout and a custom special edition livery honoring this iconic ship.",
    "Career": "Combat",
    "Role": "Stealth Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 83092.72,
    "ComponentsMass": 6179.0,
    "Dimensions": {
      "Length": 24.0,
      "Width": 26.0,
      "Height": 5.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.6,
        "Infrared": 0.6,
        "CrossSection": 0.6
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 4000.0,
          "Body": 4000.0
        },
        "Parts": {
          "canopy": 1000.0,
          "bay_door_l_a": 500.0,
          "bay_door_l_b": 500.0,
          "bay_door_r_a": 500.0,
          "bay_door_r_b": 500.0,
          "Rear_Wing_Left": 2000.0,
          "Rear_Wing_Right": 2000.0,
          "Front_Wing_Left": 2000.0,
          "Wing_Left": 2000.0,
          "Front_Wing_Right": 2000.0,
          "Wing_Right": 2000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 14500.0,
          "engine_right": 14500.0
        },
        "Retro": {
          "thruster_retro_left": 13450.0,
          "thruster_retro_right": 13450.0
        },
        "Maneuvering": {
          "thruster_bottomRR": 12750.0,
          "thruster_bottomRL": 12750.0,
          "thruster_bottomFL": 12750.0,
          "thruster_bottomFR": 12750.0,
          "thruster_topFL": 12750.0,
          "thruster_topFR": 12750.0,
          "thruster_topRR": 12750.0,
          "thruster_topRL": 12750.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 206.0,
      "MaxSpeed": 1235.0,
      "Pitch": 55.0,
      "Yaw": 55.0,
      "Roll": 160.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8800000.0,
        "Retro": 1800000.0,
        "Vtol": 0.0,
        "Maneuvering": 5725176.4
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 12.0,
        "Retro": 4.2,
        "Strafe": 8.5,
        "Up": 9.0,
        "Down": 4.7
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 13500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 1100.0,
        "Retro": 225.0,
        "Vtol": 0.0,
        "Maneuvering": 715.647
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 2967.0,
        "SCMActive": 3534.0,
        "NAV": 7487.0
      },
      "Infrared": {
        "Start": 4519.0
      },
      "CrossSection": {
        "Front": 1414.0,
        "Side": 3880.0,
        "Top": 3331.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 2018.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 11606.0
    },
    "Insurance": {
      "StandardClaimTime": 9.45,
      "ExpeditedClaimTime": 3.15,
      "ExpeditedCost": 4689.0
    },
    "Buy": {
      "New Deal, Lorville": 4895100.0
    }
  },
  {
    "ClassName": "AEGS_Sabre_Firebird",
    "Name": "Aegis Sabre Firebird",
    "Description": "When frontline skirmishes call for a swift and decisive offensive, the Sabre Firebird is the ideal medium fighter for any arsenal. Taking the already battle proven Sabre Raven, Aegis has designed the Firebird variant with an enhanced missile launcher capable of engaging with a wide array of threats.",
    "Career": "Combat",
    "Role": "Stealth Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 73492.72,
    "ComponentsMass": 7050.0,
    "Dimensions": {
      "Length": 26.0,
      "Width": 30.0,
      "Height": 3.8
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.6,
        "Infrared": 0.6,
        "CrossSection": 0.6
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2500.0
        },
        "Parts": {
          "wing_left": 2000.0,
          "wing_left_aileron_mesh": 1000.0,
          "wing_right": 2000.0,
          "wing_right_aileron_mesh": 1000.0,
          "tail": 2500.0,
          "AEGS_Sabre_Firebird_winglet_right_debris": 500.0,
          "AEGS_Sabre_Firebird_winglet_left_debris": 500.0,
          "nose": 2500.0,
          "canopy": 1000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine": 14500.0
        },
        "Retro": {
          "thruster_retro_left": 13450.0,
          "thruster_retro_right": 13450.0
        },
        "Maneuvering": {
          "thruster_bottomFL": 12750.0,
          "thruster_bottomFR": 12750.0,
          "thruster_bottomRL": 12750.0,
          "thruster_bottomRR": 12750.0,
          "thruster_sideRL": 12750.0,
          "thruster_sideRR": 12750.0,
          "thruster_topFL": 12750.0,
          "thruster_topFR": 12750.0,
          "thruster_topRL": 12750.0,
          "thruster_topRR": 12750.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 240.0,
      "MaxSpeed": 1400.0,
      "Pitch": 50.0,
      "Yaw": 42.0,
      "Roll": 160.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 9259129.0,
        "Retro": 280000.0,
        "Vtol": 0.0,
        "Maneuvering": 8891940.8
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 14.7,
        "Retro": 3.4,
        "Strafe": 4.4,
        "Up": 5.8,
        "Down": 3.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 600.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.7,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 25.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.4,
        "RegenerationTime": 33.3,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 12000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 1157.391,
        "Retro": 35.0,
        "Vtol": 0.0,
        "Maneuvering": 1111.492
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3046.0,
        "SCMActive": 3638.0,
        "NAV": 7566.0
      },
      "Infrared": {
        "Start": 3728.0
      },
      "CrossSection": {
        "Front": 1414.0,
        "Side": 3880.0,
        "Top": 3331.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 1013.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 78633.0
    },
    "Insurance": {
      "StandardClaimTime": 7.56,
      "ExpeditedClaimTime": 2.52,
      "ExpeditedCost": 3934.0
    },
    "New Ship": "Aegis Sabre Firebird",
    "Buy": {
      "New Deal, Lorville": 5874120.0
    }
  },
  {
    "ClassName": "AEGS_Sabre_Peregrine",
    "Name": "Aegis Sabre Peregrine",
    "Description": "After seeing what fans of the Sabre Raven were able to accomplish with the fighter on the racetrack, the design team at Aegis Dynamics were inspired to craft an official racing variant for the agile ship. Enter the Sabre Peregrine. Streamlined and featuring additional thruster boosts, this nimble bird is ready to fly across the finish line.",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 73492.72,
    "ComponentsMass": 3624.0,
    "Dimensions": {
      "Length": 26.0,
      "Width": 30.0,
      "Height": 3.8
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.59,
        "Energy": 1.18,
        "Distortion": 1.18
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.051,
        "Infrared": 1.051,
        "CrossSection": 1.051
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2400.0
        },
        "Parts": {
          "nose": 2400.0,
          "canopy": 1000.0,
          "peregrine_rear_wing_l_bottom": 500.0,
          "peregrine_rear_wing_l_top": 500.0,
          "peregrine_rear_wing_r_bottom": 500.0,
          "peregrine_rear_wing_r_top": 500.0,
          "tail": 1000.0,
          "wing_front_flap_left": 100.0,
          "wing_front_flap_right": 100.0,
          "wing_left": 2000.0,
          "wing_left_aileron_mesh_a": 75.0,
          "wing_left_aileron_mesh_b": 75.0,
          "wing_flap_left_rear": 100.0,
          "wing_right": 2000.0,
          "wing_right_aileron_mesh_b": 100.0,
          "wing_right_aileron_mesh_a": 100.0,
          "wing_flap_right_rear": 100.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine": 14500.0
        },
        "Retro": {
          "thruster_retro_left": 13450.0,
          "thruster_retro_right": 13450.0
        },
        "Maneuvering": {
          "thruster_bottomFL": 12750.0,
          "thruster_bottomFR": 12750.0,
          "thruster_bottomRL": 12750.0,
          "thruster_bottomRR": 12750.0,
          "thruster_sideRL": 12750.0,
          "thruster_sideRR": 12750.0,
          "thruster_topFL": 12750.0,
          "thruster_topFR": 12750.0,
          "thruster_topRL": 12750.0,
          "thruster_topRR": 12750.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 267.0,
      "MaxSpeed": 1447.0,
      "Pitch": 61.0,
      "Yaw": 51.0,
      "Roll": 187.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 10595000.0,
        "Retro": 350000.0,
        "Vtol": 0.0,
        "Maneuvering": 11596000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.9,
        "Retro": 3.5,
        "Strafe": 5.2,
        "Up": 6.8,
        "Down": 4.2
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 655.0,
          "BoostSpeedBackward": 277.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.79,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.23,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 25.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.4,
        "RegenerationTime": 33.3,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 12000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 1324.375,
        "Retro": 43.75,
        "Vtol": 0.0,
        "Maneuvering": 1449.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5229.0,
        "SCMActive": 6265.0,
        "NAV": 13146.0
      },
      "Infrared": {
        "Start": 5821.0
      },
      "CrossSection": {
        "Front": 2477.0,
        "Side": 6797.0,
        "Top": 5834.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 7.56,
      "ExpeditedClaimTime": 2.52,
      "ExpeditedCost": 3934.0
    },
    "New Ship": "Aegis Sabre Peregrine"
  },
  {
    "ClassName": "AEGS_Sabre_Raven",
    "Name": "Aegis Sabre Raven",
    "Description": "Aegis Dynamics have raised the bar yet again with their Raven variant, maintaining all the speed and maneuverability of its Sabre forebear, but with a lower ship signature, making it a fast, stealthy infiltrator.",
    "Career": "Combat",
    "Role": "Interceptor",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 68711.32,
    "ComponentsMass": 4574.0,
    "Dimensions": {
      "Length": 24.0,
      "Width": 20.5,
      "Height": 5.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.6,
        "Infrared": 0.6,
        "CrossSection": 0.6
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2500.0
        },
        "Parts": {
          "nose": 2500.0,
          "canopy": 1000.0,
          "tail": 2500.0,
          "wing_left": 2000.0,
          "wing_right": 2000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine": 14500.0
        },
        "Retro": {
          "thruster_retro_left": 13450.0,
          "thruster_retro_right": 13450.0
        },
        "Maneuvering": {
          "thruster_bottomFL": 12750.0,
          "thruster_bottomFR": 12750.0,
          "thruster_bottomRL": 12750.0,
          "thruster_bottomRR": 12750.0,
          "thruster_sideRL": 12750.0,
          "thruster_sideRR": 12750.0,
          "thruster_topFL": 12750.0,
          "thruster_topFR": 12750.0,
          "thruster_topRL": 12750.0,
          "thruster_topRR": 12750.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 240.0,
      "MaxSpeed": 1400.0,
      "Pitch": 50.0,
      "Yaw": 42.0,
      "Roll": 160.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 9136699.0,
        "Retro": 650000.0,
        "Vtol": 0.0,
        "Maneuvering": 10975948.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 15.0,
        "Retro": 3.4,
        "Strafe": 4.5,
        "Up": 6.0,
        "Down": 3.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 600.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.7,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 25.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.4,
        "RegenerationTime": 33.3,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 12000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 1142.087,
        "Retro": 81.25,
        "Vtol": 0.0,
        "Maneuvering": 1371.994
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3787.0,
        "SCMActive": 5959.0,
        "NAV": 8307.0
      },
      "Infrared": {
        "Start": 4043.0
      },
      "CrossSection": {
        "Front": 1129.0,
        "Side": 3297.0,
        "Top": 4517.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 1094.0,
      "TurretsBurstDPS": 0.0,
      "TotalEMPDmg": 5500.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 7.56,
      "ExpeditedClaimTime": 2.52,
      "ExpeditedCost": 3934.0
    }
  },
  {
    "ClassName": "AEGS_Vanguard",
    "Name": "Aegis Vanguard Warden",
    "Description": "A hard-charging bulldog of a fighter which features extensive forward-mounted weaponry designed to tear through the shields and armor of other spacecraft. So-named because their multiple-jump range allows them to form the vanguard of any military expedition, Vanguards have seen extensive service against the Vanduul.",
    "Career": "Combat",
    "Role": "Heavy Fighter",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.5,
      "PersonalInventory": 1.85
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 238070.26,
    "ComponentsMass": 13642.0,
    "Dimensions": {
      "Length": 48.0,
      "Width": 40.0,
      "Height": 9.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.43,
        "Energy": 0.93,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.334,
        "Infrared": 1.334,
        "CrossSection": 1.334
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 10000.0,
          "Body": 10000.0
        },
        "Parts": {
          "Arm_Right": 200.0,
          "Arm_Left": 200.0,
          "Engine_R": 7500.0,
          "Tail_Fin_Right_Upper": 250.0,
          "Tail_Fin_Right_Lower": 250.0,
          "Wing_Right_Geo": 800.0,
          "Wing_Right_Flaps_Geo": 600.0,
          "Engine_L": 7500.0,
          "Tail_Fin_Left_Upper": 250.0,
          "Tail_Fin_Left_Lower": 250.0,
          "Wing_Left_Geo": 800.0,
          "Wing_Left_Flaps_Geo": 600.0,
          "Wing_Back_Right": 1800.0,
          "Wing_Back_Left": 1800.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_right": 16500.0,
          "engine_middle_right": 16500.0,
          "engine_left": 16500.0,
          "engine_middle_left": 16500.0
        },
        "Retro": {
          "thruster_retro_right": 15250.0,
          "thruster_retro_left": 15250.0
        },
        "Maneuvering": {
          "thruster_top_FR": 14350.0,
          "thruster_bottom_FR": 14350.0,
          "thruster_bottom_RR": 14350.0,
          "thruster_top_RR": 14350.0,
          "thruster_side_RR": 14350.0,
          "thruster_side_RL": 14350.0,
          "thruster_bottom_FL": 14350.0,
          "thruster_top_RL": 14350.0,
          "thruster_top_FL": 14350.0,
          "thruster_bottom_RL": 14350.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 210.0,
      "MaxSpeed": 1075.0,
      "Pitch": 40.0,
      "Yaw": 35.0,
      "Roll": 124.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 21911216.0,
        "Retro": 8140000.0,
        "Vtol": 0.0,
        "Maneuvering": 33070000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 8.8,
        "Retro": 3.3,
        "Strafe": 6.6,
        "Up": 6.6,
        "Down": 4.0,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 458.0,
          "BoostSpeedBackward": 220.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 40500000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 2738.902,
        "Retro": 1017.5,
        "Vtol": 0.0,
        "Maneuvering": 4133.75
      },
      "IntakeToMainFuelRatio": 1.83,
      "TimeForIntakesToFillTank": 810000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 17725.0,
        "SCMActive": 22606.0,
        "NAV": 38375.0
      },
      "Infrared": {
        "Start": 15386.0
      },
      "CrossSection": {
        "Front": 4541.0,
        "Side": 22706.0,
        "Top": 21750.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 9480.0,
      "PilotBurstDPS": 3527.0,
      "TurretsBurstDPS": 900.0,
      "TotalMissilesDmg": 29222.0
    },
    "Insurance": {
      "StandardClaimTime": 18.22,
      "ExpeditedClaimTime": 6.07,
      "ExpeditedCost": 9113.0
    },
    "Buy": {
      "New Deal, Lorville": 10319400.0
    }
  },
  {
    "ClassName": "AEGS_Vanguard_Harbinger",
    "Name": "Aegis Vanguard Harbinger",
    "Description": "The Vanguard Harbinger is Earth's standard fighter/bomber, converting the standard Warden's escape pod into a potent bomb bay. The extended range of the Vanguard and the relatively small profile mean that it can go where carrier-based ships or larger strategic bombers don't, strike hard, and then make it back to base.",
    "Career": "Combat",
    "Role": "Heavy Fighter",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.5,
      "PersonalInventory": 1.85
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 230404.0,
    "ComponentsMass": 14711.0,
    "Dimensions": {
      "Length": 48.0,
      "Width": 40.0,
      "Height": 9.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 0.97,
        "Distortion": 0.93
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.268,
        "Infrared": 1.268,
        "CrossSection": 1.268
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 10000.0,
          "Body": 10000.0
        },
        "Parts": {
          "Arm_Right": 200.0,
          "Arm_Left": 200.0,
          "Engine_R": 7500.0,
          "Tail_Fin_Right_Upper": 250.0,
          "Tail_Fin_Right_Lower": 250.0,
          "Wing_Right_Geo": 800.0,
          "Wing_Right_Flaps_Geo": 600.0,
          "Engine_L": 7500.0,
          "Tail_Fin_Left_Upper": 250.0,
          "Tail_Fin_Left_Lower": 250.0,
          "Wing_Left_Geo": 800.0,
          "Wing_Left_Flaps_Geo": 600.0,
          "Wing_Back_Right": 1800.0,
          "Wing_Back_Left": 1800.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_right": 16500.0,
          "engine_middle_right": 16500.0,
          "engine_left": 16500.0,
          "engine_middle_left": 16500.0
        },
        "Retro": {
          "thruster_retro_right": 15250.0,
          "thruster_retro_left": 15250.0
        },
        "Maneuvering": {
          "thruster_top_FR": 14350.0,
          "thruster_bottom_FR": 14350.0,
          "thruster_bottom_RR": 14350.0,
          "thruster_top_RR": 14350.0,
          "thruster_side_RR": 14350.0,
          "thruster_side_RL": 14350.0,
          "thruster_bottom_FL": 14350.0,
          "thruster_top_RL": 14350.0,
          "thruster_top_FL": 14350.0,
          "thruster_bottom_RL": 14350.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 212.0,
      "MaxSpeed": 1085.0,
      "Pitch": 38.0,
      "Yaw": 33.0,
      "Roll": 120.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 21988742.0,
        "Retro": 7920000.0,
        "Vtol": 0.0,
        "Maneuvering": 32220000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 9.1,
        "Retro": 3.2,
        "Strafe": 6.6,
        "Up": 6.6,
        "Down": 4.0,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 462.0,
          "BoostSpeedBackward": 224.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 39000000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 2748.593,
        "Retro": 990.0,
        "Vtol": 0.0,
        "Maneuvering": 4027.5
      },
      "IntakeToMainFuelRatio": 1.82,
      "TimeForIntakesToFillTank": 780000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 19834.0,
        "SCMActive": 29062.0,
        "NAV": 39989.0
      },
      "Infrared": {
        "Start": 14010.0
      },
      "CrossSection": {
        "Front": 4506.0,
        "Side": 22530.0,
        "Top": 21580.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 8820.0,
      "PilotBurstDPS": 3327.0,
      "TurretsBurstDPS": 300.0,
      "TotalMissilesDmg": 80497.0
    },
    "Insurance": {
      "StandardClaimTime": 16.39,
      "ExpeditedClaimTime": 5.46,
      "ExpeditedCost": 8383.0
    },
    "Buy": {
      "New Deal, Lorville": 11510100.0
    }
  },
  {
    "ClassName": "AEGS_Vanguard_Hoplite",
    "Name": "Aegis Vanguard Hoplite",
    "Description": "The Vanguard Hoplite is a cross between the winning Vanguard deep space fighter and a dedicated boarding ship. Adapted from proven assault ship designs, the Hoplite is the perfect tool for inserting an armored strike team with enough firepower to get them out again.",
    "Career": "Combat",
    "Role": "Drop Ship",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.85
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 217870.0,
    "ComponentsMass": 23926.0,
    "Dimensions": {
      "Length": 48.0,
      "Width": 40.0,
      "Height": 9.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 0.93,
        "Distortion": 0.97
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.134,
        "Infrared": 1.134,
        "CrossSection": 1.134
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 31500.0,
          "Body": 8000.0
        },
        "Parts": {
          "Arm_Right": 200.0,
          "Arm_Left": 200.0,
          "Engine_R": 7500.0,
          "Tail_Fin_Right_Upper": 250.0,
          "Tail_Fin_Right_Lower": 250.0,
          "Wing_Right_Geo": 2000.0,
          "Wing_Right_Flaps_Geo": 1200.0,
          "Engine_L": 7500.0,
          "Tail_Fin_Left_Upper": 250.0,
          "Tail_Fin_Left_Lower": 250.0,
          "Wing_Left_Geo": 2000.0,
          "Wing_Left_Flaps_Geo": 1200.0,
          "Wing_Back_Right": 3500.0,
          "Wing_Back_Left": 3500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_right": 16500.0,
          "engine_middle_right": 16500.0,
          "engine_left": 16500.0,
          "engine_middle_left": 16500.0
        },
        "Retro": {
          "thruster_retro_right": 15250.0,
          "thruster_retro_left": 15250.0
        },
        "Maneuvering": {
          "thruster_top_FR": 14350.0,
          "thruster_bottom_FR": 14350.0,
          "thruster_bottom_RR": 14350.0,
          "thruster_top_RR": 14350.0,
          "thruster_side_RR": 14350.0,
          "thruster_side_RL": 14350.0,
          "thruster_bottom_FL": 14350.0,
          "thruster_top_RL": 14350.0,
          "thruster_top_FL": 14350.0,
          "thruster_bottom_RL": 14350.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 209.0,
      "MaxSpeed": 1115.0,
      "Pitch": 35.0,
      "Yaw": 30.0,
      "Roll": 105.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 21470806.0,
        "Retro": 5960564.0,
        "Vtol": 0.0,
        "Maneuvering": 20340350.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 9.0,
        "Retro": 2.5,
        "Strafe": 4.2,
        "Up": 4.7,
        "Down": 5.3,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 435.0,
          "BoostSpeedBackward": 246.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.2,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.2,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.2,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 39000000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 2683.851,
        "Retro": 745.07,
        "Vtol": 0.0,
        "Maneuvering": 2542.544
      },
      "IntakeToMainFuelRatio": 1.86,
      "TimeForIntakesToFillTank": 780000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 14904.0,
        "SCMActive": 19056.0,
        "NAV": 32458.0
      },
      "Infrared": {
        "Start": 12286.0
      },
      "CrossSection": {
        "Front": 3687.0,
        "Side": 18433.0,
        "Top": 17658.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 9480.0,
      "PilotBurstDPS": 3507.0,
      "TurretsBurstDPS": 900.0,
      "TotalMissilesDmg": 19117.0
    },
    "Insurance": {
      "StandardClaimTime": 13.25,
      "ExpeditedClaimTime": 4.42,
      "ExpeditedCost": 6603.0
    },
    "Buy": {
      "New Deal, Lorville": 9327150.0
    }
  },
  {
    "ClassName": "AEGS_Vanguard_Sentinel",
    "Name": "Aegis Vanguard Sentinel",
    "Description": "The Vanguard Sentinel is a ship that's designed to fight smart instead of taking enemies head on. The conversion features an AR cockpit, an external e-War pod, decoy missiles and a set of EMP charges. Vanguard Sentinels often provide necessary combat support for combined operations. A lone Sentinel is frequently paired with Harbinger bombers and Warden escorts for large attack missions.",
    "Career": "Combat",
    "Role": "Heavy Fighter",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.5,
      "PersonalInventory": 1.85
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 225970.0,
    "ComponentsMass": 15377.0,
    "Dimensions": {
      "Length": 48.0,
      "Width": 40.0,
      "Height": 9.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 0.93,
        "Distortion": 0.93
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 10000.0,
          "Body": 10000.0
        },
        "Parts": {
          "Arm_Right": 200.0,
          "Arm_Left": 200.0,
          "Engine_R": 10170.0,
          "Tail_Fin_Right_Upper": 250.0,
          "Tail_Fin_Right_Lower": 250.0,
          "Wing_Right_Geo": 800.0,
          "Wing_Right_Flaps_Geo": 600.0,
          "Engine_L": 10170.0,
          "Tail_Fin_Left_Upper": 250.0,
          "Tail_Fin_Left_Lower": 250.0,
          "Wing_Left_Geo": 800.0,
          "Wing_Left_Flaps_Geo": 600.0,
          "Wing_Back_Right": 1800.0,
          "Wing_Back_Left": 1800.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_right": 16500.0,
          "engine_middle_right": 16500.0,
          "engine_left": 16500.0,
          "engine_middle_left": 16500.0
        },
        "Retro": {
          "thruster_retro_right": 15250.0,
          "thruster_retro_left": 15250.0
        },
        "Maneuvering": {
          "thruster_top_FR": 14350.0,
          "thruster_bottom_FR": 14350.0,
          "thruster_bottom_RR": 14350.0,
          "thruster_top_RR": 14350.0,
          "thruster_side_RR": 14350.0,
          "thruster_side_RL": 14350.0,
          "thruster_bottom_FL": 14350.0,
          "thruster_top_RL": 14350.0,
          "thruster_top_FL": 14350.0,
          "thruster_bottom_RL": 14350.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 210.0,
      "MaxSpeed": 1075.0,
      "Pitch": 40.0,
      "Yaw": 36.0,
      "Roll": 126.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 21007886.0,
        "Retro": 7800000.0,
        "Vtol": 0.0,
        "Maneuvering": 31650000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 8.9,
        "Retro": 3.3,
        "Strafe": 6.6,
        "Up": 6.6,
        "Down": 4.0,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 458.0,
          "BoostSpeedBackward": 220.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 39000000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 2625.986,
        "Retro": 975.0,
        "Vtol": 0.0,
        "Maneuvering": 3956.25
      },
      "IntakeToMainFuelRatio": 1.9,
      "TimeForIntakesToFillTank": 780000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 15327.0,
        "SCMActive": 22046.0,
        "NAV": 30807.0
      },
      "Infrared": {
        "Start": 11834.0
      },
      "CrossSection": {
        "Front": 3289.0,
        "Side": 16444.0,
        "Top": 15751.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 7020.0,
      "PilotBurstDPS": 2865.0,
      "TurretsBurstDPS": 405.0,
      "TotalEMPDmg": 3300.0,
      "TotalMissilesDmg": 29222.0
    },
    "Insurance": {
      "StandardClaimTime": 18.22,
      "ExpeditedClaimTime": 6.07,
      "ExpeditedCost": 9113.0
    },
    "Buy": {
      "New Deal, Lorville": 10914750.0
    }
  },
  {
    "ClassName": "ANVL_Arrow",
    "Name": "Anvil Arrow",
    "Description": "Unmatched design, blazing top speed, and ultra-responsive maneuverability make the Arrow the most agile scrapper in its class. With a robust weapons package that provides firepower to spare, this is truly the classic light fighter, updated for the next generation of combat.",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.43,
      "PersonalInventory": 0.43
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 30510.0,
    "ComponentsMass": 5097.0,
    "Dimensions": {
      "Length": 16.0,
      "Width": 12.0,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.46,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 2000.0,
          "body": 2000.0
        },
        "Parts": {
          "canopy": 80.0,
          "wing_left": 1500.0,
          "wing_right": 1500.0,
          "stabilizer_left": 800.0,
          "stabilizer_right": 800.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main": 11250.0
        },
        "Retro": {
          "thruster_retro_right": 10560.0,
          "thruster_retro_left": 10560.0
        },
        "Maneuvering": {
          "thruster_mav_rear_bottom_right": 9750.0,
          "thruster_mav_front_top_right": 9750.0,
          "thruster_mav_rear_top_right": 9750.0,
          "thruster_mav_front_bottom_left": 9750.0,
          "thruster_mav_rear_bottom_left": 9750.0,
          "thruster_mav_front_top_left": 9750.0,
          "thruster_mav_rear_top_left": 9750.0,
          "thruster_mav_front_bottom_right": 9750.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 232.0,
      "MaxSpeed": 1210.0,
      "Pitch": 74.0,
      "Yaw": 55.0,
      "Roll": 189.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4400000.0,
        "Retro": 1530000.0,
        "Vtol": 0.0,
        "Maneuvering": 3480000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 13.3,
        "Retro": 4.6,
        "Strafe": 10.2,
        "Up": 10.2,
        "Down": 5.2
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 515.0,
          "BoostSpeedBackward": 265.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 7500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 550.0,
        "Retro": 191.25,
        "Vtol": 0.0,
        "Maneuvering": 435.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 4318.0,
        "SCMActive": 5077.0,
        "NAV": 11851.0
      },
      "Infrared": {
        "Start": 5838.0
      },
      "CrossSection": {
        "Front": 1910.0,
        "Side": 5647.0,
        "Top": 7473.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1730.0,
      "PilotBurstDPS": 1494.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 14337.0
    },
    "Insurance": {
      "StandardClaimTime": 5.27,
      "ExpeditedClaimTime": 1.76,
      "ExpeditedCost": 3121.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1984500.0
    }
  },
  {
    "ClassName": "ANVL_Ballista",
    "Name": "Anvil Ballista",
    "Description": "Keep your airspace clear of danger with the Anvil Ballista. Originally designed to defend outposts from Vanduul attacks, this mobile missile defense system packs a powerful loadout, allowing the Ballista to stand firm against any threat, whether it arrives by air or land.",
    "Career": "Ground",
    "Role": "Ground",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 2.11
    },
    "Crew": 2,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 76816.0,
    "ComponentsMass": 4020.0,
    "Dimensions": {
      "Length": 17.0,
      "Width": 7.0,
      "Height": 5.0
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.46,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 10000.0,
          "body": 10000.0
        },
        "Parts": {
          "hardpoint_wheel_front_left01": 1700.0,
          "hardpoint_wheel_front_left02": 1700.0,
          "hardpoint_wheel_front_right01": 1700.0,
          "hardpoint_wheel_front_right02": 1700.0,
          "hardpoint_wheel_back_left01": 1700.0,
          "hardpoint_wheel_back_left02": 1700.0,
          "hardpoint_wheel_back_right01": 1700.0,
          "hardpoint_wheel_back_right02": 1700.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 100.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 115.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1630.0,
        "SCMActive": 2530.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1745.0
      },
      "CrossSection": {
        "Front": 1377.0,
        "Side": 1885.0,
        "Top": 3338.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1090.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 677.0,
      "TotalMissilesDmg": 320185.0
    },
    "Insurance": {
      "StandardClaimTime": 6.19,
      "ExpeditedClaimTime": 2.06,
      "ExpeditedCost": 8073.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1481760.0,
      "New Deal, Lorville": 1481760.0
    }
  },
  {
    "ClassName": "ANVL_C8R_Pisces",
    "Name": "Anvil C8R Pisces Rescue",
    "Description": "With the addition of an onboard Tier 3 Medical Bed, the C8R Pisces can treat minor injuries and keep a patient stable while transporting them to the safety of a larger ship, station, or nearby medical facility, making it an invaluable asset for short-range search and rescue.",
    "Career": "Support",
    "Role": "Medical",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.12,
      "PersonalInventory": 0.71
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 45243.0,
    "ComponentsMass": 4618.2,
    "Dimensions": {
      "Length": 13.0,
      "Width": 10.0,
      "Height": 3.25
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 1.0,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 4500.0
        },
        "Parts": {
          "Canopy": 250.0,
          "Body_underpanels_Left": 250.0,
          "Body_underpanels_Right": 250.0,
          "Wing_Left": 250.0,
          "Wing_Left_Debris": 250.0,
          "Wing_Right": 250.0,
          "Wing_Right_Debris": 250.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 8000.0,
          "thruster_main_left": 8000.0
        },
        "Retro": {
          "thruster_retro_right": 7000.0,
          "thruster_retro_left": 7000.0
        },
        "Maneuvering": {
          "thruster_rear_top_right": 5500.0,
          "thruster_rear_top_left": 5500.0,
          "thruster_rear_side_right": 6500.0,
          "thruster_rear_side_left": 6500.0,
          "thruster_rear_bottom_right": 5500.0,
          "thruster_rear_bottom_left": 5500.0,
          "thruster_front_top_right": 5500.0,
          "thruster_front_top_left": 5500.0,
          "thruster_front_side_right": 6500.0,
          "thruster_front_side_left": 6500.0,
          "thruster_front_bottom_right": 5500.0,
          "thruster_front_bottom_left": 5500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 56.0,
      "Roll": 142.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 3800000.0,
        "Retro": 1200000.0,
        "Vtol": 0.0,
        "Maneuvering": 10000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 7.9,
        "Retro": 2.4,
        "Strafe": 4.4,
        "Up": 6.2,
        "Down": 5.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 460.0,
          "BoostSpeedBackward": 300.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 3200000.0,
      "FuelIntakeRate": 12.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 475.0,
        "Retro": 150.0,
        "Vtol": 0.0,
        "Maneuvering": 1250.0
      },
      "IntakeToMainFuelRatio": 2.53,
      "TimeForIntakesToFillTank": 266666.67
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 4517.0,
        "SCMActive": 5370.0,
        "NAV": 12050.0
      },
      "Infrared": {
        "Start": 5232.0
      },
      "CrossSection": {
        "Front": 1778.0,
        "Side": 5489.0,
        "Top": 6958.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1280.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 2280.0
    },
    "Insurance": {
      "StandardClaimTime": 4.59,
      "ExpeditedClaimTime": 1.53,
      "ExpeditedCost": 2301.0
    },
    "Buy": {
      "Astro Armada, Area 18": 555660.0
    }
  },
  {
    "ClassName": "ANVL_C8X_Pisces_Expedition",
    "Name": "Anvil C8X Pisces Expedition",
    "Description": "Sporting more guns and a limited-edition livery, the C8X Pisces Expedition turns the stout snub into a perfectly viable standalone exploration vessel. With its compact frame, deft maneuverability, and seating for three, the Pisces Expedition is ready to take on its own adventures.",
    "Career": "Exploration",
    "Role": "Pathfinder",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 4.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.71
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 45243.0,
    "ComponentsMass": 4935.0,
    "Dimensions": {
      "Length": 13.0,
      "Width": 10.0,
      "Height": 3.25
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 1.0,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 4500.0
        },
        "Parts": {
          "Canopy": 250.0,
          "Body_underpanels_Left": 250.0,
          "Body_underpanels_Right": 250.0,
          "Wing_Left": 250.0,
          "Wing_Left_Debris": 250.0,
          "Wing_Right": 250.0,
          "Wing_Right_Debris": 250.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 8000.0,
          "thruster_main_left": 8000.0
        },
        "Retro": {
          "thruster_retro_right": 7000.0,
          "thruster_retro_left": 7000.0
        },
        "Maneuvering": {
          "thruster_rear_top_right": 5500.0,
          "thruster_rear_top_left": 5500.0,
          "thruster_rear_side_right": 6500.0,
          "thruster_rear_side_left": 6500.0,
          "thruster_rear_bottom_right": 5500.0,
          "thruster_rear_bottom_left": 5500.0,
          "thruster_front_top_right": 5500.0,
          "thruster_front_top_left": 5500.0,
          "thruster_front_side_right": 6500.0,
          "thruster_front_side_left": 6500.0,
          "thruster_front_bottom_right": 5500.0,
          "thruster_front_bottom_left": 5500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 60.0,
      "Yaw": 60.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 3800000.0,
        "Retro": 1200000.0,
        "Vtol": 0.0,
        "Maneuvering": 10000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 7.9,
        "Retro": 2.4,
        "Strafe": 4.4,
        "Up": 6.2,
        "Down": 5.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 460.0,
          "BoostSpeedBackward": 300.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 3200000.0,
      "FuelIntakeRate": 12.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 475.0,
        "Retro": 150.0,
        "Vtol": 0.0,
        "Maneuvering": 1250.0
      },
      "IntakeToMainFuelRatio": 2.53,
      "TimeForIntakesToFillTank": 266666.67
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 4530.0,
        "SCMActive": 5382.0,
        "NAV": 12063.0
      },
      "Infrared": {
        "Start": 5578.0
      },
      "CrossSection": {
        "Front": 1909.0,
        "Side": 5893.0,
        "Top": 7470.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1280.0,
      "PilotBurstDPS": 848.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 2280.0
    },
    "Insurance": {
      "StandardClaimTime": 3.36,
      "ExpeditedClaimTime": 1.12,
      "ExpeditedCost": 1806.0
    },
    "Buy": {
      "Astro Armada, Area 18": 515970.0
    }
  },
  {
    "ClassName": "ANVL_C8_Pisces",
    "Name": "Anvil C8 Pisces",
    "Description": "With its compact frame, deft maneuverability, and seating for three, the C8 Pisces snub craft, included with every Carrack, is built by Anvil Aerospace for scouting ahead or exploring environments inaccessible to its larger carrier ship. ",
    "Career": "Exploration",
    "Role": "Pathfinder",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 4.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.71
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 45243.0,
    "ComponentsMass": 4605.0,
    "Dimensions": {
      "Length": 13.0,
      "Width": 10.0,
      "Height": 3.25
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 1.0,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 4500.0
        },
        "Parts": {
          "Canopy": 250.0,
          "Body_underpanels_Left": 250.0,
          "Body_underpanels_Right": 250.0,
          "Wing_Left": 250.0,
          "Wing_Left_Debris": 250.0,
          "Wing_Right": 250.0,
          "Wing_Right_Debris": 250.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 8000.0,
          "thruster_main_left": 8000.0
        },
        "Retro": {
          "thruster_retro_right": 7000.0,
          "thruster_retro_left": 7000.0
        },
        "Maneuvering": {
          "thruster_rear_top_right": 5500.0,
          "thruster_rear_top_left": 5500.0,
          "thruster_rear_side_right": 6500.0,
          "thruster_rear_side_left": 6500.0,
          "thruster_rear_bottom_right": 5500.0,
          "thruster_rear_bottom_left": 5500.0,
          "thruster_front_top_right": 5500.0,
          "thruster_front_top_left": 5500.0,
          "thruster_front_side_right": 6500.0,
          "thruster_front_side_left": 6500.0,
          "thruster_front_bottom_right": 5500.0,
          "thruster_front_bottom_left": 5500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 60.0,
      "Yaw": 60.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 3800000.0,
        "Retro": 1200000.0,
        "Vtol": 0.0,
        "Maneuvering": 10000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 7.9,
        "Retro": 2.4,
        "Strafe": 4.4,
        "Up": 6.2,
        "Down": 5.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 460.0,
          "BoostSpeedBackward": 300.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 3200000.0,
      "FuelIntakeRate": 12.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 475.0,
        "Retro": 150.0,
        "Vtol": 0.0,
        "Maneuvering": 1250.0
      },
      "IntakeToMainFuelRatio": 2.53,
      "TimeForIntakesToFillTank": 266666.67
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 4517.0,
        "SCMActive": 5370.0,
        "NAV": 12050.0
      },
      "Infrared": {
        "Start": 5568.0
      },
      "CrossSection": {
        "Front": 1835.0,
        "Side": 5664.0,
        "Top": 7180.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1280.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 2280.0
    },
    "Insurance": {
      "StandardClaimTime": 3.36,
      "ExpeditedClaimTime": 1.12,
      "ExpeditedCost": 1806.0
    },
    "Buy": {
      "Astro Armada, Area 18": 745290.0
    }
  },
  {
    "ClassName": "ANVL_Carrack",
    "Name": "Anvil Carrack",
    "Description": "Adventure calls and Anvil Aerospace answers with the Carrack. Built to endure extreme conditions in both space and atmosphere, this self-sustaining explorer has more than earned its long-standing status as the go-to pathfinder for both military and civilian service. ",
    "Career": "Exploration",
    "Role": "Expedition",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 456.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 9.0,
      "PersonalInventory": 8.92
    },
    "Crew": 6,
    "WeaponCrew": 4,
    "OperationsCrew": 0,
    "Mass": 4397858.0,
    "ComponentsMass": 342400.0,
    "Dimensions": {
      "Length": 126.5,
      "Width": 76.5,
      "Height": 30.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.46,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "middle": 70000.0
        },
        "Parts": {
          "rear": 3000.0,
          "Wings_L": 5000.0,
          "Wings_R": 5000.0,
          "front": 5000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left_large": 30000.0,
          "thruster_main_left_small": 27500.0,
          "thruster_main_right_large": 30000.0,
          "thruster_main_right_small": 27500.0
        },
        "Retro": {
          "thruster_retro_back": 28950.0,
          "thruster_retro_forward": 28950.0
        },
        "Vtol": {
          "thruster_vtol_rear_left": 28950.0,
          "thruster_vtol_rear_right": 28950.0,
          "thruster_vtol_front_left": 28950.0,
          "thruster_vtol_front_right": 28950.0
        },
        "Maneuvering": {
          "thruster_bottom_rear_left": 25500.0,
          "thruster_bottom_rear_right": 25500.0,
          "thruster_side_rear_left": 25500.0,
          "thruster_side_rear_right": 25500.0,
          "thruster_top_rear_left": 25500.0,
          "thruster_top_rear_right": 25500.0,
          "thruster_bottom_front_left": 25500.0,
          "thruster_bottom_front_right": 25500.0,
          "thruster_side_front_left": 25500.0,
          "thruster_side_front_right": 25500.0,
          "thruster_top_front_left": 25500.0,
          "thruster_top_front_right": 25500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 140.0,
      "MaxSpeed": 1050.0,
      "Pitch": 16.0,
      "Yaw": 16.0,
      "Roll": 30.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 166600000.0,
        "Retro": 66500000.0,
        "Vtol": 37200000.0,
        "Maneuvering": 176400000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 3.8,
        "Retro": 1.5,
        "Strafe": 1.1,
        "Up": 2.0,
        "Down": 1.1
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 7.0,
        "ScmMode": {
          "BoostSpeedForward": 315.0,
          "BoostSpeedBackward": 160.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 1.3,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 360000000.0,
      "FuelIntakeRate": 800.0,
      "QuantumFuelCapacity": 10600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 20825.0,
        "Retro": 8312.5,
        "Vtol": 4650.0,
        "Maneuvering": 22050.0
      },
      "IntakeToMainFuelRatio": 3.84,
      "TimeForIntakesToFillTank": 450000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 18784.0,
        "SCMActive": 22162.0,
        "NAV": 34231.0
      },
      "Infrared": {
        "Start": 19557.0
      },
      "CrossSection": {
        "Front": 10428.0,
        "Side": 26620.0,
        "Top": 44000.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 112200.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 6543.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 48.3,
      "ExpeditedClaimTime": 16.1,
      "ExpeditedCost": 19595.0
    },
    "Buy": {
      "Astro Armada, Area 18": 34398000.0
    }
  },
  {
    "ClassName": "ANVL_Centurion",
    "Name": "Anvil Centurion",
    "Description": "Built on Anvil's popular Atlas Platform, the Centurion presents a tactical solution for short-range anti-aircraft operations. Thanks to the Centurion’s custom energy-based AA turret, your forces can establish ground superiority by assuring immediate threats from above are dealt with quickly and efficiently.",
    "Career": "Ground",
    "Role": "Ground",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 2.11
    },
    "Crew": 2,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 77016.0,
    "ComponentsMass": 2052.0,
    "Dimensions": {
      "Length": 17.0,
      "Width": 7.0,
      "Height": 5.5
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.46,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.3,
        "Infrared": 0.4,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 10000.0,
          "body": 10000.0
        },
        "Parts": {
          "hardpoint_wheel_left01": 1700.0,
          "hardpoint_wheel_left02": 1700.0,
          "hardpoint_wheel_left03": 1700.0,
          "hardpoint_wheel_left04": 1700.0,
          "hardpoint_wheel_right01": 1700.0,
          "hardpoint_wheel_right02": 1700.0,
          "hardpoint_wheel_right03": 1700.0,
          "hardpoint_wheel_right04": 1700.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 100.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 115.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 80.0,
        "SCMActive": 367.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 983.0
      },
      "CrossSection": {
        "Front": 2193.0,
        "Side": 1903.0,
        "Top": 2053.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1348.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 4058.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 7.56,
      "ExpeditedClaimTime": 2.52,
      "ExpeditedCost": 5920.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1164240.0,
      "New Deal, Lorville": 1164240.0
    }
  },
  {
    "ClassName": "ANVL_Gladiator",
    "Name": "Anvil Gladiator",
    "Description": "The civilian model of the Gladiator appeals to those that want to explore the ‘verse with a bit of added security. Supporting a maximum of two, the Gladiator is perfectly equipped to explore and fight with or without a wingman. The Civilian model allows pilots to choose between an extra cargo hold or a bomb bay.",
    "Career": "Combat",
    "Role": "Bomber",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.29,
      "PersonalInventory": 1.29
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 86108.0,
    "ComponentsMass": 9852.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 22.5,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.46,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 5500.0
        },
        "Parts": {
          "nose": 5500.0,
          "shield_generator_cover": 40.0,
          "cockpitbay_outerdoor_left": 100.0,
          "cockpitbay_outerdoor_right": 100.0,
          "canopy": 7500.0,
          "canopy_glass": 250.0,
          "amunition_hatch_right": 40.0,
          "amunition_hatch_left": 40.0,
          "engine_cover_left": 40.0,
          "engine_cover_right": 40.0,
          "sidefin_left": 40.0,
          "tailfin_left": 800.0,
          "tailfin_left_rudder": 40.0,
          "sidefin_right": 40.0,
          "tailfin_right": 800.0,
          "tailfin_right_rudder": 40.0,
          "tail": 200.0,
          "wing_right": 800.0,
          "wing_right_tip": 300.0,
          "wing_flap_side_right": 160.0,
          "wing_flap_main_right": 160.0,
          "cockpitbay_gunnerdoor": 40.0,
          "hull_avionicsaccess_panel": 40.0,
          "hull_fuelaccess_panel_left": 40.0,
          "hull_fuelaccess_panel_right": 40.0,
          "bombbay_outerdoor_left": 60.0,
          "bombbay_outerdoor_right": 600.0,
          "core_bottomshield": 400.0,
          "core_topshield": 200.0,
          "wing_left": 800.0,
          "wing_left_tip": 300.0,
          "wing_flap_side_left": 160.0,
          "wing_flap_main_left": 160.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 8500.0,
          "engine_right": 8500.0
        },
        "Retro": {
          "thruster_top_front_left": 7256.0,
          "thruster_top_front_right": 7256.0
        },
        "Maneuvering": {
          "thruster_top_back_right": 6980.0,
          "thruster_top_back_left": 6980.0,
          "thruster_bottom_back_left": 6980.0,
          "thruster_bottom_front_left": 6980.0,
          "thruster_bottom_back_right": 6980.0,
          "thruster_bottom_front_right": 6980.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 210.0,
      "MaxSpeed": 1125.0,
      "Pitch": 40.0,
      "Yaw": 40.0,
      "Roll": 130.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4220000.0,
        "Retro": 730000.0,
        "Vtol": 0.0,
        "Maneuvering": 4600000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 9.9,
        "Retro": 3.9,
        "Strafe": 5.9,
        "Up": 6.9,
        "Down": 2.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 250.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 15000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 7.5
      },
      "FuelUsagePerSecond": {
        "Main": 527.5,
        "Retro": 91.25,
        "Vtol": 0.0,
        "Maneuvering": 575.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 7653.0,
        "SCMActive": 9606.0,
        "NAV": 15178.0
      },
      "Infrared": {
        "Start": 7945.0
      },
      "CrossSection": {
        "Front": 2615.0,
        "Side": 8715.0,
        "Top": 8715.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4740.0,
      "PilotBurstDPS": 1636.0,
      "TurretsBurstDPS": 1091.0,
      "TotalMissilesDmg": 97502.0
    },
    "Insurance": {
      "StandardClaimTime": 7.59375,
      "ExpeditedClaimTime": 2.53125,
      "ExpeditedCost": 3800.0
    },
    "Buy": {
      "Astro Armada, Area 18": 4365900.0
    }
  },
  {
    "ClassName": "ANVL_Hawk",
    "Name": "Anvil Hawk",
    "Description": "A small, light fighter with an emphasis on weaponry, the Hawk boasts an impressive arsenal of lethal and non-lethal weapons, making it a perfect ship for independent bounty hunters or local security looking for a little more punch.",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 64166.0,
    "ComponentsMass": 5930.0,
    "Dimensions": {
      "Length": 17.0,
      "Width": 22.0,
      "Height": 6.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.46,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 1500.0,
          "body": 1500.0
        },
        "Parts": {
          "canopy": 1500.0,
          "Nacelle_left": 1000.0,
          "rear_wing_left": 800.0,
          "wing_left": 800.0,
          "Nacelle_right": 1000.0,
          "rear_wing_right": 800.0,
          "wing_right": 800.0,
          "tail": 1500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster_left": 7500.0,
          "main_thruster_right": 7500.0
        },
        "Retro": {
          "retro_thruster_left": 6780.0,
          "retro_thruster_right": 6780.0
        },
        "Maneuvering": {
          "mav_thruster_left_bottom": 6000.0,
          "mav_thruster_left_top": 6000.0,
          "mav_thruster_right_bottom": 6000.0,
          "mav_thruster_right_top": 6000.0,
          "mav_thruster_body_right": 6000.0,
          "mav_thruster_body_left": 6000.0,
          "mav_thruster_body_top": 6000.0,
          "mav_thruster_tail_left": 6000.0,
          "mav_thruster_tail_bottom": 6000.0,
          "mav_thruster_tail_right": 6000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 222.0,
      "MaxSpeed": 1175.0,
      "Pitch": 65.0,
      "Yaw": 48.0,
      "Roll": 178.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8200000.0,
        "Retro": 2900000.0,
        "Vtol": 0.0,
        "Maneuvering": 30800000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 12.1,
        "Retro": 4.2,
        "Strafe": 9.1,
        "Up": 9.0,
        "Down": 4.7
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 490.0,
          "BoostSpeedBackward": 250.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 10500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 1025.0,
        "Retro": 362.5,
        "Vtol": 0.0,
        "Maneuvering": 3850.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 6684.0,
        "SCMActive": 9190.0,
        "NAV": 14217.0
      },
      "Infrared": {
        "Start": 7865.0
      },
      "CrossSection": {
        "Front": 3024.0,
        "Side": 11201.0,
        "Top": 8064.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 1582.0,
      "TurretsBurstDPS": 0.0,
      "TotalEMPDmg": 2475.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 6.8,
      "ExpeditedClaimTime": 2.27,
      "ExpeditedCost": 3040.0
    },
    "Dimensions2": {
      "Length": 17.0,
      "Width": 13.0,
      "Height": 6.5
    },
    "Buy": {
      "Astro Armada, Area 18": 2646000.0
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7A_Mk1",
    "Name": "Anvil F7A Hornet Mk I",
    "Description": "The UEE Navy's premier carrier-based fighter craft, the F7A Hornet Mk I is the front-line attack ship for military combat missions. While not outfitted for long range runs, the Hornet can take her share of hits and dish out a powerful response.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 72032.0,
    "ComponentsMass": 9182.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 21.5,
      "Height": 6.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2750.0
        },
        "Parts": {
          "EngineHousing": 400.0,
          "thrust_vector_flap_c": 50.0,
          "thrust_vector_flap_b": 50.0,
          "thrust_vector_flap_a": 50.0,
          "Tail": 1800.0,
          "Tail_Debris": 1500.0,
          "Nose": 2750.0,
          "Canopy": 200.0,
          "WingLeft": 200.0,
          "WingLeft_Debris": 1500.0,
          "WingRight": 200.0,
          "WingRight_Debris": 1500.0,
          "WingLeftRear": 700.0,
          "WingRightRear": 700.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_attach": 6700.0
        },
        "Retro": {
          "thruster_top_front_left": 4700.0,
          "thruster_top_front_right": 4700.0
        },
        "Maneuvering": {
          "thruster_top_back_left": 4700.0,
          "thruster_bottom_front_left": 4700.0,
          "thruster_bottom_back_left": 4700.0,
          "thruster_top_back_right": 4700.0,
          "thruster_bottom_front_right": 4700.0,
          "thruster_bottom_back_right": 4700.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1146.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2814000.0,
        "Retro": 2482000.0,
        "Vtol": 0.0,
        "Maneuvering": 9212000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.7,
        "Retro": 3.8,
        "Strafe": 6.9,
        "Up": 7.8,
        "Down": 4.2
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 479.0,
          "BoostSpeedBackward": 249.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 14000000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 7.5
      },
      "FuelUsagePerSecond": {
        "Main": 351.75,
        "Retro": 310.25,
        "Vtol": 0.0,
        "Maneuvering": 1151.5
      },
      "IntakeToMainFuelRatio": 10.23,
      "TimeForIntakesToFillTank": 388888.89
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5490.0,
        "SCMActive": 6491.0,
        "NAV": 13993.0
      },
      "Infrared": {
        "Start": 6901.0
      },
      "CrossSection": {
        "Front": 1893.0,
        "Side": 6778.0,
        "Top": 7328.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3000.0,
      "PilotBurstDPS": 4279.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 18723.0
    },
    "Insurance": {
      "StandardClaimTime": 6.75,
      "ExpeditedClaimTime": 2.25,
      "ExpeditedCost": 3375.0
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7A_Mk2",
    "Name": "Anvil F7A Hornet Mk II",
    "Description": "Ushering in a new age of space superiority, Anvil Aerospace has re-engineered the celebrated Hornet for the next generation of fighter combat.  Purpose built for the UEE Navy, the F7A Hornet Mk II maintains the spirit of the original while incorporating even more powerful offensive capabilities.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.0
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 66117.0,
    "ComponentsMass": 12014.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 21.0,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 3000.0,
          "nose": 3000.0,
          "tail": 1900.0
        },
        "Parts": {
          "wing_right": 200.0,
          "wing_right_debris": 1600.0,
          "wing_flap_right": 50.0,
          "small_wing_left": 100.0,
          "small_wing_flap_left": 50.0,
          "small_wing_right": 100.0,
          "small_wing_flap_right": 50.0,
          "canopy": 200.0,
          "thrust_vector_flap_a": 50.0,
          "thrust_vector_flap_b": 50.0,
          "thrust_vector_flap_c": 50.0,
          "tail_wing": 1.0,
          "tail_wing_debris": 400.0,
          "wing_left": 200.0,
          "wing_left_debris": 1600.0,
          "wing_left_debris_02": 200.0,
          "cap_spine": 250.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_s5": 7000.0
        },
        "Retro": {
          "retro_thruster_left": 8250.0,
          "retro_thruster_right": 8250.0
        },
        "Maneuvering": {
          "thruster_top_front_right": 5000.0,
          "thruster_top_front_left": 5000.0,
          "thruster_top_back_right": 5000.0,
          "thruster_top_back_left": 5000.0,
          "thruster_bottom_front_right": 5000.0,
          "thruster_bottom_front_left": 5000.0,
          "thruster_bottom_back_right": 5000.0,
          "thruster_bottom_back_left": 5000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1146.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8646000.0,
        "Retro": 3128000.0,
        "Vtol": 0.0,
        "Maneuvering": 11560000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.8,
        "Retro": 3.9,
        "Strafe": 7.3,
        "Up": 7.6,
        "Down": 4.3,
        "CheckDate": "2025-03-11"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 479.0,
          "BoostSpeedBackward": 249.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 16000000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 1080.75,
        "Retro": 391.0,
        "Vtol": 0.0,
        "Maneuvering": 1445.0
      },
      "IntakeToMainFuelRatio": 3.33,
      "TimeForIntakesToFillTank": 444444.44
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5607.0,
        "SCMActive": 6705.0,
        "NAV": 14110.0
      },
      "Infrared": {
        "Start": 7319.0
      },
      "CrossSection": {
        "Front": 2347.0,
        "Side": 8404.0,
        "Top": 9085.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 4719.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 19029.0
    },
    "Insurance": {
      "StandardClaimTime": 11.34,
      "ExpeditedClaimTime": 3.56,
      "ExpeditedCost": 5104.0
    },
    "New Ship": "Anvil F7A Hornet Mk II",
    "Dimensions2": {
      "Length": 22.5,
      "Width": 15.0,
      "Height": 6.0
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7C",
    "Name": "Anvil F7C Hornet Mk I",
    "Description": "To the enemy, it is a weapon never to be underestimated. To allies, it's a savior. The F7C Hornet Mk I is the same dependable and resilient multi-purpose fighter that has become the face of the UEE Navy. The F7C is the foundation to build on and meet whatever requirements you have in mind.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 2.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 72032.0,
    "ComponentsMass": 4689.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 21.5,
      "Height": 6.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2650.0
        },
        "Parts": {
          "IntakeLeft": 400.0,
          "MissileBay_Left": 400.0,
          "EngineHousing": 400.0,
          "thrust_vector_flap_c": 50.0,
          "thrust_vector_flap_a": 50.0,
          "thrust_vector_flap_b": 50.0,
          "IntakeRight": 400.0,
          "MissileBay_Right": 400.0,
          "Nose": 2650.0,
          "Canopy": 200.0,
          "WingRightRear": 700.0,
          "WingRight_Debris": 1500.0,
          "LG_Door_Rear_R": 100.0,
          "WingLeftRear": 700.0,
          "WingLeft_Debris": 1500.0,
          "LG_Door_Rear_L": 100.0,
          "Tail": 1800.0,
          "Tail_Debris": 1500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_attach": 6700.0
        },
        "Retro": {
          "thruster_top_front_right": 4700.0,
          "thruster_top_front_left": 4700.0
        },
        "Maneuvering": {
          "thruster_top_back_right": 4700.0,
          "thruster_bottom_front_left": 4700.0,
          "thruster_bottom_back_left": 4700.0,
          "thruster_top_back_left": 4700.0,
          "thruster_bottom_back_right": 4700.0,
          "thruster_bottom_front_right": 4700.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 5581000.0,
        "Retro": 2482000.0,
        "Vtol": 0.0,
        "Maneuvering": 9212000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.3,
        "Retro": 4.0,
        "Strafe": 7.9,
        "Up": 8.2,
        "Down": 7.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 250.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 12000000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 7.5
      },
      "FuelUsagePerSecond": {
        "Main": 697.625,
        "Retro": 310.25,
        "Vtol": 0.0,
        "Maneuvering": 1151.5
      },
      "IntakeToMainFuelRatio": 5.16,
      "TimeForIntakesToFillTank": 333333.33
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5417.0,
        "SCMActive": 6430.0,
        "NAV": 13930.0
      },
      "Infrared": {
        "Start": 6036.0
      },
      "CrossSection": {
        "Front": 1893.0,
        "Side": 6778.0,
        "Top": 7328.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3000.0,
      "PilotBurstDPS": 1091.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 14162.0
    },
    "Insurance": {
      "StandardClaimTime": 6.75,
      "ExpeditedClaimTime": 2.25,
      "ExpeditedCost": 3375.0
    },
    "Buy": {
      "Astro Armada, Area 18": 2910600.0
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7CM",
    "Name": "Anvil F7C-M Super Hornet Mk I",
    "Description": "The closest to the Military load-out as is legally possible for a Civilian model, the F7C-M Super Hornet Mk I reattaches the ball turret and offers near milspec parts under the hood. Proving that two heads are better than one, a second seat has been added to split the logistic and combat duty, making the Super Hornet a truly terrifying mark to engage.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.29,
      "PersonalInventory": 1.29
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 76786.0,
    "ComponentsMass": 7558.0,
    "Dimensions": {
      "Length": 25.5,
      "Width": 24.0,
      "Height": 6.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2900.0,
          "Nose": 2900.0
        },
        "Parts": {
          "EngineHousing": 400.0,
          "thrust_vector_flap_c": 50.0,
          "thrust_vector_flap_b": 50.0,
          "thrust_vector_flap_a": 50.0,
          "Tail": 1800.0,
          "Tail_Debris": 1500.0,
          "WingLeftRear": 700.0,
          "IntakeLeft": 400.0,
          "WingLeft_Debris": 1500.0,
          "LG_Door_Rear_L": 100.0,
          "Canopy": 200.0,
          "Canopy_Rear": 200.0,
          "WingRightRear": 700.0,
          "IntakeRight": 400.0,
          "WingRight_Debris": 1500.0,
          "LG_Door_Rear_R": 100.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_attach": 6700.0
        },
        "Retro": {
          "thruster_top_front_right": 4700.0,
          "thruster_top_front_left": 4700.0
        },
        "Maneuvering": {
          "thruster_bottom_front_left": 4700.0,
          "thruster_bottom_back_left": 4700.0,
          "thruster_top_back_left": 4700.0,
          "thruster_bottom_back_right": 4700.0,
          "thruster_bottom_front_right": 4700.0,
          "thruster_top_back_right": 4700.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 219.0,
      "MaxSpeed": 1142.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8648000.0,
        "Retro": 2216000.0,
        "Vtol": 0.0,
        "Maneuvering": 17752000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.8,
        "Retro": 3.8,
        "Strafe": 7.2,
        "Up": 7.9,
        "Down": 4.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 477.0,
          "BoostSpeedBackward": 249.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 13500000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 7.5
      },
      "FuelUsagePerSecond": {
        "Main": 1081.0,
        "Retro": 277.0,
        "Vtol": 0.0,
        "Maneuvering": 2219.0
      },
      "IntakeToMainFuelRatio": 3.33,
      "TimeForIntakesToFillTank": 375000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5300.0,
        "SCMActive": 6311.0,
        "NAV": 13813.0
      },
      "Infrared": {
        "Start": 6659.0
      },
      "CrossSection": {
        "Front": 2288.0,
        "Side": 8191.0,
        "Top": 8856.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 2107.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9121.0
    },
    "Insurance": {
      "StandardClaimTime": 9.72,
      "ExpeditedClaimTime": 3.24,
      "ExpeditedCost": 4789.0
    },
    "Buy": {
      "Astro Armada, Area 18": 4762800.0
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7CM_Heartseeker",
    "Name": "Anvil F7C-M Hornet Heartseeker Mk I",
    "Description": "Designed for pilots whose true love is the pulse-pounding thrill of a harrowing dogfight, the limited-edition F7C-M Heartseeker Mk I is 'the one' for true combat die-hards. Loaded with top-of-the-line components and outfitted with four imposing Behring laser cannons, this fierce eradicator hones the legendary combat proficiency of the Super Hornet to give you the ultimate edge in space combat.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.29,
      "PersonalInventory": 1.29
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 76786.0,
    "ComponentsMass": 7402.0,
    "Dimensions": {
      "Length": 25.5,
      "Width": 24.0,
      "Height": 6.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2900.0,
          "Nose": 2900.0
        },
        "Parts": {
          "EngineHousing": 400.0,
          "thrust_vector_flap_c": 50.0,
          "thrust_vector_flap_b": 50.0,
          "thrust_vector_flap_a": 50.0,
          "Tail": 1800.0,
          "Tail_Debris": 1500.0,
          "WingLeftRear": 700.0,
          "IntakeLeft": 400.0,
          "WingLeft_Debris": 1500.0,
          "LG_Door_Rear_L": 100.0,
          "Canopy": 200.0,
          "Canopy_Rear": 200.0,
          "WingRightRear": 700.0,
          "IntakeRight": 400.0,
          "WingRight_Debris": 1500.0,
          "LG_Door_Rear_R": 100.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_attach": 6700.0
        },
        "Retro": {
          "thruster_top_front_right": 4700.0,
          "thruster_top_front_left": 4700.0
        },
        "Maneuvering": {
          "thruster_bottom_front_left": 4700.0,
          "thruster_bottom_back_left": 4700.0,
          "thruster_top_back_left": 4700.0,
          "thruster_bottom_back_right": 4700.0,
          "thruster_bottom_front_right": 4700.0,
          "thruster_top_back_right": 4700.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 219.0,
      "MaxSpeed": 1142.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8648000.0,
        "Retro": 2216000.0,
        "Vtol": 0.0,
        "Maneuvering": 17752000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.8,
        "Retro": 3.8,
        "Strafe": 7.2,
        "Up": 7.9,
        "Down": 4.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 477.0,
          "BoostSpeedBackward": 249.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 13500000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 7.5
      },
      "FuelUsagePerSecond": {
        "Main": 1081.0,
        "Retro": 277.0,
        "Vtol": 0.0,
        "Maneuvering": 2219.0
      },
      "IntakeToMainFuelRatio": 3.33,
      "TimeForIntakesToFillTank": 375000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5290.0,
        "SCMActive": 6301.0,
        "NAV": 13803.0
      },
      "Infrared": {
        "Start": 6568.0
      },
      "CrossSection": {
        "Front": 2288.0,
        "Side": 8191.0,
        "Top": 8856.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 2476.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 7880.0
    },
    "Insurance": {
      "StandardClaimTime": 9.72,
      "ExpeditedClaimTime": 3.24,
      "ExpeditedCost": 4789.0
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7CM_Mk2",
    "Name": "Anvil F7C-M Super Hornet Mk II",
    "Description": "Refining their renowned military-class superiority fighter with the most up-to-date technology, Anvil Aerospace has crafted the F7C-M Super Hornet Mk II,  retaining the second seat and ball turret that made the original a truly terrifying mark to engage.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.29,
      "PersonalInventory": 0.0
    },
    "Crew": 2,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 68317.0,
    "ComponentsMass": 12658.0,
    "Dimensions": {
      "Length": 24.0,
      "Width": 24.0,
      "Height": 5.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 3150.0
        },
        "Parts": {
          "wing_right": 300.0,
          "wing_right_debris": 1600.0,
          "wing_flap_right": 50.0,
          "small_wing_left": 150.0,
          "small_wing_flap_left": 150.0,
          "small_wing_right": 150.0,
          "small_wing_flap_right": 150.0,
          "geo_tail": 1900.0,
          "thrust_vector_flap_a": 50.0,
          "thrust_vector_flap_b": 50.0,
          "thrust_vector_flap_c": 50.0,
          "tail_wing_debris": 1600.0,
          "nacelle_left": 200.0,
          "nacelle_right": 200.0,
          "nose": 3150.0,
          "canopy_copilot": 200.0,
          "canopy_pilot": 200.0,
          "wing_left": 300.0,
          "wing_left_debris": 1600.0,
          "wing_flap_left": 50.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_s5": 7000.0
        },
        "Retro": {
          "retro_thruster_left": 8250.0,
          "retro_thruster_right": 8250.0
        },
        "Maneuvering": {
          "thruster_top_front_right": 5000.0,
          "thruster_top_front_left": 5000.0,
          "thruster_top_back_right": 5000.0,
          "thruster_top_back_left": 5000.0,
          "thruster_bottom_front_right": 5000.0,
          "thruster_bottom_front_left": 5000.0,
          "thruster_bottom_back_right": 5000.0,
          "thruster_bottom_back_left": 5000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 215.0,
      "MaxSpeed": 1125.0,
      "Pitch": 52.0,
      "Yaw": 40.0,
      "Roll": 140.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8000000.0,
        "Retro": 2599374.0,
        "Vtol": 0.0,
        "Maneuvering": 10600000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 9.8,
        "Retro": 3.2,
        "Strafe": 6.5,
        "Up": 6.9,
        "Down": 4.0,
        "CheckDate": "2025-02-12"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 465.0,
          "BoostSpeedBackward": 240.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 16000000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 1000.0,
        "Retro": 324.922,
        "Vtol": 0.0,
        "Maneuvering": 1325.0
      },
      "IntakeToMainFuelRatio": 3.6,
      "TimeForIntakesToFillTank": 444444.44
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 6494.0,
        "SCMActive": 7789.0,
        "NAV": 14997.0
      },
      "Infrared": {
        "Start": 7427.0
      },
      "CrossSection": {
        "Front": 2347.0,
        "Side": 8404.0,
        "Top": 9085.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 5190.0,
      "PilotBurstDPS": 4714.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 27637.0
    },
    "Insurance": {
      "StandardClaimTime": 10.17,
      "ExpeditedClaimTime": 2.55,
      "ExpeditedCost": 5050.0
    },
    "Dimensions2": {
      "Length": 24.0,
      "Width": 19.0,
      "Height": 6.5
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7CM_Mk2_Heartseeker",
    "Name": "Anvil F7C-M Hornet Heartseeker Mk II",
    "Description": "When the F7C-M Super Hornet got upgraded to the Mk II, there was no doubt in the Anvil Aerospace’s mind that they would be giving the very special Heartseeker edition the same treatment. With its robust weapon package designed for pilots whose true love is the thrill of a harrowing dogfight, the limited-edition F7C-M Heartseeker Mk II is set to become the favorite ship for an all-new generation of true combat die-hards.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.29,
      "PersonalInventory": 0.0
    },
    "Crew": 2,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 68317.0,
    "ComponentsMass": 12284.0,
    "Dimensions": {
      "Length": 24.0,
      "Width": 24.0,
      "Height": 5.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 3150.0
        },
        "Parts": {
          "wing_right": 300.0,
          "wing_right_debris": 1600.0,
          "wing_flap_right": 50.0,
          "small_wing_left": 150.0,
          "small_wing_flap_left": 150.0,
          "small_wing_right": 150.0,
          "small_wing_flap_right": 150.0,
          "geo_tail": 1900.0,
          "thrust_vector_flap_a": 50.0,
          "thrust_vector_flap_b": 50.0,
          "thrust_vector_flap_c": 50.0,
          "tail_wing_debris": 1600.0,
          "nacelle_left": 200.0,
          "nacelle_right": 200.0,
          "nose": 3150.0,
          "canopy_copilot": 200.0,
          "canopy_pilot": 200.0,
          "wing_left": 300.0,
          "wing_left_debris": 1600.0,
          "wing_flap_left": 50.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_s5": 7000.0
        },
        "Retro": {
          "retro_thruster_left": 8250.0,
          "retro_thruster_right": 8250.0
        },
        "Maneuvering": {
          "thruster_top_front_right": 5000.0,
          "thruster_top_front_left": 5000.0,
          "thruster_top_back_right": 5000.0,
          "thruster_top_back_left": 5000.0,
          "thruster_bottom_front_right": 5000.0,
          "thruster_bottom_front_left": 5000.0,
          "thruster_bottom_back_right": 5000.0,
          "thruster_bottom_back_left": 5000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 215.0,
      "MaxSpeed": 1125.0,
      "Pitch": 52.0,
      "Yaw": 40.0,
      "Roll": 140.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8000000.0,
        "Retro": 2599374.0,
        "Vtol": 0.0,
        "Maneuvering": 10600000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 9.8,
        "Retro": 3.2,
        "Strafe": 6.5,
        "Up": 6.9,
        "Down": 4.0,
        "CheckDate": "2025-02-12"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 465.0,
          "BoostSpeedBackward": 240.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 16000000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 1000.0,
        "Retro": 324.922,
        "Vtol": 0.0,
        "Maneuvering": 1325.0
      },
      "IntakeToMainFuelRatio": 3.6,
      "TimeForIntakesToFillTank": 444444.44
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 6432.0,
        "SCMActive": 7728.0,
        "NAV": 14935.0
      },
      "Infrared": {
        "Start": 8048.0
      },
      "CrossSection": {
        "Front": 2347.0,
        "Side": 8404.0,
        "Top": 9085.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 5190.0,
      "PilotBurstDPS": 5468.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 19029.0
    },
    "Insurance": {
      "StandardClaimTime": 11.17,
      "ExpeditedClaimTime": 2.8,
      "ExpeditedCost": 5640.0
    },
    "Dimensions2": {
      "Length": 24.0,
      "Width": 19.0,
      "Height": 6.5
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7CR",
    "Name": "Anvil F7C-R Hornet Tracker Mk I",
    "Description": "If the Ghost is made to hide, the Tracker is made to seek. The F7C-R Hornet Tracker Mk I boasts an advanced radar suite making it ideal for deep-space explorers who require depth and accuracy in their scan packages. Local militia and larger merc units will also repurpose Trackers to act as mobile C&C ships for their squadrons.",
    "Career": "Exploration",
    "Role": "Pathfinder",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 72097.0,
    "ComponentsMass": 4451.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 21.5,
      "Height": 6.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2650.0
        },
        "Parts": {
          "IntakeLeft": 400.0,
          "MissileBay_Left": 400.0,
          "EngineHousing": 400.0,
          "thrust_vector_flap_c": 50.0,
          "thrust_vector_flap_a": 50.0,
          "thrust_vector_flap_b": 50.0,
          "IntakeRight": 400.0,
          "MissileBay_Right": 400.0,
          "Nose": 2650.0,
          "Canopy": 200.0,
          "WingRightRear": 700.0,
          "WingRight_Debris": 1500.0,
          "LG_Door_Rear_R": 100.0,
          "WingLeftRear": 700.0,
          "WingLeft_Debris": 1500.0,
          "LG_Door_Rear_L": 100.0,
          "Tail": 1800.0,
          "Tail_Debris": 1500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_attach": 6700.0
        },
        "Retro": {
          "thruster_top_front_right": 4700.0,
          "thruster_top_front_left": 4700.0
        },
        "Maneuvering": {
          "thruster_top_back_right": 4700.0,
          "thruster_bottom_front_left": 4700.0,
          "thruster_bottom_back_left": 4700.0,
          "thruster_top_back_left": 4700.0,
          "thruster_bottom_back_right": 4700.0,
          "thruster_bottom_front_right": 4700.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 219.0,
      "MaxSpeed": 1142.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 5581000.0,
        "Retro": 2482000.0,
        "Vtol": 0.0,
        "Maneuvering": 9212000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.1,
        "Retro": 4.0,
        "Strafe": 7.6,
        "Up": 8.0,
        "Down": 4.6
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 477.0,
          "BoostSpeedBackward": 249.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 12000000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 7.5
      },
      "FuelUsagePerSecond": {
        "Main": 697.625,
        "Retro": 310.25,
        "Vtol": 0.0,
        "Maneuvering": 1151.5
      },
      "IntakeToMainFuelRatio": 5.16,
      "TimeForIntakesToFillTank": 333333.33
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5418.0,
        "SCMActive": 6430.0,
        "NAV": 13930.0
      },
      "Infrared": {
        "Start": 6280.0
      },
      "CrossSection": {
        "Front": 1893.0,
        "Side": 6778.0,
        "Top": 7328.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4480.0,
      "PilotBurstDPS": 1091.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 14162.0
    },
    "Insurance": {
      "StandardClaimTime": 8.1,
      "ExpeditedClaimTime": 2.7,
      "ExpeditedCost": 4367.0
    },
    "Buy": {
      "Astro Armada, Area 18": 3210480.0
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7CR_Mk2",
    "Name": "Anvil F7C-R Hornet Tracker Mk II",
    "Description": "When seeking the next great frontier, who better to trust than a next-generation pathfinder? The F7C-R Hornet Tracker Mk II boasts an overhauled radar suite ideal for deep-space explorers who require depth and accuracy in their scan packages.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.0
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 66117.0,
    "ComponentsMass": 5618.0,
    "Dimensions": {
      "Length": 22.2,
      "Width": 22.0,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2850.0,
          "nose": 2850.0,
          "tail": 1900.0
        },
        "Parts": {
          "wing_right": 200.0,
          "wing_right_debris": 1600.0,
          "wing_flap_right": 50.0,
          "small_wing_left": 100.0,
          "small_wing_flap_left": 50.0,
          "small_wing_right": 100.0,
          "small_wing_flap_right": 50.0,
          "canopy": 200.0,
          "thrust_vector_flap_a": 50.0,
          "thrust_vector_flap_b": 50.0,
          "thrust_vector_flap_c": 50.0,
          "tail_wing": 1.0,
          "tail_wing_debris": 400.0,
          "wing_left": 200.0,
          "wing_left_debris": 1600.0,
          "wing_left_debris_02": 200.0,
          "cap_spine": 250.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_s5": 7000.0
        },
        "Retro": {
          "retro_thruster_left": 8250.0,
          "retro_thruster_right": 8250.0
        },
        "Maneuvering": {
          "thruster_top_front_right": 5000.0,
          "thruster_top_front_left": 5000.0,
          "thruster_top_back_right": 5000.0,
          "thruster_top_back_left": 5000.0,
          "thruster_bottom_front_right": 5000.0,
          "thruster_bottom_front_left": 5000.0,
          "thruster_bottom_back_right": 5000.0,
          "thruster_bottom_back_left": 5000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8070928.0,
        "Retro": 2922927.0,
        "Vtol": 0.0,
        "Maneuvering": 11194608.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.8,
        "Retro": 3.9,
        "Strafe": 7.5,
        "Up": 7.9,
        "Down": 4.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 250.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 14400000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 1008.866,
        "Retro": 365.366,
        "Vtol": 0.0,
        "Maneuvering": 1399.326
      },
      "IntakeToMainFuelRatio": 3.57,
      "TimeForIntakesToFillTank": 400000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5655.0,
        "SCMActive": 6720.0,
        "NAV": 14167.0
      },
      "Infrared": {
        "Start": 7151.0
      },
      "CrossSection": {
        "Front": 2347.0,
        "Side": 8404.0,
        "Top": 9085.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 2532.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9121.0
    },
    "Insurance": {
      "StandardClaimTime": 9.33,
      "ExpeditedClaimTime": 2.33,
      "ExpeditedCost": 4070.0
    },
    "New Ship": "Anvil F7C-R Hornet Tracker Mk II",
    "Dimensions2": {
      "Length": 22.2,
      "Width": 15.0,
      "Height": 6.0
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7CS",
    "Name": "Anvil F7C-S Hornet Ghost Mk I",
    "Description": "Through a combination of low-emission drives, low-draw weapons, and Void Armor technology capable of diffusing scans, the F7C-S Hornet Ghost Mk I is built for the pilot who wants to keep a low profile. The Ghost is capable of slipping past the most ardent of observers to accomplish whatever goal you need to accomplish. Don't worry, we won't ask.",
    "Career": "Combat",
    "Role": "Stealth Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 71624.0,
    "ComponentsMass": 4376.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 21.5,
      "Height": 6.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.85,
        "Infrared": 0.85,
        "CrossSection": 0.85
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2550.0
        },
        "Parts": {
          "IntakeLeft": 400.0,
          "MissileBay_Left": 400.0,
          "EngineHousing": 400.0,
          "thrust_vector_flap_c": 50.0,
          "thrust_vector_flap_a": 50.0,
          "thrust_vector_flap_b": 50.0,
          "IntakeRight": 400.0,
          "MissileBay_Right": 400.0,
          "Nose": 2550.0,
          "Canopy": 200.0,
          "WingRightRear": 700.0,
          "WingRight_Debris": 1500.0,
          "LG_Door_Rear_R": 100.0,
          "WingLeftRear": 700.0,
          "WingLeft_Debris": 1500.0,
          "LG_Door_Rear_L": 100.0,
          "Tail": 1800.0,
          "Tail_Debris": 1500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_attach": 6700.0
        },
        "Retro": {
          "thruster_top_front_right": 4700.0,
          "thruster_top_front_left": 4700.0
        },
        "Maneuvering": {
          "thruster_top_back_right": 4700.0,
          "thruster_bottom_front_left": 4700.0,
          "thruster_bottom_back_left": 4700.0,
          "thruster_top_back_left": 4700.0,
          "thruster_bottom_back_right": 4700.0,
          "thruster_bottom_front_right": 4700.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 219.0,
      "MaxSpeed": 1142.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 5581000.0,
        "Retro": 2482000.0,
        "Vtol": 0.0,
        "Maneuvering": 9212000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.1,
        "Retro": 4.0,
        "Strafe": 7.8,
        "Up": 8.0,
        "Down": 4.8
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 477.0,
          "BoostSpeedBackward": 249.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 12000000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 7.5
      },
      "FuelUsagePerSecond": {
        "Main": 697.625,
        "Retro": 310.25,
        "Vtol": 0.0,
        "Maneuvering": 1151.5
      },
      "IntakeToMainFuelRatio": 5.16,
      "TimeForIntakesToFillTank": 333333.33
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 4075.0,
        "SCMActive": 4837.0,
        "NAV": 10479.0
      },
      "Infrared": {
        "Start": 4724.0
      },
      "CrossSection": {
        "Front": 1357.0,
        "Side": 4860.0,
        "Top": 5254.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 1094.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 14075.0
    },
    "Insurance": {
      "StandardClaimTime": 9.72,
      "ExpeditedClaimTime": 3.24,
      "ExpeditedCost": 4905.0
    },
    "Buy": {
      "Astro Armada, Area 18": 3307500.0
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7CS_Mk2",
    "Name": "Anvil F7C-S Hornet Ghost Mk II",
    "Description": "When approaching the Mk II redesign of the F7C-S Hornet Ghost, the engineers at Anvil Aerospace wanted to preserve what pilots loved about the low-emission drives, low-draw weapons, and Void Armor technology of the original, but refine them to an even higher level of performance for a whole new era of stealth operations.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.0
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 66117.0,
    "ComponentsMass": 4736.0,
    "Dimensions": {
      "Length": 22.2,
      "Width": 22.0,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.72,
        "Infrared": 0.72,
        "CrossSection": 0.72
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2750.0,
          "nose": 2750.0,
          "tail": 1900.0
        },
        "Parts": {
          "wing_right": 200.0,
          "wing_right_debris": 1600.0,
          "wing_flap_right": 50.0,
          "small_wing_left": 100.0,
          "small_wing_flap_left": 50.0,
          "small_wing_right": 100.0,
          "small_wing_flap_right": 50.0,
          "canopy": 200.0,
          "thrust_vector_flap_a": 50.0,
          "thrust_vector_flap_b": 50.0,
          "thrust_vector_flap_c": 50.0,
          "tail_wing": 1.0,
          "tail_wing_debris": 400.0,
          "wing_left": 200.0,
          "wing_left_debris": 1600.0,
          "wing_left_debris_02": 200.0,
          "cap_spine": 250.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_s5": 7000.0
        },
        "Retro": {
          "retro_thruster_left": 8250.0,
          "retro_thruster_right": 8250.0
        },
        "Maneuvering": {
          "thruster_top_front_right": 5000.0,
          "thruster_top_front_left": 5000.0,
          "thruster_top_back_right": 5000.0,
          "thruster_top_back_left": 5000.0,
          "thruster_bottom_front_right": 5000.0,
          "thruster_bottom_front_left": 5000.0,
          "thruster_bottom_back_right": 5000.0,
          "thruster_bottom_back_left": 5000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8069988.0,
        "Retro": 2923778.0,
        "Vtol": 0.0,
        "Maneuvering": 11189216.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.8,
        "Retro": 3.9,
        "Strafe": 7.5,
        "Up": 7.9,
        "Down": 4.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 250.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 14400000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 1008.748,
        "Retro": 365.472,
        "Vtol": 0.0,
        "Maneuvering": 1398.652
      },
      "IntakeToMainFuelRatio": 3.57,
      "TimeForIntakesToFillTank": 400000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3603.0,
        "SCMActive": 4282.0,
        "NAV": 9027.0
      },
      "Infrared": {
        "Start": 4499.0
      },
      "CrossSection": {
        "Front": 1495.0,
        "Side": 5355.0,
        "Top": 5789.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 2532.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9121.0
    },
    "Insurance": {
      "StandardClaimTime": 9.5,
      "ExpeditedClaimTime": 2.375,
      "ExpeditedCost": 4190.0
    },
    "New Ship": "Anvil F7C-S Hornet Ghost Mk II",
    "Dimensions2": {
      "Length": 22.2,
      "Width": 15.0,
      "Height": 6.0
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7C_Mk2",
    "Name": "Anvil F7C Hornet Mk II",
    "Description": "Straight from the front lines to your personal hangar, the re-engineered F7C Hornet Mk II takes the latest battlefield upgrades and makes them available to private pilots across the empire. The fighter features an improved power system utilized by an overhauled weapon and missile package",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 2.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.0
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 62117.0,
    "ComponentsMass": 9518.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 21.0,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2850.0,
          "nose": 2850.0,
          "tail": 1900.0
        },
        "Parts": {
          "wing_right": 200.0,
          "wing_right_debris": 1600.0,
          "wing_flap_right": 50.0,
          "small_wing_left": 100.0,
          "small_wing_flap_left": 50.0,
          "small_wing_right": 100.0,
          "small_wing_flap_right": 50.0,
          "canopy": 200.0,
          "thrust_vector_flap_a": 50.0,
          "thrust_vector_flap_b": 50.0,
          "thrust_vector_flap_c": 50.0,
          "tail_wing": 1.0,
          "tail_wing_debris": 400.0,
          "wing_left": 200.0,
          "wing_left_debris": 1600.0,
          "wing_left_debris_02": 200.0,
          "cap_spine": 250.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_s5": 7000.0
        },
        "Retro": {
          "retro_thruster_left": 8250.0,
          "retro_thruster_right": 8250.0
        },
        "Maneuvering": {
          "thruster_top_front_right": 5000.0,
          "thruster_top_front_left": 5000.0,
          "thruster_top_back_right": 5000.0,
          "thruster_top_back_left": 5000.0,
          "thruster_bottom_front_right": 5000.0,
          "thruster_bottom_front_left": 5000.0,
          "thruster_bottom_back_right": 5000.0,
          "thruster_bottom_back_left": 5000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8646000.0,
        "Retro": 3128000.0,
        "Vtol": 0.0,
        "Maneuvering": 11560000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.0,
        "Retro": 3.9,
        "Strafe": 7.6,
        "Up": 8.0,
        "Down": 4.6,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 250.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 16000000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 1080.75,
        "Retro": 391.0,
        "Vtol": 0.0,
        "Maneuvering": 1445.0
      },
      "IntakeToMainFuelRatio": 3.33,
      "TimeForIntakesToFillTank": 444444.44
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5655.0,
        "SCMActive": 6720.0,
        "NAV": 14167.0
      },
      "Infrared": {
        "Start": 6907.0
      },
      "CrossSection": {
        "Front": 2347.0,
        "Side": 8404.0,
        "Top": 9085.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 2532.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9121.0
    },
    "Insurance": {
      "StandardClaimTime": 11.34,
      "ExpeditedClaimTime": 3.56,
      "ExpeditedCost": 5104.0
    },
    "New Ship": "Anvil F7C Hornet Mk II",
    "Dimensions2": {
      "Length": 22.5,
      "Width": 15.0,
      "Height": 6.0
    },
    "Buy": {
      "Astro Armada, Area 18": 4895100.0
    }
  },
  {
    "ClassName": "ANVL_Hornet_F7C_Wildfire",
    "Name": "Anvil F7C Hornet Wildfire Mk I",
    "Description": "Created as part of the ‘Masters of Flight’ series in conjunction with the flight-sim Arena Commander, the Wildfire pays tribute to famed pilot Aria Reilly for her distinguished service with the legendary Squadron 42. This F7C Hornet Mk I comes equipped with her own personally selected loadout preferences and a custom special edition livery honoring her iconic ship.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 2.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 72032.0,
    "ComponentsMass": 5298.0,
    "Dimensions": {
      "Length": 22.5,
      "Width": 21.5,
      "Height": 6.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.13,
        "Infrared": 1.13,
        "CrossSection": 1.13
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2650.0
        },
        "Parts": {
          "IntakeLeft": 400.0,
          "MissileBay_Left": 400.0,
          "EngineHousing": 400.0,
          "thrust_vector_flap_c": 50.0,
          "thrust_vector_flap_a": 50.0,
          "thrust_vector_flap_b": 50.0,
          "IntakeRight": 400.0,
          "MissileBay_Right": 400.0,
          "Nose": 2650.0,
          "Canopy": 200.0,
          "WingRightRear": 700.0,
          "WingRight_Debris": 1500.0,
          "LG_Door_Rear_R": 100.0,
          "WingLeftRear": 700.0,
          "WingLeft_Debris": 1500.0,
          "LG_Door_Rear_L": 100.0,
          "Tail": 1800.0,
          "Tail_Debris": 1500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_attach": 6700.0
        },
        "Retro": {
          "thruster_top_front_right": 4700.0,
          "thruster_top_front_left": 4700.0
        },
        "Maneuvering": {
          "thruster_top_back_right": 4700.0,
          "thruster_bottom_front_left": 4700.0,
          "thruster_bottom_back_left": 4700.0,
          "thruster_top_back_left": 4700.0,
          "thruster_bottom_back_right": 4700.0,
          "thruster_bottom_front_right": 4700.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 5581000.0,
        "Retro": 2482000.0,
        "Vtol": 0.0,
        "Maneuvering": 9212000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.3,
        "Retro": 4.0,
        "Strafe": 7.9,
        "Up": 8.2,
        "Down": 7.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 250.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 12000000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 7.5
      },
      "FuelUsagePerSecond": {
        "Main": 697.625,
        "Retro": 310.25,
        "Vtol": 0.0,
        "Maneuvering": 1151.5
      },
      "IntakeToMainFuelRatio": 5.16,
      "TimeForIntakesToFillTank": 333333.33
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5418.0,
        "SCMActive": 6430.0,
        "NAV": 13930.0
      },
      "Infrared": {
        "Start": 6280.0
      },
      "CrossSection": {
        "Front": 1893.0,
        "Side": 6778.0,
        "Top": 7328.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3000.0,
      "PilotBurstDPS": 2177.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 14162.0
    },
    "Insurance": {
      "StandardClaimTime": 6.75,
      "ExpeditedClaimTime": 2.25,
      "ExpeditedCost": 3375.0
    },
    "Buy": {
      "Astro Armada, Area 18": 4630500.0
    }
  },
  {
    "ClassName": "ANVL_Hurricane",
    "Name": "Anvil Hurricane",
    "Description": "Big things do come in small packages: the Hurricane is a fighting spacecraft that packs a deadly punch into a slight fuselage. The spacecraft compensates for its lack of creature comforts with its powerful armament: six guns capable of blasting their way through nearly anything. Hurricane pilots have yet to find an enemy shield they can't knock down.",
    "Career": "Combat",
    "Role": "Heavy Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 2.58,
      "PersonalInventory": 1.29
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 86745.0,
    "ComponentsMass": 7932.0,
    "Dimensions": {
      "Length": 22.0,
      "Width": 18.2,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.46,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 7800.0,
          "body": 7000.0
        },
        "Parts": {
          "canopy_exterior": 250.0,
          "Canopy_interior": 250.0,
          "wing_bottom_left": 500.0,
          "wing_bottom_left_flap": 1.0,
          "stabilizer_left": 50.0,
          "stabilizer_left_flap": 25.0,
          "wing_top_left": 800.0,
          "wing_top_left_flap": 25.0,
          "wing_bottom_right": 800.0,
          "wing_bottom_right_flap": 25.0,
          "wing_top_right": 600.0,
          "wing_top_right_flap": 25.0,
          "stabilizer_right": 50.0,
          "stabilizer_right_flap": 25.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 9760.0,
          "thruster_main_left": 9760.0
        },
        "Retro": {
          "thruster_retro_left": 8900.0,
          "thruster_retro_right": 8900.0
        },
        "Maneuvering": {
          "thruster_mav_front_top_right": 8150.0,
          "thruster_mav_front_top_left": 8150.0,
          "thruster_mav_front_bot_right": 8150.0,
          "thruster_mav_front_bot_left": 8150.0,
          "thruster_mav_rear_top_left": 8150.0,
          "thruster_mav_rear_top_right": 8150.0,
          "thruster_mav_rear_bot_right": 8150.0,
          "thruster_mav_rear_bot_left": 8150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 214.0,
      "MaxSpeed": 1125.0,
      "Pitch": 45.0,
      "Yaw": 35.0,
      "Roll": 130.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 9200000.0,
        "Retro": 3340000.0,
        "Vtol": 0.0,
        "Maneuvering": 10980000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.0,
        "Retro": 3.6,
        "Strafe": 7.5,
        "Up": 7.5,
        "Down": 4.4,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 225.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.33,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.33,
            "Y": 1.4,
            "Z": 1.34
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 13500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 1150.0,
        "Retro": 417.5,
        "Vtol": 0.0,
        "Maneuvering": 1372.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 7763.0,
        "SCMActive": 9796.0,
        "NAV": 15296.0
      },
      "Infrared": {
        "Start": 8736.0
      },
      "CrossSection": {
        "Front": 3420.0,
        "Side": 8361.0,
        "Top": 12668.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4740.0,
      "PilotBurstDPS": 1636.0,
      "TurretsBurstDPS": 2182.0,
      "TotalMissilesDmg": 9515.0
    },
    "Insurance": {
      "StandardClaimTime": 8.55,
      "ExpeditedClaimTime": 2.85,
      "ExpeditedCost": 4148.0
    },
    "Buy": {
      "Astro Armada, Area 18": 5556600.0
    }
  },
  {
    "ClassName": "ANVL_Lightning_F8C",
    "Name": "Anvil F8C Lightning",
    "Description": "Few vehicles employed by the proud men and women who serve in our Empire's Navy inspire the awe of the legendary F8 Lightning. A force to be reckoned with, the F8 has secured Humanity's freedom from numerous threats at home and abroad countless times. Now, that same next generation space superiority fighter is available to become a part of your personal fleet with the Anvil F8C civilian variant.",
    "Career": "Combat",
    "Role": "Heavy Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 153775.0,
    "ComponentsMass": 10224.0,
    "Dimensions": {
      "Length": 26.0,
      "Width": 25.0,
      "Height": 8.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.03,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 9200.0
        },
        "Parts": {
          "wing_base_left": 6000.0,
          "rear_wing_left": 2000.0,
          "rear_wing_flap_left": 250.0,
          "wing_left": 500.0,
          "mini_wing_left": 250.0,
          "weapon_mount_wing_b_S3_left": 200.0,
          "weapon_mount_wing_a_S4_left": 200.0,
          "fin_bot_left": 500.0,
          "fin_top_left": 500.0,
          "top_wing_flap_left": 250.0,
          "engine_center": 200.0,
          "wing_base_right": 6000.0,
          "rear_wing_right": 2000.0,
          "rear_wing_flap_right": 250.0,
          "wing_right": 500.0,
          "mini_wing_right": 250.0,
          "weapon_mount_wing_b_S3_right": 200.0,
          "weapon_mount_wing_a_S4_right": 200.0,
          "fin_top_right": 500.0,
          "fin_bot_right": 500.0,
          "top_wing_flap_right": 250.0,
          "tail_right": 250.0,
          "tail_left": 250.0,
          "nose": 7650.0,
          "canopy": 350.0,
          "front_wing_left": 500.0,
          "front_wing_right": 500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 10500.0,
          "engine_mid": 10500.0,
          "engine_right": 10500.0
        },
        "Retro": {
          "thruster_retro_left": 9800.0,
          "thruster_retro_right": 9800.0
        },
        "Maneuvering": {
          "thruster_bottomCL": 9150.0,
          "thruster_topCL": 9150.0,
          "thruster_bottomCR": 9150.0,
          "thruster_topCR": 9150.0,
          "thruster_topRR": 9150.0,
          "thruster_topRL": 9150.0,
          "thruster_bottomFL": 9150.0,
          "thruster_bottomFR": 9150.0,
          "thruster_bottomRL": 9150.0,
          "thruster_bottomRR": 9150.0,
          "thruster_topFL": 9150.0,
          "thruster_topFR": 9150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 207.0,
      "MaxSpeed": 1075.0,
      "Pitch": 35.0,
      "Yaw": 31.0,
      "Roll": 115.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 13530000.0,
        "Retro": 5580000.0,
        "Vtol": 0.0,
        "Maneuvering": 22836000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 8.5,
        "Retro": 3.5,
        "Strafe": 6.5,
        "Up": 5.9,
        "Down": 3.5,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 445.0,
          "BoostSpeedBackward": 218.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 37200000.0,
      "FuelIntakeRate": 36.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 3.75,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1691.25,
        "Retro": 697.5,
        "Vtol": 0.0,
        "Maneuvering": 2854.5
      },
      "IntakeToMainFuelRatio": 2.13,
      "TimeForIntakesToFillTank": 1033333.33
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 6848.0,
        "SCMActive": 9316.0,
        "NAV": 14373.0
      },
      "Infrared": {
        "Start": 9296.0
      },
      "CrossSection": {
        "Front": 2654.0,
        "Side": 10173.0,
        "Top": 11058.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 7020.0,
      "PilotBurstDPS": 3266.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 19029.0
    },
    "Insurance": {
      "StandardClaimTime": 16.03125,
      "ExpeditedClaimTime": 5.34375,
      "ExpeditedCost": 8020.0
    },
    "New Ship": "Anvil F8C Lightning"
  },
  {
    "ClassName": "ANVL_Spartan",
    "Name": "Anvil Spartan",
    "Description": "Built on Anvil’s robust Atlas Platform, the same chassis used for their devastating Ballista air defense system, the Spartan is a fully armored transport outfitted with eight jump seats. The Spartan’s rugged frame makes it perfect for all kinds of terrain, and its remote Gatling turret helps clear the area for easier deployment.",
    "Career": "Ground",
    "Role": "Ground",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.05,
      "PersonalInventory": 1.06
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 80016.0,
    "ComponentsMass": 627.0,
    "Dimensions": {
      "Length": 17.0,
      "Width": 7.0,
      "Height": 5.5
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.46,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.55,
        "Infrared": 0.85,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 10000.0,
          "body": 10000.0
        },
        "Parts": {
          "WheelFrontLeft01DmgGroup": 1.0,
          "hardpoint_wheel_left01": 1700.0,
          "hardpoint_wheel_left03": 1700.0,
          "hardpoint_wheel_left04": 1700.0,
          "hardpoint_wheel_left02": 1700.0,
          "hardpoint_wheel_right01": 1700.0,
          "hardpoint_wheel_right02": 1700.0,
          "hardpoint_wheel_right03": 1700.0,
          "hardpoint_wheel_right04": 1700.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 100.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 115.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 10.0,
        "SCMActive": 505.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 969.0
      },
      "CrossSection": {
        "Front": 1229.0,
        "Side": 1927.0,
        "Top": 2394.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1348.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 677.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 6.19,
      "ExpeditedClaimTime": 2.06,
      "ExpeditedCost": 2475.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "Astro Armada, Area 18": 846720.0,
      "New Deal, Lorville": 846720.0
    }
  },
  {
    "ClassName": "ANVL_Terrapin",
    "Name": "Anvil Terrapin",
    "Description": "Presenting the Anvil Aerospace U4A-3 Terrapin-class Scanning/Exploration Ship. The Terrapin was developed near the end of the 28th century to serve as the first ship in the Empire’s defensive restructuring of the Navy. The Terrapin’s watchword is protection, with extensive shield systems and armor layers designed to provide the maximum possible defense for pilot and crew. While it lacks the maneuverability of a dedicated fighter, it does maintain an advanced, hard-hitting array of weapons intended to keep the most fearsome Vanduul raider at bay.",
    "Career": "Support",
    "Role": "Pathfinder",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.85
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 149850.0,
    "ComponentsMass": 20330.0,
    "Dimensions": {
      "Length": 19.5,
      "Width": 14.5,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.46,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 20000.0,
          "nose": 15000.0
        },
        "Parts": {
          "Front_left_leg": 10000.0,
          "front_main_thruster_base_left": 1000.0,
          "terrapin_thruster_main_front_left": 10000.0,
          "Body_Bottom": 15000.0,
          "fuelport_inflight_housing": 1.0,
          "tail": 20000.0,
          "Leg_rear_right": 10000.0,
          "rear_Main_thruster_base_right": 1000.0,
          "rear_right_Main_Thruster_wing_top": 3000.0,
          "rear_right_Main_Thruster_wing_bot": 3000.0,
          "terrapin_thruster_main_rear_right": 10000.0,
          "Leg_rear_Left": 10000.0,
          "rear_main_thruster_base_left": 1000.0,
          "rear_left_Main_Thruster_wing_top": 3000.0,
          "rear_left_Main_Thruster_wing_bot": 3000.0,
          "terrapin_thruster_main_rear_left": 10000.0,
          "Flap_Top_right": 1000.0,
          "Flap_Top_left": 1000.0,
          "tail_top_plate": 200.0,
          "Front_right_leg": 10000.0,
          "front_main_thruster_base_right": 1000.0,
          "terrapin_thruster_main_front_right": 10000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_front_left": 6000.0,
          "thruster_main_rear_right": 6000.0,
          "thruster_main_rear_left": 6000.0,
          "thruster_main_front_right": 6000.0
        },
        "Retro": {
          "thruster_retro_left": 5240.0,
          "thruster_retro_right": 5240.0
        },
        "Maneuvering": {
          "thruster_top_left": 6000.0,
          "thruster_top_right": 6000.0,
          "thruster_bottom_left": 6000.0,
          "thruster_bottom_right": 6000.0,
          "thruster_rear_top_right": 6000.0,
          "thruster_rear_top_left": 6000.0,
          "thruster_rear_right": 4800.0,
          "thruster_rear_left": 4800.0,
          "thruster_rear_bottom_right": 6000.0,
          "thruster_rear_bottom_left": 6000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1150.0,
      "Pitch": 35.0,
      "Yaw": 35.0,
      "Roll": 120.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4240000.0,
        "Retro": 4173886.0,
        "Vtol": 0.0,
        "Maneuvering": 21540048.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 9.2,
        "Retro": 2.4,
        "Strafe": 3.0,
        "Up": 3.4,
        "Down": 3.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 320.0,
          "BoostSpeedBackward": 240.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.2,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.2,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.2,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 104500000.0,
      "FuelIntakeRate": 18.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 530.0,
        "Retro": 521.736,
        "Vtol": 0.0,
        "Maneuvering": 2692.506
      },
      "IntakeToMainFuelRatio": 3.4,
      "TimeForIntakesToFillTank": 5805555.56
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 7842.0,
        "SCMActive": 10546.0,
        "NAV": 15367.0
      },
      "Infrared": {
        "Start": 5635.0
      },
      "CrossSection": {
        "Front": 3066.0,
        "Side": 7562.0,
        "Top": 10219.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 8860.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 7.875,
      "ExpeditedClaimTime": 2.625,
      "ExpeditedCost": 3940.0
    },
    "Buy": {
      "Astro Armada, Area 18": 5433120.0
    }
  },
  {
    "ClassName": "ANVL_Terrapin_Medic",
    "Name": "Anvil Terrapin Medic",
    "Description": "Maintaining the famed toughness of the original Terrapin, Anvil designers have crafted an optimal vehicle for rescue operations with the Terrapin Medic. Featuring a tier 2 medical bed, the Terrapin Medic can extract injured parties from even the most hazardous situations thanks to its powerful armor and shielding.",
    "Career": "Support",
    "Role": "Medical",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.85
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 149850.0,
    "ComponentsMass": 20120.0,
    "Dimensions": {
      "Length": 20.0,
      "Width": 15.6,
      "Height": 7
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.46,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 20000.0,
          "nose": 15000.0
        },
        "Parts": {
          "Front_left_leg": 10000.0,
          "front_main_thruster_base_left": 1000.0,
          "terrapin_thruster_main_front_left": 10000.0,
          "Body_Bottom": 15000.0,
          "fuelport_inflight_housing": 1.0,
          "tail": 20000.0,
          "Leg_rear_right": 10000.0,
          "rear_Main_thruster_base_right": 1000.0,
          "rear_right_Main_Thruster_wing_top": 3000.0,
          "rear_right_Main_Thruster_wing_bot": 3000.0,
          "terrapin_thruster_main_rear_right": 10000.0,
          "Leg_rear_Left": 10000.0,
          "rear_main_thruster_base_left": 1000.0,
          "rear_left_Main_Thruster_wing_top": 3000.0,
          "rear_left_Main_Thruster_wing_bot": 3000.0,
          "terrapin_thruster_main_rear_left": 10000.0,
          "Flap_Top_right": 1000.0,
          "Flap_Top_left": 1000.0,
          "tail_top_plate": 200.0,
          "Front_right_leg": 10000.0,
          "front_main_thruster_base_right": 1000.0,
          "terrapin_thruster_main_front_right": 10000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_front_left": 6000.0,
          "thruster_main_rear_right": 6000.0,
          "thruster_main_rear_left": 6000.0,
          "thruster_main_front_right": 6000.0
        },
        "Retro": {
          "thruster_retro_left": 5240.0,
          "thruster_retro_right": 5240.0
        },
        "Maneuvering": {
          "thruster_top_left": 6000.0,
          "thruster_top_right": 6000.0,
          "thruster_bottom_left": 6000.0,
          "thruster_bottom_right": 6000.0,
          "thruster_rear_top_right": 6000.0,
          "thruster_rear_top_left": 6000.0,
          "thruster_rear_right": 4800.0,
          "thruster_rear_left": 4800.0,
          "thruster_rear_bottom_right": 6000.0,
          "thruster_rear_bottom_left": 6000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1150.0,
      "Pitch": 35.0,
      "Yaw": 35.0,
      "Roll": 120.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4240000.0,
        "Retro": 4173886.0,
        "Vtol": 0.0,
        "Maneuvering": 21540048.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 9.2,
        "Retro": 2.5,
        "Strafe": 3.0,
        "Up": 3.4,
        "Down": 3.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 320.0,
          "BoostSpeedBackward": 240.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.2,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.2,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.2,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 104500000.0,
      "FuelIntakeRate": 18.0,
      "QuantumFuelCapacity": 4000000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 530.0,
        "Retro": 521.736,
        "Vtol": 0.0,
        "Maneuvering": 2692.506
      },
      "IntakeToMainFuelRatio": 3.4,
      "TimeForIntakesToFillTank": 5805555.56
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 7842.0,
        "SCMActive": 10546.0,
        "NAV": 15366.0
      },
      "Infrared": {
        "Start": 5840.0
      },
      "CrossSection": {
        "Front": 3066.0,
        "Side": 7562.0,
        "Top": 10219.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 8860.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 9.5,
      "ExpeditedClaimTime": 2.375,
      "ExpeditedCost": 4220.0
    },
    "New Ship": "Anvil Terrapin Medic",
    "Dimensions2": {
      "Length": 20.0,
      "Width": 16.4,
      "Height": 7
    },
    "Buy": {
      "Astro Armada - Area 18": 5704770.0
    }
  },
  {
    "ClassName": "ANVL_Valkyrie",
    "Name": "Anvil Valkyrie",
    "Description": "The Valkyrie ups the ante on troop transport. Designed to carry up to twenty soldiers, as well as vehicles, to the most hostile locations, this conflict-ready mil-spec craft is a formidable force, both offensively and defensively. Built with military and private defense contractors in mind, the Valkyrie is one of the most efficient and effective personnel transports in its class.",
    "Career": "Combat",
    "Role": "Drop Ship",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 90.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 4.5,
      "PersonalInventory": 4.63
    },
    "Crew": 1,
    "WeaponCrew": 6,
    "OperationsCrew": 0,
    "Mass": 597246.06,
    "ComponentsMass": 35320.0,
    "Dimensions": {
      "Length": 48.0,
      "Width": 38.0,
      "Height": 12.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.38,
        "Energy": 0.97,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.07,
        "Infrared": 1.07,
        "CrossSection": 1.07
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 10000.0,
          "Tail": 10000.0
        },
        "Parts": {
          "Wing_Left": 4500.0,
          "Decal_Wing_Left": 200.0,
          "Wing_Right": 4500.0,
          "Decal_Wing_Right": 200.0,
          "Wing_RR": 2000.0,
          "Wing_RL": 2000.0,
          "Engine_RR": 150.0,
          "Engine_RR_Split": 2500.0,
          "Lights_Engine_RR_Split": 1.0,
          "Engine_RL": 150.0,
          "Engine_RL_Split": 2500.0,
          "Tail_Shell": 1.0,
          "Engine_FL": 150.0,
          "Engine_FL_Split": 2500.0,
          "Engine_FR": 150.0,
          "Engine_FR_Split": 2500.0,
          "Lights_Nose": 1.0,
          "Nose_Shell": 50.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_rear_right": 17600.0,
          "thruster_main_rear_left": 17600.0,
          "thruster_aux_left": 17600.0,
          "thruster_aux_right": 17600.0,
          "thruster_main_front_left": 17600.0,
          "thruster_main_front_right": 17600.0
        },
        "Retro": {
          "thruster_retro_left": 16800.0,
          "thruster_retro_right": 16800.0
        },
        "Maneuvering": {
          "thruster_bottom_front_right": 16250.0,
          "thruster_bottom_front_left": 16250.0,
          "thruster_side_front_right": 16250.0,
          "thruster_side_front_left": 16250.0,
          "thruster_top_front_left": 16250.0,
          "thruster_top_front_right": 16250.0,
          "thruster_bottom_rear_left": 16250.0,
          "thruster_bottom_rear_right": 16250.0,
          "thruster_side_rear_right": 16250.0,
          "thruster_side_rear_left": 16250.0,
          "thruster_top_rear_left": 16250.0,
          "thruster_top_rear_right": 16250.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 207.0,
      "MaxSpeed": 1110.0,
      "Pitch": 34.0,
      "Yaw": 29.0,
      "Roll": 98.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 28361686.0,
        "Retro": 10865956.0,
        "Vtol": 0.0,
        "Maneuvering": 77361400.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 4.5,
        "Retro": 1.7,
        "Strafe": 3.9,
        "Up": 2.1,
        "Down": 2.1
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 431.0,
          "BoostSpeedBackward": 245.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.2,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.2,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.2,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 94500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 7.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 3545.211,
        "Retro": 1358.244,
        "Vtol": 0.0,
        "Maneuvering": 9670.174
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 22901.0,
        "SCMActive": 29911.0,
        "NAV": 39464.0
      },
      "Infrared": {
        "Start": 18287.0
      },
      "CrossSection": {
        "Front": 6349.0,
        "Side": 20065.0,
        "Top": 25398.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 18960.0,
      "PilotBurstDPS": 1091.0,
      "TurretsBurstDPS": 4221.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 19.82,
      "ExpeditedClaimTime": 4.98,
      "ExpeditedCost": 11910.0
    },
    "Buy": {
      "Astro Armada, Area 18": 19845000.0
    }
  },
  {
    "ClassName": "ARGO_CSV_Cargo",
    "Name": "Argo CSV-SM",
    "Description": "You got your plot of land, you’ve got the right construction materials, and now you’re ready to watch your dreams take shape. The ideal companion to the CSV-FM, the CSV Supply Model provides additional storage for all the resources required to build your next settlement.",
    "Career": "Ground",
    "Role": "Ground",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 4.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.73,
      "PersonalInventory": 0.73
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 3754.6,
    "ComponentsMass": 163.0,
    "Dimensions": {
      "Length": 5.44,
      "Width": 4.13,
      "Height": 2.81
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 0.9,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 3500.0
        },
        "Parts": {
          "front": 2500.0,
          "front_barbreakbottom_right": 250.0,
          "front_panelbreak_bumper_left": 250.0,
          "front_panelbreak_bumper_right": 250.0,
          "front_barbreakbottom_left": 250.0,
          "AAsus_wheel_RR": 2000.0,
          "AAsus_wheel_RL": 2000.0,
          "wheel_rl_mudguard": 150.0,
          "wheel_rr_mudguard": 150.0,
          "rear_panelbreak_left": 250.0,
          "body_panelbreak_right": 250.0,
          "AAsus_wheel_FL": 2000.0,
          "AAsus_wheel_FR": 2000.0,
          "wheel_fl_mudguard": 150.0,
          "wheel_fr_mudguard": 150.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 50.0,
      "VMaxSteerSpeed": 20.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 50.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 80.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 16.0,
        "SCMActive": 466.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1531.0
      },
      "CrossSection": {
        "Front": 1184.0,
        "Side": 1011.0,
        "Top": 505.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.33,
      "ExpeditedClaimTime": 0.08,
      "ExpeditedCost": 190.0
    },
    "New Ship": "Argo CSV-SM",
    "Buy": {
      "Astro Armada - Area 18": 378000.0,
      "New Deal - Crusader Showroom - Orison": 378000.0,
      "New Deal - Teasa Spaceport - Lorville": 378000.0
    }
  },
  {
    "ClassName": "ARGO_MOLE",
    "Name": "Argo MOLE",
    "Description": "Argo’s iconic multi-operator laser extractor, more commonly referred to as the MOLE, lets you work faster and more effectively than ever before, thanks to its patented trilateral mining system. Three independently controlled articulated extraction stations allow for maximum power and near-limitless versatility. The MOLE lives by the adage \"many hands make for light work\".",
    "Career": "Industrial",
    "Role": "Medium Mining",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 96.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 4.57
    },
    "Crew": 5,
    "WeaponCrew": 0,
    "OperationsCrew": 3,
    "Mass": 852686.0,
    "ComponentsMass": 25423.0,
    "Dimensions": {
      "Length": 45.0,
      "Width": 25.0,
      "Height": 15.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 0.9,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Front": 22575.0,
          "Rear": 45000.0
        },
        "Parts": {
          "Vtol_Rear_Left": 1200.0,
          "Thruster_Top_Left": 2000.0,
          "Thruster_Bot_Left": 2000.0,
          "Vtol_Rear_Right": 1200.0,
          "Thruster_Top_Right": 2000.0,
          "Thruster_Bot_Right": 2000.0,
          "thruster_front_vtol_left": 1200.0,
          "thruster_front_vtol_right": 1200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left_top": 14500.0,
          "thruster_main_left_bottom": 14500.0,
          "thruster_main_right_top": 14500.0,
          "thruster_main_right_bottom": 14500.0
        },
        "Retro": {
          "thruster_retro_left": 13500.0,
          "thruster_retro_right": 13500.0
        },
        "Vtol": {
          "thruster_rear_vtol_left": 14500.0,
          "thruster_rear_vtol_right": 14500.0,
          "thruster_front_vtol_left": 14500.0,
          "thruster_front_vtol_right": 14500.0
        },
        "Maneuvering": {
          "thruster_rear_bottom_left": 12000.0,
          "thruster_rear_bottom_right": 12000.0,
          "thruster_rear_top_left": 12000.0,
          "thruster_rear_top_right": 12000.0,
          "thruster_front_bottom_left": 12000.0,
          "thruster_front_bottom_right": 12000.0,
          "thruster_front_top_left": 12000.0,
          "thruster_front_top_right": 12000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 140.0,
      "MaxSpeed": 960.0,
      "Pitch": 30.0,
      "Yaw": 30.0,
      "Roll": 75.0,
      "IsVtolAssisted": true,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 42800000.0,
        "Retro": 30000000.0,
        "Vtol": 18800000.0,
        "Maneuvering": 52800000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 4.9,
        "Retro": 3.5,
        "Strafe": 2.7,
        "Up": 3.0,
        "Down": 2.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 340.0,
          "BoostSpeedBackward": 150.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.1,
        "RampDown": 0.7,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.41,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.39,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 200000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 2600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 6750.0,
        "Retro": 3750.0,
        "Vtol": 2350.0,
        "Maneuvering": 6600.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 10821.0,
        "SCMActive": 13048.0,
        "NAV": 25903.0
      },
      "Infrared": {
        "Start": 12399.0
      },
      "CrossSection": {
        "Front": 9693.0,
        "Side": 16155.0,
        "Top": 29373.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 48800.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 13.5,
      "ExpeditedClaimTime": 4.5,
      "ExpeditedCost": 5715.0
    },
    "Buy": {
      "New Deal, Lorville": 8930250.0
    }
  },
  {
    "ClassName": "ARGO_MPUV",
    "Name": "Argo MPUV Cargo",
    "Description": "The Argo Astronautics MPUV Cargo is a dedicated merchant transfer ship. A ubiquitous intergalactic stevedore, vast numbers of MPUV Cargos are responsible for loading and unloading goods onto ships that can't otherwise land on planets or drydocks, such as the Hull D and the Orion. Some hauler captains choose to own and operate their own Argo, while others prefer to contract with the local Argo owners found at many of the busier ports. ",
    "Career": "Transporter",
    "Role": "Light Freight",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 2.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.8
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 9210.0,
    "ComponentsMass": 4286.0,
    "Dimensions": {
      "Length": 9.5,
      "Width": 8.5,
      "Height": 4.3
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 0.9,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 2500.0,
          "Body": 2500.0,
          "Cargo_Container_Exterior": 440.0
        },
        "Parts": {
          "Leg_Left": 240.0,
          "Leg_Right": 240.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_middle_left": 3500.0,
          "engine_middle_right": 3500.0,
          "engine_left": 3500.0,
          "engine_right": 3500.0
        },
        "Maneuvering": {
          "thruster_front_left_front": 2500.0,
          "thruster_front_left_top": 2500.0,
          "thruster_front_left_middle": 2500.0,
          "thruster_front_right_front": 2500.0,
          "thruster_front_right_top": 2500.0,
          "thruster_front_right_middle": 2500.0,
          "thruster_front_right_bottom": 2500.0,
          "thruster_front_left_bottom": 2500.0,
          "thruster_rear_left_top": 2500.0,
          "thruster_rear_left_middle": 2500.0,
          "thruster_rear_left_bottom": 2500.0,
          "thruster_rear_right_bottom": 2500.0,
          "thruster_rear_right_middle": 2500.0,
          "thruster_rear_right_top": 2500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 170.0,
      "MaxSpeed": 890.0,
      "Pitch": 30.0,
      "Yaw": 30.0,
      "Roll": 85.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 385000.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 1318683.2
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 3.8,
        "Retro": 2.7,
        "Strafe": 1.9,
        "Up": 2.8,
        "Down": 2.4,
        "CheckDate": "2025-03-11"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 360.0,
          "BoostSpeedBackward": 140.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.5,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 3000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 48.125,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 164.835
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3368.0,
        "SCMActive": 4069.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 7624.0
      },
      "CrossSection": {
        "Front": 2822.0,
        "Side": 6028.0,
        "Top": 6413.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1850.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.16875,
      "ExpeditedClaimTime": 0.0,
      "ExpeditedCost": 205.0
    },
    "Buy": {
      "New Deal, Lorville": 330750.0
    }
  },
  {
    "ClassName": "ARGO_MPUV_1T",
    "Name": "Argo MPUV Tractor",
    "Description": "The Argo Astronautics MPUV-1T is outfitted with a tractor beam to allow it to handily move cargo containers on and off larger hauling vessels.  Its smaller size and maneuverability make it an ideal support vehicle at landing zones and space stations.",
    "Career": "Transporter",
    "Role": "Light Freight",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 16.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.45,
      "PersonalInventory": 2.0
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 6195.0,
    "ComponentsMass": 2543.0,
    "Dimensions": {
      "Length": 9,
      "Width": 8.5,
      "Height": 4
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 0.9,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2500.0,
          "Nose": 2500.0
        },
        "Parts": {
          "Leg_Left": 240.0,
          "Leg_Right": 240.0,
          "Power_Cap_mesh": 50.0,
          "Cooler_Cap_mesh": 50.0,
          "headlight_bot_r": 200.0,
          "headlight_top_r": 200.0,
          "headlight_top_l": 200.0,
          "headlight_bot_l": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_middle_left": 3500.0,
          "engine_middle_right": 3500.0,
          "engine_left": 3500.0,
          "engine_right": 3500.0
        },
        "Maneuvering": {
          "thruster_front_left_front": 2500.0,
          "thruster_front_left_top": 2500.0,
          "thruster_front_left_middle": 2500.0,
          "thruster_front_right_front": 2500.0,
          "thruster_front_right_top": 2500.0,
          "thruster_front_right_middle": 2500.0,
          "thruster_rear_left_top": 2500.0,
          "thruster_rear_left_middle": 2500.0,
          "thruster_rear_left_bottom": 2500.0,
          "thruster_rear_right_bottom": 2500.0,
          "thruster_rear_right_middle": 2500.0,
          "thruster_rear_right_top": 2500.0,
          "thruster_front_left_bottom": 2500.0,
          "thruster_front_right_bottom": 2500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 175.0,
      "MaxSpeed": 895.0,
      "Pitch": 35.0,
      "Yaw": 35.0,
      "Roll": 85.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 256400.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 980566.1
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 4.1,
        "Retro": 2.9,
        "Strafe": 1.6,
        "Up": 3.8,
        "Down": 2.1,
        "CheckDate": "2025-02-12"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 365.0,
          "BoostSpeedBackward": 145.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.5,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 3000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 32.05,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 122.571
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3460.0,
        "SCMActive": 4161.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 7729.0
      },
      "CrossSection": {
        "Front": 2420.0,
        "Side": 5170.0,
        "Top": 5500.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1850.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.16875,
      "ExpeditedClaimTime": 0.0,
      "ExpeditedCost": 205.0
    },
    "New Ship": "Argo MPUV-1T",
    "Buy": {
      "New Deal, Lorville": 415800.0
    }
  },
  {
    "ClassName": "ARGO_MPUV_Transport",
    "Name": "Argo MPUV Personnel",
    "Description": "The Argo Astronautics MPUV-1P (commonly ‘Argo Personnel’). This version of the Argo is geared towards a simple but incredibly important responsibility: moving grounds of people from place to place. The UEE Navy uses MPUV-1Ps extensively, and any new recruit can likely recall those terrifying moments in which such a ship carried them to their first space assignment. In civilian hands, Argo Personnel ships are adapted for everything from standard taxi services to use as makeshift combat dropships. The Argo MPUV-1P is capable of carrying up to eight humans and their equipment.",
    "Career": "Transporter",
    "Role": "Passenger",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.71
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 9210.0,
    "ComponentsMass": 4286.0,
    "Dimensions": {
      "Length": 9.25,
      "Width": 8.5,
      "Height": 4.3
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 0.9,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 2500.0,
          "Body": 2500.0,
          "aegs_escape_pod_exterior": 440.0
        },
        "Parts": {
          "Leg_Left": 240.0,
          "Leg_Right": 240.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_middle_left": 3500.0,
          "engine_middle_right": 3500.0,
          "engine_left": 3500.0,
          "engine_right": 3500.0
        },
        "Maneuvering": {
          "thruster_front_left_front": 2500.0,
          "thruster_front_left_top": 2500.0,
          "thruster_front_left_middle": 2500.0,
          "thruster_front_right_front": 2500.0,
          "thruster_front_right_top": 2500.0,
          "thruster_front_right_middle": 2500.0,
          "thruster_front_right_bottom": 2500.0,
          "thruster_front_left_bottom": 2500.0,
          "thruster_rear_left_top": 2500.0,
          "thruster_rear_left_middle": 2500.0,
          "thruster_rear_left_bottom": 2500.0,
          "thruster_rear_right_bottom": 2500.0,
          "thruster_rear_right_middle": 2500.0,
          "thruster_rear_right_top": 2500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 170.0,
      "MaxSpeed": 890.0,
      "Pitch": 30.0,
      "Yaw": 30.0,
      "Roll": 85.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 385000.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 1318683.2
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 3.8,
        "Retro": 2.7,
        "Strafe": 1.9,
        "Up": 2.8,
        "Down": 2.4,
        "CheckDate": "2025-03-11"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 360.0,
          "BoostSpeedBackward": 140.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.5,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 3000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 48.125,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 164.835
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3368.0,
        "SCMActive": 4069.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 7528.0
      },
      "CrossSection": {
        "Front": 2798.0,
        "Side": 5977.0,
        "Top": 6358.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1850.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.68,
      "ExpeditedClaimTime": 0.23,
      "ExpeditedCost": 270.0
    },
    "Buy": {
      "New Deal, Lorville": 378000.0
    }
  },
  {
    "ClassName": "ARGO_RAFT",
    "Name": "Argo RAFT",
    "Description": "The Argo RAFT features a hefty 96 SCU cargo hold, and is capable of carrying up to three standardized 32 SCU cargo containers. Perfect for entry-level haulers and old pros alike, the RAFT is an ideal solution for reliable local freight transport.",
    "Career": "Industrial",
    "Role": "Light Freight",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 96.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 2.4,
      "PersonalInventory": 2.46
    },
    "Crew": 2,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 639886.0,
    "ComponentsMass": 26520.0,
    "Dimensions": {
      "Length": 39.5,
      "Width": 23.0,
      "Height": 12.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.53,
        "Energy": 1.05,
        "Distortion": 1.05
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.5,
        "Infrared": 1.5,
        "CrossSection": 1.5
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Front": 40717.7
        },
        "Parts": {
          "ARGO_RAFT_FL_LG_MainShaft_Mesh": 250.0,
          "ARGO_RAFT_FR_LG_MainShaft_Mesh": 250.0,
          "Rear_Right": 7500.0,
          "ARGO_RAFT_RR_LG_MainShaft_Mesh": 250.0,
          "ARGO_RAFT_RR_VTOL_Mesh": 1.0,
          "Rear_Left": 7500.0,
          "ARGO_RAFT_RL_LG_MainShaft_Mesh": 250.0,
          "ARGO_RAFT_RL_VTOL_Mesh": 250.0,
          "ARGO_RAFT_FR_VTOL_Mesh": 250.0,
          "ARGO_RAFT_FL_VTOL_Mesh": 250.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right_2": 4500.0,
          "thruster_main_right_1": 4500.0,
          "thruster_main_left_1": 4500.0,
          "thruster_main_left_2": 4500.0
        },
        "Retro": {
          "thruster_retro_right": 4500.0,
          "thruster_retro_left": 4500.0
        },
        "Vtol": {
          "thruster_VTOL_rear_right": 4500.0,
          "thruster_VTOL_rear_left": 4500.0,
          "thruster_VTOL_front_right": 4500.0,
          "thruster_VTOL_front_left": 4500.0
        },
        "Maneuvering": {
          "thruster_bottom_front_right": 4500.0,
          "thruster_bottom_front_left": 4500.0,
          "thruster_top_front_right": 4500.0,
          "thruster_side_front_right": 4500.0,
          "thruster_side_front_left": 4500.0,
          "thruster_top_front_left": 4500.0,
          "thruster_side_rear_right": 4500.0,
          "thruster_bottom_rear_right": 4500.0,
          "thruster_top_rear_right": 4500.0,
          "thruster_side_rear_left": 4500.0,
          "thruster_top_rear_left": 4500.0,
          "thruster_bottom_rear_left": 4500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 140.0,
      "MaxSpeed": 990.0,
      "Pitch": 40.0,
      "Yaw": 40.0,
      "Roll": 117.0,
      "IsVtolAssisted": true,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 17960000.0,
        "Retro": 9960000.0,
        "Vtol": 5960000.0,
        "Maneuvering": 42960000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.7,
        "Retro": 1.5,
        "Strafe": 1.1,
        "Up": 2.0,
        "Down": 1.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 340.0,
          "BoostSpeedBackward": 150.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.5,
        "RampDown": 0.8,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 225000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 2745.0,
        "Retro": 1245.0,
        "Vtol": 745.0,
        "Maneuvering": 5370.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 23724.0,
        "SCMActive": 30897.0,
        "NAV": 46944.0
      },
      "Infrared": {
        "Start": 19868.0
      },
      "CrossSection": {
        "Front": 9588.0,
        "Side": 20277.0,
        "Top": 24850.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 15300.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 1367.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 14.0,
      "ExpeditedClaimTime": 2.0,
      "ExpeditedCost": 2050.0
    },
    "Buy": {
      "New Deal, Lorville": 3543750.0
    }
  },
  {
    "ClassName": "ARGO_SRV",
    "Name": "Argo SRV",
    "Description": "When it comes to getting the job done, Argo doesn’t mess around. From simple freight and cargo towing to harrowing search-and-rescue operations, the SRV handles whatever you can throw at it. The bespoke tractor system utilizes an innovative plate and arm combination, allowing for effortless solo use as well as precision team towing for bigger jobs. Your crew and passengers stay safe too thanks to durable shields and heavy-duty armor that keep the cockpit and components secure when the situation gets hairy.",
    "Career": "Support",
    "Role": "Recovery",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 12.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.2,
      "PersonalInventory": 0.93
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 1,
    "Mass": 449970.0,
    "ComponentsMass": 12680.0,
    "Dimensions": {
      "Length": 28.5,
      "Width": 19.5,
      "Height": 9.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 0.9,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 10000.0
        },
        "Parts": {
          "VTOL_front_left_lower_mesh": 500.0,
          "VTOL_front_left_upper_mesh": 500.0,
          "VTOL_front_right_lower_mesh": 500.0,
          "VTOL_front_right_upper_mesh": 500.0,
          "Rear": 8500.0,
          "Nacelle_right": 2500.0,
          "VTOL_mid_right_cylinder_mesh": 1000.0,
          "VTOL_mid_right_upper_mesh": 500.0,
          "VTOL_mid_right_lower_mesh": 500.0,
          "VTOL_rear_right_cylinder_mesh": 1000.0,
          "VTOL_rear_right_lower_mesh": 500.0,
          "VTOL_rear_right_upper_mesh": 500.0,
          "DEBRIS_MainTractorBeamArm": 1000.0,
          "Nacelle_left": 2500.0,
          "VTOL_mid_left_cylinder_mesh": 1000.0,
          "VTOL_mid_left_upper_mesh": 500.0,
          "VTOL_mid_left_lower_mesh": 500.0,
          "VTOL_rear_left_cylinder_mesh": 1000.0,
          "VTOL_rear_left_lower_mesh": 500.0,
          "VTOL_rear_left_upper_mesh": 500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 21000.0,
          "thruster_main_left": 21000.0
        },
        "Retro": {
          "thruster_retro_right": 22000.0,
          "thruster_retro_left": 22000.0
        },
        "Vtol": {
          "thruster_VTOL_FLB": 21000.0,
          "thruster_VTOL_FLT": 21000.0,
          "thruster_VTOL_FRB": 21000.0,
          "thruster_VTOL_FRT": 21000.0,
          "thruster_VTOL_MR": 21000.0,
          "thruster_VTOL_RR": 21000.0,
          "thruster_VTOL_ML": 21000.0,
          "thruster_VTOL_RL": 21000.0
        },
        "Maneuvering": {
          "thruster_FSR": 21000.0,
          "thruster_FSL": 21000.0,
          "thruster_FTR": 21000.0,
          "thruster_FTL": 21000.0,
          "thruster_FBR": 21000.0,
          "thruster_FBL": 21000.0,
          "thruster_RBR": 21000.0,
          "thruster_RSR": 21000.0,
          "thruster_RTR": 21000.0,
          "thruster_RBL": 21000.0,
          "thruster_RSL": 21000.0,
          "thruster_RTL": 21000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1100.0,
      "Pitch": 30.0,
      "Yaw": 30.0,
      "Roll": 60.0,
      "IsVtolAssisted": true,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 17200000.0,
        "Retro": 9160000.0,
        "Vtol": 2300000.0,
        "Maneuvering": 30740000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 3.7,
        "Retro": 2.0,
        "Strafe": 1.3,
        "Up": 2.0,
        "Down": 2.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 460.0,
          "BoostSpeedBackward": 235.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.5,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.5,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 28500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 3100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 10.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 3007.5,
        "Retro": 1145.0,
        "Vtol": 287.5,
        "Maneuvering": 3842.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3754.0,
        "SCMActive": 4909.0,
        "NAV": 19234.0
      },
      "Infrared": {
        "Start": 9602.0
      },
      "CrossSection": {
        "Front": 7881.0,
        "Side": 19700.0,
        "Top": 8896.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4430.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 13.22,
      "ExpeditedClaimTime": 4.75,
      "ExpeditedCost": 6200.0
    },
    "New Ship": "Argo SRV",
    "Buy": {
      "New Deal, Lorville": 3969000.0
    }
  },
  {
    "ClassName": "BANU_Defender",
    "Name": "Banu Defender",
    "Description": "Meet the Banu Defender, a multi-crew fighter whose patchwork design highlights technology from a variety of species. Featuring modest accommodations for its crew and easy access to components, the Defender gets its name from the role it serves: the first line of defense against enemy attacks. That's why the Defender makes the ideal companion to the Merchantman: one to do the heavy hauling and the other to perform the deadly dogfighting.",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.35,
      "PersonalInventory": 1.42
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 119930.0,
    "ComponentsMass": 6042.0,
    "Dimensions": {
      "Length": 25.5,
      "Width": 20.0,
      "Height": 8.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 3500.0
        },
        "Parts": {
          "Pod": 4000.0,
          "Wing_Hull_Left": 3000.0,
          "Wing_Hull_Right": 3000.0,
          "Canopy_Left": 50.0,
          "Canopy_Right": 50.0,
          "Body_Panels_02": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 13500.0,
          "thruster_main_right": 13500.0
        },
        "Retro": {
          "thruster_retro_right": 12250.0,
          "thruster_retro_left": 12250.0
        },
        "Maneuvering": {
          "thruster_rear_left_bottom": 11500.0,
          "thruster_rear_left_side": 11500.0,
          "thruster_rear_left_top": 11500.0,
          "thruster_rear_right_bottom": 11500.0,
          "thruster_rear_right_side": 11500.0,
          "thruster_rear_right_top": 11500.0,
          "thruster_wing_left_bottom": 11500.0,
          "thruster_wing_left_side": 11500.0,
          "thruster_wing_left_top": 11500.0,
          "thruster_wing_right_bottom": 11500.0,
          "thruster_wing_right_side": 11500.0,
          "thruster_wing_right_top": 11500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 222.0,
      "MaxSpeed": 1175.0,
      "Pitch": 60.0,
      "Yaw": 47.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 13658000.0,
        "Retro": 4964000.0,
        "Vtol": 0.0,
        "Maneuvering": 34548000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.2,
        "Retro": 4.0,
        "Strafe": 7.6,
        "Up": 8.3,
        "Down": 4.6
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 255.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 43000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 3100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1707.25,
        "Retro": 620.5,
        "Vtol": 0.0,
        "Maneuvering": 4318.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 8060.0,
        "SCMActive": 10182.0,
        "NAV": 15593.0
      },
      "Infrared": {
        "Start": 8271.0
      },
      "CrossSection": {
        "Front": 3063.0,
        "Side": 8493.0,
        "Top": 18100.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 5100.0,
      "PilotBurstDPS": 1276.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9515.0
    },
    "Insurance": {
      "StandardClaimTime": 13.61,
      "ExpeditedClaimTime": 4.54,
      "ExpeditedCost": 6168.0
    },
    "Buy": {
      "Astro Armada, Area 18": 6237000.0
    }
  },
  {
    "ClassName": "CNOU_HoverQuad",
    "Name": "C.O. HoverQuad",
    "Description": "Designed as a companion ground vehicle for the Nomad, the HoverQuad's sleek angular frame utilizes four gravlev pads for maximum maneuverability, making it the perfect transport across all kinds of surfaces.",
    "Career": "Personal Transport",
    "Role": "Transport",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.6,
      "PersonalInventory": 0.6
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 4850.0,
    "ComponentsMass": 553.0,
    "Dimensions": {
      "Length": 4.5,
      "Width": 2.5,
      "Height": 1.10
    },
    "IsSpaceship": false,
    "IsGravlev": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.95,
        "Infrared": 0.12,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 750.0
        },
        "Parts": {
          "hardpoint_vehicle_destroyed": 200.0,
          "gravlev_nacelle_r_left": 450.0,
          "gravlev_nacelle_r_right": 450.0,
          "Nose": 750.0,
          "gravlev_nacelle_f_right": 450.0,
          "gravlev_nacelle_f_left": 450.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main": 2750.0
        },
        "Retro": {
          "thruster_retro_left": 2500.0,
          "thruster_retro_right": 2500.0
        },
        "Maneuvering": {
          "gravlev_center_rear_right": 2750.0,
          "gravlev_center_rear_left": 2750.0,
          "gravlev_rear_left": 2750.0,
          "thruster_mav_rear_left_bottom": 2150.0,
          "thruster_mav_rear_left_top": 2150.0,
          "thruster_mav_rear_left_side": 2150.0,
          "gravlev_rear_right": 2750.0,
          "thruster_mav_rear_right_bottom": 2150.0,
          "thruster_mav_rear_right_side": 2150.0,
          "thruster_mav_rear_right_top": 2150.0,
          "thruster_mav_front_right_side": 2150.0,
          "thruster_mav_front_right_bottom": 2150.0,
          "thruster_mav_front_right_top": 2150.0,
          "gravlev_front_right": 2750.0,
          "thruster_mav_front_left_side": 2150.0,
          "thruster_mav_front_left_bottom": 2150.0,
          "thruster_mav_front_left_top": 2150.0,
          "gravlev_front_left": 2750.0,
          "gravlev_center_right": 2750.0,
          "gravlev_center_left": 2750.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "HoverMaxSpeed": 200.0,
      "MaxSpeed": 550.0,
      "Pitch": 70.0,
      "Yaw": 70.0,
      "Roll": 130.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 135000.0,
        "Retro": 113000.0,
        "Vtol": 0.0,
        "Maneuvering": 440000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.6,
        "Retro": 2.2,
        "Strafe": 1.3,
        "Up": 2.0,
        "Down": 1.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 280.0,
          "BoostSpeedBackward": 120.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.2
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 1.25,
        "CapacitorIdleCost": 2.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 3.5,
        "RegenerationTime": 16.0,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 1600000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 25.0
      },
      "FuelUsagePerSecond": {
        "Main": 16.875,
        "Retro": 14.125,
        "Vtol": 0.0,
        "Maneuvering": 55.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 233.0,
        "SCMActive": 244.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 236.0
      },
      "CrossSection": {
        "Front": 148.0,
        "Side": 205.0,
        "Top": 247.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.15,
      "ExpeditedClaimTime": 0.05,
      "ExpeditedCost": 75.0
    },
    "Buy": {
      "Astro Armada, Area 18": 56700.0,
      "New Deal, Lorville": 56700.0
    }
  },
  {
    "ClassName": "CNOU_Mustang_Alpha",
    "Name": "C.O. Mustang Alpha",
    "Description": "Inspired by Consolidated Outland CEO Silas Koerner’s cutting edge vision, the Mustang Alpha is a sleek, stylish spacecraft that uses ultralight alloys to push power ratios to the limits, albeit sometimes unsafely. And now, with the optional Cargo Carrier, you can have the Alpha’s advantages without sacrificing carrying capacity.",
    "Career": "Multi-Role",
    "Role": "Starter / Light Freight",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 4.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.9,
      "PersonalInventory": 0.95
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 31221.0,
    "ComponentsMass": 7700.0,
    "Dimensions": {
      "Length": 21.5,
      "Width": 18.0,
      "Height": 9.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.55,
        "Energy": 1.05,
        "Distortion": 1.05
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.3,
        "Infrared": 1.3,
        "CrossSection": 1.3
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 1850.0,
          "body": 1850.0
        },
        "Parts": {
          "cockpit_glass_frame": 80.0,
          "cockpit_glass_frame_inner": 1.0,
          "nacelle_left": 2000.0,
          "wing_left": 500.0,
          "wing_left_part02": 500.0,
          "wing_left_part03": 50.0,
          "small_wing_left": 75.0,
          "nacelle_right": 1200.0,
          "wing_right": 500.0,
          "wing_right_part02": 500.0,
          "wing_right_part03": 50.0,
          "small_wing_right": 75.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster_left": 9150.0,
          "main_thruster_right": 9150.0
        },
        "Retro": {
          "retro_thruster_left": 8900.0,
          "retro_thruster_right": 8900.0
        },
        "Maneuvering": {
          "mav_thruster_front_upper_left": 8150.0,
          "mav_thruster_front_bottom": 8150.0,
          "mav_thruster_front_lower_left": 8150.0,
          "mav_thruster_front_lower_right": 8150.0,
          "mav_thruster_front_upper_right": 8150.0,
          "mav_thruster_rear_left_bottom": 8150.0,
          "mav_thruster_rear_left_top": 8150.0,
          "mav_thruster_rear_left_side": 8150.0,
          "mav_thruster_rear_top": 8150.0,
          "mav_thruster_rear_right_bottom": 8150.0,
          "mav_thruster_rear_right_top": 8150.0,
          "mav_thruster_rear_right_side": 8150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1200.0,
      "Pitch": 72.3,
      "Yaw": 53.7,
      "Roll": 205.3,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4835000.0,
        "Retro": 1672000.0,
        "Vtol": 0.0,
        "Maneuvering": 11241000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 12.9,
        "Retro": 4.4,
        "Strafe": 10.1,
        "Up": 10.1,
        "Down": 5.1
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 500.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.3,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 6000000.0,
      "FuelIntakeRate": 8.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 604.375,
        "Retro": 209.0,
        "Vtol": 0.0,
        "Maneuvering": 1405.125
      },
      "IntakeToMainFuelRatio": 1.32,
      "TimeForIntakesToFillTank": 750000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 8093.0,
        "SCMActive": 9697.0,
        "NAV": 17887.0
      },
      "Infrared": {
        "Start": 9250.0
      },
      "CrossSection": {
        "Front": 3043.0,
        "Side": 10104.0,
        "Top": 12173.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2800.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.675,
      "ExpeditedClaimTime": 0.0,
      "ExpeditedCost": 340.0
    },
    "Buy": {
      "New Deal, Lorville": 655200.0
    }
  },
  {
    "ClassName": "CNOU_Mustang_Beta",
    "Name": "C.O. Mustang Beta",
    "Description": "The Mustang Beta, with its unprecedented range, is made for long duration flights. The factory standard Tarsus Leaper Jump Engine enables the Beta to travel to the galaxy’s farthest systems with ease, while the ship’s unique Com4T living quarters will make the journey feel like you never left home.",
    "Career": "Exploration",
    "Role": "Pathfinder",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.9,
      "PersonalInventory": 1.06
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 38113.0,
    "ComponentsMass": 8050.0,
    "Dimensions": {
      "Length": 21.5,
      "Width": 18.0,
      "Height": 9.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.55,
        "Energy": 1.05,
        "Distortion": 1.05
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.3,
        "Infrared": 1.3,
        "CrossSection": 1.3
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 1850.0,
          "body": 1850.0
        },
        "Parts": {
          "cockpit_glass_frame": 80.0,
          "cockpit_glass_frame_inner": 1.0,
          "nacelle_left": 2000.0,
          "wing_left": 500.0,
          "wing_left_part02": 500.0,
          "wing_left_part03": 50.0,
          "small_wing_left": 75.0,
          "nacelle_right": 1200.0,
          "wing_right": 500.0,
          "wing_right_part02": 500.0,
          "wing_right_part03": 50.0,
          "small_wing_right": 75.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster_left": 9150.0,
          "main_thruster_right": 9150.0
        },
        "Retro": {
          "retro_thruster_left": 8900.0,
          "retro_thruster_right": 8900.0
        },
        "Maneuvering": {
          "mav_thruster_front_upper_left": 8150.0,
          "mav_thruster_front_bottom": 8150.0,
          "mav_thruster_front_lower_left": 8150.0,
          "mav_thruster_front_lower_right": 8150.0,
          "mav_thruster_front_upper_right": 8150.0,
          "mav_thruster_rear_left_bottom": 8150.0,
          "mav_thruster_rear_left_top": 8150.0,
          "mav_thruster_rear_left_side": 8150.0,
          "mav_thruster_rear_top": 8150.0,
          "mav_thruster_rear_right_bottom": 8150.0,
          "mav_thruster_rear_right_top": 8150.0,
          "mav_thruster_rear_right_side": 8150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1200.0,
      "Pitch": 72.3,
      "Yaw": 53.7,
      "Roll": 205.3,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 5711318.0,
        "Retro": 1975041.0,
        "Vtol": 0.0,
        "Maneuvering": 13281000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 12.9,
        "Retro": 4.4,
        "Strafe": 10.1,
        "Up": 10.1,
        "Down": 5.2
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 500.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.3,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 8000000.0,
      "FuelIntakeRate": 4.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 713.915,
        "Retro": 246.88,
        "Vtol": 0.0,
        "Maneuvering": 1660.125
      },
      "IntakeToMainFuelRatio": 0.56,
      "TimeForIntakesToFillTank": 2000000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 8093.0,
        "SCMActive": 9697.0,
        "NAV": 17887.0
      },
      "Infrared": {
        "Start": 8860.0
      },
      "CrossSection": {
        "Front": 3043.0,
        "Side": 10104.0,
        "Top": 12173.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2800.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 3.71,
      "ExpeditedClaimTime": 1.24,
      "ExpeditedCost": 1800.0
    },
    "Buy": {
      "New Deal, Lorville": 642600.0
    }
  },
  {
    "ClassName": "CNOU_Mustang_Delta",
    "Name": "C.O. Mustang Delta",
    "Description": "While it may not be able to go toe to toe with some of the military specific ships, by reinforcing the Mustang’s already strong hull construction with Consolidated Outland’s own line of Cavalry Class Mass Reduction Armor, the Delta has a reduced cross-sectional signature that evens the playing field.",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.9,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 35763.0,
    "ComponentsMass": 8800.0,
    "Dimensions": {
      "Length": 21.5,
      "Width": 18.0,
      "Height": 9.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.55,
        "Energy": 1.05,
        "Distortion": 1.05
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.05,
        "Infrared": 1.05,
        "CrossSection": 1.05
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 1850.0,
          "body": 1850.0
        },
        "Parts": {
          "cockpit_glass_frame": 80.0,
          "cockpit_glass_frame_inner": 1.0,
          "nacelle_left": 2000.0,
          "wing_left": 500.0,
          "wing_left_part02": 500.0,
          "wing_left_part03": 50.0,
          "small_wing_left": 75.0,
          "nacelle_right": 1200.0,
          "wing_right": 500.0,
          "wing_right_part02": 500.0,
          "wing_right_part03": 50.0,
          "small_wing_right": 75.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster_left": 9150.0,
          "main_thruster_right": 9150.0
        },
        "Retro": {
          "retro_thruster_left": 8900.0,
          "retro_thruster_right": 8900.0
        },
        "Maneuvering": {
          "mav_thruster_front_upper_left": 8150.0,
          "mav_thruster_front_bottom": 8150.0,
          "mav_thruster_front_lower_left": 8150.0,
          "mav_thruster_front_lower_right": 8150.0,
          "mav_thruster_front_upper_right": 8150.0,
          "mav_thruster_rear_left_bottom": 8150.0,
          "mav_thruster_rear_left_top": 8150.0,
          "mav_thruster_rear_left_side": 8150.0,
          "mav_thruster_rear_top": 8150.0,
          "mav_thruster_rear_right_bottom": 8150.0,
          "mav_thruster_rear_right_top": 8150.0,
          "mav_thruster_rear_right_side": 8150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1200.0,
      "Pitch": 72.3,
      "Yaw": 53.7,
      "Roll": 205.3,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 5534000.0,
        "Retro": 1916000.0,
        "Vtol": 0.0,
        "Maneuvering": 12864000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 12.9,
        "Retro": 4.4,
        "Strafe": 10.1,
        "Up": 10.1,
        "Down": 5.1
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 500.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.3,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 7500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 691.75,
        "Retro": 239.5,
        "Vtol": 0.0,
        "Maneuvering": 1608.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 8977.0,
        "SCMActive": 14111.0,
        "NAV": 16887.0
      },
      "Infrared": {
        "Start": 7828.0
      },
      "CrossSection": {
        "Front": 2163.0,
        "Side": 7181.0,
        "Top": 8652.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3200.0,
      "PilotBurstDPS": 1612.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 4.01,
      "ExpeditedClaimTime": 1.34,
      "ExpeditedCost": 1920.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1228500.0
    }
  },
  {
    "ClassName": "CNOU_Mustang_Gamma",
    "Name": "C.O. Mustang Gamma",
    "Description": "Consolidated Outland’s design and engineering teams have managed to tweak and refine the Mustang into an admirable racer. The end result, the Mustang Gamma, has smooth acceleration, and power on demand thanks to an innovative package featuring three powerful Magma Jet engines for maximum thrust.",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.9,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 28565.0,
    "ComponentsMass": 4384.0,
    "Dimensions": {
      "Length": 21.5,
      "Width": 18.0,
      "Height": 9.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.63,
        "Energy": 1.2,
        "Distortion": 1.2
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.4,
        "Infrared": 1.4,
        "CrossSection": 1.4
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 1700.0,
          "body": 1700.0
        },
        "Parts": {
          "cockpit_glass_frame": 80.0,
          "cockpit_glass_frame_inner": 1.0,
          "nacelle_left": 2000.0,
          "wing_left": 500.0,
          "wing_left_part02": 500.0,
          "wing_left_part03": 50.0,
          "small_wing_left": 75.0,
          "nacelle_right": 1200.0,
          "wing_right": 500.0,
          "wing_right_part02": 500.0,
          "wing_right_part03": 50.0,
          "small_wing_right": 75.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster_left": 9150.0,
          "main_thruster_center": 9150.0,
          "main_thruster_right": 9150.0
        },
        "Retro": {
          "retro_thruster_left": 8900.0,
          "retro_thruster_right": 8900.0
        },
        "Maneuvering": {
          "mav_thruster_front_upper_left": 8150.0,
          "mav_thruster_front_bottom": 8150.0,
          "mav_thruster_front_lower_left": 8150.0,
          "mav_thruster_front_lower_right": 8150.0,
          "mav_thruster_front_upper_right": 8150.0,
          "mav_thruster_rear_left_bottom": 8150.0,
          "mav_thruster_rear_left_top": 8150.0,
          "mav_thruster_rear_left_side": 8150.0,
          "mav_thruster_rear_top": 8150.0,
          "mav_thruster_rear_right_bottom": 8150.0,
          "mav_thruster_rear_right_top": 8150.0,
          "mav_thruster_rear_right_side": 8150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 244.0,
      "MaxSpeed": 1230.0,
      "Pitch": 84.0,
      "Yaw": 65.0,
      "Roll": 234.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4458000.0,
        "Retro": 1421630.8,
        "Vtol": 0.0,
        "Maneuvering": 10764000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 14.0,
        "Retro": 4.4,
        "Strafe": 11.4,
        "Up": 11.1,
        "Down": 5.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 533.0,
          "BoostSpeedBackward": 273.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.3,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 6000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 3.75,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 557.25,
        "Retro": 177.704,
        "Vtol": 0.0,
        "Maneuvering": 1345.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 10134.0,
        "SCMActive": 12145.0,
        "NAV": 20680.0
      },
      "Infrared": {
        "Start": 10868.0
      },
      "CrossSection": {
        "Front": 2996.0,
        "Side": 9947.0,
        "Top": 11984.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4200.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 7.28,
      "ExpeditedClaimTime": 2.43,
      "ExpeditedCost": 3230.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1178100.0
    }
  },
  {
    "ClassName": "CNOU_Mustang_Omega",
    "Name": "C.O. Mustang Omega",
    "Description": "Consolidated Outland teamed up with custom tuning company Accelerated Mass Design to create a limited edition racer that features a ramped up fuel intake for faster recycling of the ship’s already impressive boost system. To cap off the collaboration, AMD enlisted resident underground artist Sektor8 to design the dynamic paint job.",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.9,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 28565.0,
    "ComponentsMass": 4384.0,
    "Dimensions": {
      "Length": 21.5,
      "Width": 18.0,
      "Height": 9.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.63,
        "Energy": 1.2,
        "Distortion": 1.2
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.4,
        "Infrared": 1.4,
        "CrossSection": 1.4
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 1700.0,
          "body": 1700.0
        },
        "Parts": {
          "cockpit_glass_frame": 80.0,
          "cockpit_glass_frame_inner": 1.0,
          "nacelle_left": 2000.0,
          "wing_left": 500.0,
          "wing_left_part02": 500.0,
          "wing_left_part03": 50.0,
          "small_wing_left": 75.0,
          "nacelle_right": 1200.0,
          "wing_right": 500.0,
          "wing_right_part02": 500.0,
          "wing_right_part03": 50.0,
          "small_wing_right": 75.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster_left": 9150.0,
          "main_thruster_center": 9150.0,
          "main_thruster_right": 9150.0
        },
        "Retro": {
          "retro_thruster_left": 8900.0,
          "retro_thruster_right": 8900.0
        },
        "Maneuvering": {
          "mav_thruster_front_upper_left": 8150.0,
          "mav_thruster_front_bottom": 8150.0,
          "mav_thruster_front_lower_left": 8150.0,
          "mav_thruster_front_lower_right": 8150.0,
          "mav_thruster_front_upper_right": 8150.0,
          "mav_thruster_rear_left_bottom": 8150.0,
          "mav_thruster_rear_left_top": 8150.0,
          "mav_thruster_rear_left_side": 8150.0,
          "mav_thruster_rear_top": 8150.0,
          "mav_thruster_rear_right_bottom": 8150.0,
          "mav_thruster_rear_right_top": 8150.0,
          "mav_thruster_rear_right_side": 8150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 244.0,
      "MaxSpeed": 1230.0,
      "Pitch": 84.0,
      "Yaw": 65.0,
      "Roll": 234.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4458000.0,
        "Retro": 1421630.8,
        "Vtol": 0.0,
        "Maneuvering": 10764000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 14.0,
        "Retro": 4.4,
        "Strafe": 11.4,
        "Up": 11.1,
        "Down": 5.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 533.0,
          "BoostSpeedBackward": 273.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.3,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 6000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 3.75,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 557.25,
        "Retro": 177.704,
        "Vtol": 0.0,
        "Maneuvering": 1345.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 10134.0,
        "SCMActive": 12145.0,
        "NAV": 20680.0
      },
      "Infrared": {
        "Start": 10868.0
      },
      "CrossSection": {
        "Front": 2996.0,
        "Side": 9947.0,
        "Top": 11984.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4200.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 7.28,
      "ExpeditedClaimTime": 2.43,
      "ExpeditedCost": 3230.0
    }
  },
  {
    "ClassName": "CNOU_Nomad",
    "Name": "C.O. Nomad",
    "Description": "With the versatility of a medium-sized multi-purpose freighter packed into a stylish, compact frame, the Consolidated Outland Nomad is the model of self-sufficiency, the spirit of the open sky, and the perfect solution for anyone yearning to start a brand-new adventure.",
    "Career": "Transporter",
    "Role": "Light Freight",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 24.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.23
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 216323.0,
    "ComponentsMass": 14901.0,
    "Dimensions": {
      "Length": 27.0,
      "Width": 19.0,
      "Height": 10.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 4000.0
        },
        "Parts": {
          "vertical_stabilizer_right": 200.0,
          "vertical_stabilizer_left": 200.0,
          "nose": 4000.0,
          "wing_left": 500.0,
          "canopy": 200.0,
          "wing_right": 500.0,
          "vertical_stabilizer_right_bottom": 50.0,
          "vertical_stabilizer_left_bottom": 50.0,
          "vertical_stabilizer_left_top": 50.0,
          "vertical_stabilizer_right_top": 50.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 4500.0,
          "thruster_main_left": 4500.0
        },
        "Retro": {
          "thruster_retro_right": 4500.0,
          "thruster_retro_left": 4500.0
        },
        "Maneuvering": {
          "thruster_mav_right_mid_top": 7250.0,
          "thruster_mav_right_mid_bot": 7250.0,
          "thruster_mav_right_front_top": 7250.0,
          "thruster_mav_right_front_bot": 7250.0,
          "thruster_mav_left_mid_top": 7250.0,
          "thruster_mav_left_mid_bot": 7250.0,
          "thruster_mav_left_front_top": 7250.0,
          "thruster_mav_left_front_bot": 7250.0,
          "thruster_mav_right_rear_top": 7250.0,
          "thruster_mav_right_rear_bot": 7250.0,
          "thruster_mav_left_rear_top": 7250.0,
          "thruster_mav_left_rear_bot": 7250.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 205.0,
      "MaxSpeed": 1100.0,
      "Pitch": 45.0,
      "Yaw": 45.0,
      "Roll": 120.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 23000000.0,
        "Retro": 8000000.0,
        "Vtol": 0.0,
        "Maneuvering": 36000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.0,
        "Retro": 3.5,
        "Strafe": 6.0,
        "Up": 7.7,
        "Down": 4.6
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 450.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 32799999.999999996,
      "FuelIntakeRate": 16.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 2875.0,
        "Retro": 1000.0,
        "Vtol": 0.0,
        "Maneuvering": 4500.0
      },
      "IntakeToMainFuelRatio": 0.56,
      "TimeForIntakesToFillTank": 2050000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5615.0,
        "SCMActive": 6732.0,
        "NAV": 13148.0
      },
      "Infrared": {
        "Start": 7026.0
      },
      "CrossSection": {
        "Front": 3302.0,
        "Side": 6604.0,
        "Top": 9712.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4500.0,
      "PilotBurstDPS": 1637.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 16460.0
    },
    "Insurance": {
      "StandardClaimTime": 3.95,
      "ExpeditedClaimTime": 1.32,
      "ExpeditedCost": 2687.0
    },
    "Buy": {
      "New Deal, Lorville": 1512000.0
    }
  },
  {
    "ClassName": "CRUS_Intrepid",
    "Name": "Crusader Intrepid",
    "Description": "For those eager to meet their future head on, the renowned ship engineers at Crusader Industries proudly present the Intrepid. A bold ship ready to tackle any number of jobs and conquer numerous challenges, the Intrepid features efficient cargo space and comfortable living quarters to make the most of your solo journey across the stars.",
    "Career": "Starter",
    "Role": "Starter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 8.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.5,
      "PersonalInventory": 2.0
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 66943.0,
    "ComponentsMass": 12360.2,
    "Dimensions": {
      "Length": 23.2,
      "Width": 20.3,
      "Height": 6.2
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 3300.0
        },
        "Parts": {
          "plating_top_central_left": 50.0,
          "plating_top_central_right": 50.0,
          "plating_weapon": 100.0,
          "wing_front_right": 100.0,
          "nose": 3300.0,
          "canopy": 150.0,
          "wing_front_left": 100.0,
          "rear": 3300.0,
          "engines_left": 700.0,
          "engines_right": 700.0,
          "plating_engines_left": 50.0,
          "plating_engines_right": 50.0,
          "rear_fin_left": 50.0,
          "rear_fin_right": 50.0,
          "wing_left": 1000.0,
          "wing_right": 1000.0,
          "wing_top_left": 450.0,
          "vtol_left": 200.0,
          "wing_top_right": 450.0,
          "vtol_right": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 1200.0,
          "thruster_main_aux_03_left": 1200.0,
          "thruster_main_aux_02_left": 1200.0,
          "thruster_main_aux_01_left": 1200.0,
          "thruster_main_right": 1200.0,
          "thruster_main_aux_03_right": 1200.0,
          "thruster_main_aux_02_right": 1200.0,
          "thruster_main_aux_01_right": 1200.0
        },
        "Retro": {
          "thruster_retro_left": 800.0,
          "thruster_retro_right": 800.0
        },
        "Vtol": {
          "thruster_vtol_mav_left": 1200.0,
          "thruster_vtol_mav_right": 1200.0
        },
        "Maneuvering": {
          "thruster_mav_bottom_front_right": 800.0,
          "thruster_mav_side_front_right": 800.0,
          "thruster_mav_top_front_right": 800.0,
          "thruster_mav_bottom_front_left": 800.0,
          "thruster_mav_side_front_left": 800.0,
          "thruster_mav_top_front_left": 800.0,
          "thruster_mav_bottom_rear_left": 800.0,
          "thruster_mav_side_rear_left": 800.0,
          "thruster_mav_bottom_rear_right": 800.0,
          "thruster_mav_side_rear_right": 800.0,
          "thruster_mav_top_rear_left": 800.0,
          "thruster_mav_top_rear_right": 800.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 227.0,
      "MaxSpeed": 1225.0,
      "Pitch": 48.0,
      "Yaw": 48.0,
      "Roll": 145.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4000000.0,
        "Retro": 3000000.0,
        "Vtol": 500000.0,
        "Maneuvering": 19200000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 12.6,
        "Retro": 3.7,
        "Strafe": 5.6,
        "Up": 6.5,
        "Down": 5.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 455.0,
          "BoostSpeedBackward": 255.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 26000000.0,
      "FuelIntakeRate": 30.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 2.5,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 500.0,
        "Retro": 375.0,
        "Vtol": 62.5,
        "Maneuvering": 2400.0
      },
      "IntakeToMainFuelRatio": 6.0,
      "TimeForIntakesToFillTank": 866666.67
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1419.0,
        "SCMActive": 1623.0,
        "NAV": 8953.0
      },
      "Infrared": {
        "Start": 9991.0
      },
      "CrossSection": {
        "Front": 0.0,
        "Side": 0.0,
        "Top": 0.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1500.0,
      "PilotBurstDPS": 818.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 2280.0
    },
    "Insurance": {
      "StandardClaimTime": 5.67,
      "ExpeditedClaimTime": 1.42,
      "ExpeditedCost": 1850.0
    },
    "New Ship": "Crusader Intrepid",
    "Buy": {
      "Astro Armada - Area 18": 705600.0,
      "New Deal - Crusader Showroom - Orison": 705600.0,
      "New Deal - Teasa Spaceport - Lorville": 705600.0
    }
  },
  {
    "ClassName": "CRUS_Spirit_A1",
    "Name": "Crusader A1 Spirit",
    "Description": "Crusader Industries brings its usual commitment to excellence directly to the civilian market with the A1 Spirit, a mid-size multi-purpose starship equipped as a light bomber but packing enough versatility to tackle multiple roles and unpredictable jobs.",
    "Career": "Combat",
    "Role": "Bomber",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 2.4,
      "PersonalInventory": 1.85
    },
    "Crew": 2,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 259270.5,
    "ComponentsMass": 69276.0,
    "Dimensions": {
      "Length": 47.5,
      "Width": 44.0,
      "Height": 10.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 0.95,
        "Distortion": 0.95
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.3,
        "Infrared": 1.3,
        "CrossSection": 1.3
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 16500.0,
          "wing_base_left": 10400.0,
          "wing_base_right": 10400.0
        },
        "Parts": {
          "nose": 13500.0,
          "rear": 11700.0,
          "tail_left": 1200.0,
          "tail_right": 1200.0,
          "wing_left": 1050.0,
          "vtol_geo_left": 150.0,
          "vtol_flap_geo_left": 150.0,
          "wing_right": 1050.0,
          "vtol_geo_right": 150.0,
          "vtol_flap_geo_right": 150.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_01_left": 16500.0,
          "thruster_main_02_left": 16500.0,
          "thruster_main_03_left": 16500.0,
          "thruster_main_04_left": 16500.0,
          "thruster_main_backplate_left": 16500.0,
          "thruster_main_01_right": 16500.0,
          "thruster_main_02_right": 16500.0,
          "thruster_main_03_right": 16500.0,
          "thruster_main_04_right": 16500.0,
          "thruster_main_backplate_right": 16500.0
        },
        "Retro": {
          "thruster_retro_left": 15250.0,
          "thruster_retro_right": 15250.0
        },
        "Vtol": {
          "thruster_vtol_aux_front_left": 15000.0,
          "thruster_vtol_aux_front_right": 15000.0,
          "thruster_vtol_aux_rear_left": 15000.0,
          "thruster_vtol_aux_rear_right": 15000.0,
          "thruster_vtol_main_left": 15000.0,
          "thruster_vtol_main_right": 15000.0
        },
        "Maneuvering": {
          "thruster_front_bottom_left": 14350.0,
          "thruster_front_bottom_right": 14350.0,
          "thruster_front_top_left": 14350.0,
          "thruster_front_side_left": 14350.0,
          "thruster_front_top_right": 14350.0,
          "thruster_front_side_right": 14350.0,
          "thruster_rear_side_left": 14350.0,
          "thruster_rear_side_right": 14350.0,
          "thruster_rear_bottom_left": 14350.0,
          "thruster_rear_top_left": 14350.0,
          "thruster_rear_bottom_right": 14350.0,
          "thruster_rear_top_right": 14350.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 203.5,
      "MaxSpeed": 1130.0,
      "Pitch": 36.0,
      "Yaw": 36.0,
      "Roll": 101.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 26948752.0,
        "Retro": 10000000.0,
        "Vtol": 18400000.0,
        "Maneuvering": 20820000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 8.3,
        "Retro": 3.1,
        "Strafe": 3.1,
        "Up": 4.1,
        "Down": 3.1,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 405.0,
          "BoostSpeedBackward": 212.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.7,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 45000000.0,
      "FuelIntakeRate": 30.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 12.5,
        "Retro": 2.5,
        "Vtol": 7.5,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 3368.594,
        "Retro": 1250.0,
        "Vtol": 2300.0,
        "Maneuvering": 2602.5
      },
      "IntakeToMainFuelRatio": 0.89,
      "TimeForIntakesToFillTank": 1500000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5266.0,
        "SCMActive": 6803.0,
        "NAV": 25390.0
      },
      "Infrared": {
        "Start": 18311.0
      },
      "CrossSection": {
        "Front": 4940.0,
        "Side": 24700.0,
        "Top": 23660.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4740.0,
      "PilotBurstDPS": 2735.0,
      "TurretsBurstDPS": 656.0,
      "TotalMissilesDmg": 477126.0
    },
    "Insurance": {
      "StandardClaimTime": 6.75,
      "ExpeditedClaimTime": 2.25,
      "ExpeditedCost": 3375.0
    },
    "New Ship": "Crusader A1 Spirit",
    "Buy": {
      "Crusader Showroom, Orison": 4961250.0
    }
  },
  {
    "ClassName": "CRUS_Spirit_C1",
    "Name": "Crusader C1 Spirit",
    "Description": "Crusader Industries brings its usual commitment to excellence directly to the civilian market with the C1 Spirit, a mid-size multi-purpose starship built for cargo transport and delivery but packing enough versatility to tackle multiple roles and unpredictable jobs.",
    "Career": "Transporter",
    "Role": "Medium Freight",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 64.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 2.4,
      "PersonalInventory": 2.46
    },
    "Crew": 2,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 259270.5,
    "ComponentsMass": 66316.0,
    "Dimensions": {
      "Length": 47.5,
      "Width": 44.0,
      "Height": 10.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 0.95,
        "Distortion": 0.95
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.3,
        "Infrared": 1.3,
        "CrossSection": 1.3
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 16500.0,
          "wing_base_left": 10400.0,
          "wing_base_right": 10400.0
        },
        "Parts": {
          "nose": 13500.0,
          "rear": 11700.0,
          "tail_left": 1200.0,
          "tail_right": 1200.0,
          "wing_left": 1050.0,
          "vtol_geo_left": 150.0,
          "vtol_flap_geo_left": 150.0,
          "wing_right": 1050.0,
          "vtol_geo_right": 150.0,
          "vtol_flap_geo_right": 150.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_01_left": 16500.0,
          "thruster_main_02_left": 16500.0,
          "thruster_main_03_left": 16500.0,
          "thruster_main_04_left": 16500.0,
          "thruster_main_backplate_left": 16500.0,
          "thruster_main_01_right": 16500.0,
          "thruster_main_02_right": 16500.0,
          "thruster_main_03_right": 16500.0,
          "thruster_main_04_right": 16500.0,
          "thruster_main_backplate_right": 16500.0
        },
        "Retro": {
          "thruster_retro_left": 15250.0,
          "thruster_retro_right": 15250.0
        },
        "Vtol": {
          "thruster_vtol_aux_front_left": 15000.0,
          "thruster_vtol_aux_front_right": 15000.0,
          "thruster_vtol_aux_rear_left": 15000.0,
          "thruster_vtol_aux_rear_right": 15000.0,
          "thruster_vtol_main_left": 15000.0,
          "thruster_vtol_main_right": 15000.0
        },
        "Maneuvering": {
          "thruster_front_bottom_left": 14350.0,
          "thruster_front_bottom_right": 14350.0,
          "thruster_front_top_left": 14350.0,
          "thruster_front_side_left": 14350.0,
          "thruster_front_top_right": 14350.0,
          "thruster_front_side_right": 14350.0,
          "thruster_rear_side_left": 14350.0,
          "thruster_rear_side_right": 14350.0,
          "thruster_rear_bottom_left": 14350.0,
          "thruster_rear_top_left": 14350.0,
          "thruster_rear_bottom_right": 14350.0,
          "thruster_rear_top_right": 14350.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 203.5,
      "MaxSpeed": 1130.0,
      "Pitch": 36.0,
      "Yaw": 36.0,
      "Roll": 101.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 26948752.0,
        "Retro": 10000000.0,
        "Vtol": 18400000.0,
        "Maneuvering": 20820000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 8.3,
        "Retro": 3.1,
        "Strafe": 3.1,
        "Up": 4.1,
        "Down": 3.1,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 405.0,
          "BoostSpeedBackward": 212.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.7,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 45000000.0,
      "FuelIntakeRate": 30.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 12.5,
        "Retro": 2.5,
        "Vtol": 7.5,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 3368.594,
        "Retro": 1250.0,
        "Vtol": 2300.0,
        "Maneuvering": 2602.5
      },
      "IntakeToMainFuelRatio": 0.89,
      "TimeForIntakesToFillTank": 1500000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5211.0,
        "SCMActive": 6763.0,
        "NAV": 25336.0
      },
      "Infrared": {
        "Start": 17921.0
      },
      "CrossSection": {
        "Front": 4940.0,
        "Side": 24700.0,
        "Top": 23660.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4740.0,
      "PilotBurstDPS": 2735.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 10106.0
    },
    "Insurance": {
      "StandardClaimTime": 6.75,
      "ExpeditedClaimTime": 2.25,
      "ExpeditedCost": 3375.0
    },
    "New Ship": "Crusader C1 Spirit",
    "Buy": {
      "Crusader Showroom, Orison": 3118500.0
    }
  },
  {
    "ClassName": "CRUS_Starfighter_Inferno",
    "Name": "Crusader Ares Star Fighter Inferno",
    "Description": "Whether heading up a crew or hunting big ships solo, the Ares Inferno is a force to be reckoned with. This ballistic Gatling-equipped variant tears through gunship armor and turns smaller fighters to dust in seconds.",
    "Career": "Combat",
    "Role": "Heavy Fighter",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.86,
      "PersonalInventory": 0.86
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 325001.0,
    "ComponentsMass": 12510.0,
    "Dimensions": {
      "Length": 27.0,
      "Width": 30.0,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 12000.0
        },
        "Parts": {
          "tail": 9000.0,
          "right_wing": 7000.0,
          "lower_wing_right": 1500.0,
          "lower_wing_left": 1500.0,
          "left_wing": 7000.0,
          "canopy_translation": 200.0,
          "nacelle_right_debris": 200.0,
          "nacelle_left_debris": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 22200.0,
          "thruster_main_left": 22200.0
        },
        "Retro": {
          "retro_thruster_right": 22200.0,
          "retro_thruster_left": 22200.0
        },
        "Maneuvering": {
          "thruster_mav_wing_right_bottom": 22200.0,
          "thruster_mav_wing_right": 22200.0,
          "thruster_mav_wing_left": 22200.0,
          "thruster_mav_wing_left_bottom": 22200.0,
          "thruster_mav_tail_top_right": 22200.0,
          "thruster_mav_tail_top_left": 22200.0,
          "thruster_mav_tail_bottom_left": 22200.0,
          "thruster_mav_nose_top_right": 22200.0,
          "thruster_mav_nose_top_left": 22200.0,
          "thruster_mav_nose_bottom_right": 22200.0,
          "thruster_mav_nose_bottom_left": 22200.0,
          "thruster_mav_tail_bottom_right": 22200.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1050.0,
      "Pitch": 37.0,
      "Yaw": 30.0,
      "Roll": 105.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 25910000.0,
        "Retro": 9600000.0,
        "Vtol": 0.0,
        "Maneuvering": 23988444.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 7.8,
        "Retro": 2.9,
        "Strafe": 3.5,
        "Up": 4.0,
        "Down": 3.0,
        "CheckDate": "2025-02-12"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 380.0,
          "BoostSpeedBackward": 210.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.25,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 45000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 3238.75,
        "Retro": 1200.0,
        "Vtol": 0.0,
        "Maneuvering": 2998.555
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 10666.0,
        "SCMActive": 13766.0,
        "NAV": 26146.0
      },
      "Infrared": {
        "Start": 8770.0
      },
      "CrossSection": {
        "Front": 2303.0,
        "Side": 12794.0,
        "Top": 17608.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 9480.0,
      "PilotBurstDPS": 4380.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 56072.0
    },
    "Insurance": {
      "StandardClaimTime": 10.3,
      "ExpeditedClaimTime": 3.43,
      "ExpeditedCost": 7311.0
    },
    "Buy": {
      "Crusader Showroom, Orison": 4725000.0
    }
  },
  {
    "ClassName": "CRUS_Starfighter_Ion",
    "Name": "Crusader Ares Star Fighter Ion",
    "Description": "Spark fear in the corridors of the most formidable gunships and frigates with the Ares Ion. This laser-equipped variant delivers extremely powerful shots to quickly disable the shields of even the biggest enemy vessels.",
    "Career": "Combat",
    "Role": "Heavy Fighter",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.86,
      "PersonalInventory": 0.86
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 325001.0,
    "ComponentsMass": 12650.0,
    "Dimensions": {
      "Length": 27.0,
      "Width": 30.0,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 12000.0
        },
        "Parts": {
          "tail": 9000.0,
          "right_wing": 7000.0,
          "lower_wing_right": 1500.0,
          "lower_wing_left": 1500.0,
          "left_wing": 7000.0,
          "canopy_translation": 200.0,
          "nacelle_right_debris": 200.0,
          "nacelle_left_debris": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 22200.0,
          "thruster_main_left": 22200.0
        },
        "Retro": {
          "retro_thruster_right": 22200.0,
          "retro_thruster_left": 22200.0
        },
        "Maneuvering": {
          "thruster_mav_wing_right_bottom": 22200.0,
          "thruster_mav_wing_right": 22200.0,
          "thruster_mav_wing_left": 22200.0,
          "thruster_mav_wing_left_bottom": 22200.0,
          "thruster_mav_tail_top_right": 22200.0,
          "thruster_mav_tail_top_left": 22200.0,
          "thruster_mav_tail_bottom_left": 22200.0,
          "thruster_mav_nose_top_right": 22200.0,
          "thruster_mav_nose_top_left": 22200.0,
          "thruster_mav_nose_bottom_right": 22200.0,
          "thruster_mav_nose_bottom_left": 22200.0,
          "thruster_mav_tail_bottom_right": 22200.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1050.0,
      "Pitch": 37.0,
      "Yaw": 30.0,
      "Roll": 105.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 25910000.0,
        "Retro": 9600000.0,
        "Vtol": 0.0,
        "Maneuvering": 23988444.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 7.8,
        "Retro": 2.9,
        "Strafe": 3.5,
        "Up": 4.0,
        "Down": 3.0,
        "CheckDate": "2025-02-12"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 380.0,
          "BoostSpeedBackward": 210.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.25,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 45000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 3238.75,
        "Retro": 1200.0,
        "Vtol": 0.0,
        "Maneuvering": 2998.555
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 10666.0,
        "SCMActive": 13766.0,
        "NAV": 26146.0
      },
      "Infrared": {
        "Start": 8770.0
      },
      "CrossSection": {
        "Front": 2448.0,
        "Side": 13600.0,
        "Top": 12240.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 9480.0,
      "PilotBurstDPS": 4721.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 56072.0
    },
    "Insurance": {
      "StandardClaimTime": 10.3,
      "ExpeditedClaimTime": 3.43,
      "ExpeditedCost": 7311.0
    },
    "Buy": {
      "Crusader Showroom, Orison": 4725000.0
    }
  },
  {
    "ClassName": "CRUS_Starlifter_A2",
    "Name": "Crusader A2 Hercules Starlifter",
    "Description": "The A2 gunship has been used to devastating effect in airborne assaults, search and rescue operations, and landing initiatives. With more than double the firepower of the M2, and a custom bomb bay capable of delivering a staggering payload, the A2 caters to anyone hauling massive amounts of cargo through potentially unfriendly skies.",
    "Career": "Combat",
    "Role": "Bomber",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 216.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 18.0,
      "PersonalInventory": 9.14
    },
    "Crew": 8,
    "WeaponCrew": 7,
    "OperationsCrew": 0,
    "Mass": 3139240.06,
    "ComponentsMass": 169754.0,
    "Dimensions": {
      "Length": 94.0,
      "Width": 70.0,
      "Height": 23.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 1.0,
        "Energy": 0.8,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 65250.0
        },
        "Parts": {
          "Tail_Left": 5220.0,
          "Tail_Right": 5220.0,
          "Wing_Left": 8845.0,
          "Wing_Right": 8845.0,
          "Nose_Mesh": 10150.0,
          "front_door_left": 4500.0,
          "front_door_right": 4500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_smaller_right": 22200.0,
          "thruster_main_smaller_left": 22200.0,
          "thruster_main_small_right": 22200.0,
          "thruster_main_small_left": 22200.0,
          "thruster_main_right_2": 22200.0,
          "thruster_main_right_1": 22200.0,
          "thruster_main_left_2": 22200.0,
          "thruster_main_left_1": 22200.0
        },
        "Retro": {
          "thruster_retro_right": 22200.0,
          "thruster_retro_left": 22200.0
        },
        "Vtol": {
          "thruster_VTOL_wing_left": 22200.0,
          "thruster_VTOL_wing_right": 22200.0,
          "thruster_VTOL_side_right": 22200.0,
          "thruster_VTOL_side_left": 22200.0
        },
        "Maneuvering": {
          "thruster_top_rear_right": 22200.0,
          "thruster_top_rear_left": 22200.0,
          "thruster_top_mid_right": 22200.0,
          "thruster_top_mid_left": 22200.0,
          "thruster_side_rear_right": 22200.0,
          "thruster_side_rear_left": 22200.0,
          "thruster_side_front_right": 22200.0,
          "thruster_side_front_left": 22200.0,
          "thruster_bottom_rear_right": 22200.0,
          "thruster_bottom_rear_left": 22200.0,
          "thruster_bottom_front_left": 22200.0,
          "thruster_top_front_left": 22200.0,
          "thruster_bottom_front_right": 22200.0,
          "thruster_top_front_right": 22200.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 160.0,
      "MaxSpeed": 950.0,
      "Pitch": 20.0,
      "Yaw": 18.0,
      "Roll": 30.0,
      "IsVtolAssisted": true,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 217148286.0,
        "Retro": 13400000.0,
        "Vtol": 57937750.0,
        "Maneuvering": 195000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.1,
        "Retro": 2.0,
        "Strafe": 2.5,
        "Up": 2.5,
        "Down": 2.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 7.0,
        "ScmMode": {
          "BoostSpeedForward": 320.0,
          "BoostSpeedBackward": 170.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 132000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 6600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 10.0,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 21576.317,
        "Retro": 1675.0,
        "Vtol": 7242.219,
        "Maneuvering": 24375.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 27781.0,
        "SCMActive": 33136.0,
        "NAV": 43228.0
      },
      "Infrared": {
        "Start": 23979.0
      },
      "CrossSection": {
        "Front": 8966.0,
        "Side": 27795.0,
        "Top": 37657.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 10.0
      },
      "Modifiers": {
        "PowerRatioMultiplier": 2.0,
        "MaxAmmoLoadMultiplier": 1.0,
        "MaxRegenPerSecMultiplier": 1.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 156600.0,
      "PilotBurstDPS": 3073.0,
      "TurretsBurstDPS": 13726.0,
      "TotalMissilesDmg": 2273188.0
    },
    "Insurance": {
      "StandardClaimTime": 39.24,
      "ExpeditedClaimTime": 13.08,
      "ExpeditedCost": 20200.0
    },
    "Buy": {
      "Crusader Showroom, Orison": 44296876.0
    }
  },
  {
    "ClassName": "CRUS_Starlifter_C2",
    "Name": "Crusader C2 Hercules Starlifter",
    "Description": "Utilizing the patented Hercules military-grade spaceframe and expanding cargo capacity, while sacrificing barely any firepower, the C2 has taken the private sector by storm. It has become the industry standard for racing teams, ship dealers and manufacturers, construction orgs, mining corporations, and even large-scale touring entertainment outfits.",
    "Career": "Transporter",
    "Role": "Courier",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 696.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 9.0,
      "PersonalInventory": 2.89
    },
    "Crew": 2,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 3139240.06,
    "ComponentsMass": 164360.0,
    "Dimensions": {
      "Length": 94.0,
      "Width": 70.0,
      "Height": 23.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 45000.0
        },
        "Parts": {
          "Tail_Left": 3600.0,
          "Tail_Right": 3600.0,
          "Wing_Left": 6600.0,
          "Wing_Right": 6600.0,
          "Nose_Mesh": 7000.0,
          "front_door_left": 4500.0,
          "front_door_right": 4500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_smaller_right": 22200.0,
          "thruster_main_smaller_left": 22200.0,
          "thruster_main_small_right": 22200.0,
          "thruster_main_small_left": 22200.0,
          "thruster_main_right_2": 22200.0,
          "thruster_main_right_1": 22200.0,
          "thruster_main_left_2": 22200.0,
          "thruster_main_left_1": 22200.0
        },
        "Retro": {
          "thruster_retro_right": 22200.0,
          "thruster_retro_left": 22200.0
        },
        "Vtol": {
          "thruster_VTOL_wing_left": 22200.0,
          "thruster_VTOL_wing_right": 22200.0,
          "thruster_VTOL_side_right": 22200.0,
          "thruster_VTOL_side_left": 22200.0
        },
        "Maneuvering": {
          "thruster_top_rear_right": 22200.0,
          "thruster_top_rear_left": 22200.0,
          "thruster_top_mid_right": 22200.0,
          "thruster_top_mid_left": 22200.0,
          "thruster_side_rear_right": 22200.0,
          "thruster_side_rear_left": 22200.0,
          "thruster_side_front_right": 22200.0,
          "thruster_side_front_left": 22200.0,
          "thruster_bottom_rear_right": 22200.0,
          "thruster_bottom_rear_left": 22200.0,
          "thruster_bottom_front_left": 22200.0,
          "thruster_top_front_left": 22200.0,
          "thruster_bottom_front_right": 22200.0,
          "thruster_top_front_right": 22200.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 160.0,
      "MaxSpeed": 950.0,
      "Pitch": 20.0,
      "Yaw": 18.0,
      "Roll": 30.0,
      "IsVtolAssisted": true,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 217148286.0,
        "Retro": 13400000.0,
        "Vtol": 57937750.0,
        "Maneuvering": 195000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.1,
        "Retro": 2.0,
        "Strafe": 2.5,
        "Up": 2.5,
        "Down": 2.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 7.0,
        "ScmMode": {
          "BoostSpeedForward": 320.0,
          "BoostSpeedBackward": 170.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 132000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 6600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 10.0,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 21576.317,
        "Retro": 1675.0,
        "Vtol": 7242.219,
        "Maneuvering": 24375.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 17996.0,
        "SCMActive": 21202.0,
        "NAV": 33443.0
      },
      "Infrared": {
        "Start": 14049.0
      },
      "CrossSection": {
        "Front": 5495.0,
        "Side": 17032.0,
        "Top": 23078.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 112200.0,
      "PilotBurstDPS": 3073.0,
      "TurretsBurstDPS": 3687.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 32.7,
      "ExpeditedClaimTime": 10.9,
      "ExpeditedCost": 17580.0
    },
    "Buy": {
      "Astro Armada, Area 18": 18900000.0,
      "Crusader Showroom, Orison": 18900000.0
    }
  },
  {
    "ClassName": "CRUS_Starlifter_M2",
    "Name": "Crusader M2 Hercules Starlifter",
    "Description": "The M2 Hercules is the UEE's premier tactical starlifter. The large-scale transport's potent combination of capacity, maneuverability, durability, and robust weapons package assures your cargo and crew get to where they’re going in one piece.",
    "Career": "Transporter",
    "Role": "Courier",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 522.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 18.0,
      "PersonalInventory": 3.43
    },
    "Crew": 3,
    "WeaponCrew": 3,
    "OperationsCrew": 0,
    "Mass": 3139240.06,
    "ComponentsMass": 161570.0,
    "Dimensions": {
      "Length": 94.0,
      "Width": 70.0,
      "Height": 23.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.45,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 58500.0
        },
        "Parts": {
          "Tail_Left": 4680.0,
          "Tail_Right": 4680.0,
          "Wing_Left": 7930.0,
          "Wing_Right": 7930.0,
          "Nose_Mesh": 9100.0,
          "front_door_left": 4500.0,
          "front_door_right": 4500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_smaller_right": 22200.0,
          "thruster_main_smaller_left": 22200.0,
          "thruster_main_small_right": 22200.0,
          "thruster_main_small_left": 22200.0,
          "thruster_main_right_2": 22200.0,
          "thruster_main_right_1": 22200.0,
          "thruster_main_left_2": 22200.0,
          "thruster_main_left_1": 22200.0
        },
        "Retro": {
          "thruster_retro_right": 22200.0,
          "thruster_retro_left": 22200.0
        },
        "Vtol": {
          "thruster_VTOL_wing_left": 22200.0,
          "thruster_VTOL_wing_right": 22200.0,
          "thruster_VTOL_side_right": 22200.0,
          "thruster_VTOL_side_left": 22200.0
        },
        "Maneuvering": {
          "thruster_top_rear_right": 22200.0,
          "thruster_top_rear_left": 22200.0,
          "thruster_top_mid_right": 22200.0,
          "thruster_top_mid_left": 22200.0,
          "thruster_side_rear_right": 22200.0,
          "thruster_side_rear_left": 22200.0,
          "thruster_side_front_right": 22200.0,
          "thruster_side_front_left": 22200.0,
          "thruster_bottom_rear_right": 22200.0,
          "thruster_bottom_rear_left": 22200.0,
          "thruster_bottom_front_left": 22200.0,
          "thruster_top_front_left": 22200.0,
          "thruster_bottom_front_right": 22200.0,
          "thruster_top_front_right": 22200.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 160.0,
      "MaxSpeed": 950.0,
      "Pitch": 20.0,
      "Yaw": 18.0,
      "Roll": 30.0,
      "IsVtolAssisted": true,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 217148286.0,
        "Retro": 13400000.0,
        "Vtol": 57937750.0,
        "Maneuvering": 195000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.1,
        "Retro": 2.0,
        "Strafe": 2.5,
        "Up": 2.5,
        "Down": 2.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 7.0,
        "ScmMode": {
          "BoostSpeedForward": 320.0,
          "BoostSpeedBackward": 170.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 132000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 6600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 10.0,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 21576.317,
        "Retro": 1675.0,
        "Vtol": 7242.219,
        "Maneuvering": 24375.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 23403.0,
        "SCMActive": 27689.0,
        "NAV": 38850.0
      },
      "Infrared": {
        "Start": 20679.0
      },
      "CrossSection": {
        "Front": 7564.0,
        "Side": 23448.0,
        "Top": 31768.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 104400.0,
      "PilotBurstDPS": 3073.0,
      "TurretsBurstDPS": 5738.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 25.0,
      "ExpeditedClaimTime": 8.0,
      "ExpeditedCost": 1810.0
    },
    "Buy": {
      "Crusader Showroom, Orison": 29484000.0,
      "New Deal, Lorville": 29484000.0
    }
  },
  {
    "ClassName": "CRUS_Star_Runner",
    "Name": "Crusader Mercury Star Runner",
    "Description": "If you need it there fast and unscathed, the Mercury checks all the boxes expected of a dependable courier vessel and then some. Built with the same engineering and design principles that have made Crusader Industries the go-to manufacturer for galactic transport on any scale, the Mercury Star Runner will let you stay ahead of schedule, trouble, and the competition.",
    "Career": "Transporter",
    "Role": "Medium Freight",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 114.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 5.93
    },
    "Crew": 1,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 680575.0,
    "ComponentsMass": 46872.0,
    "Dimensions": {
      "Length": 56.0,
      "Width": 51.0,
      "Height": 16.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 12000.0
        },
        "Parts": {
          "body": 12000.0,
          "wing_right": 6600.0,
          "wing_left": 6600.0,
          "body_engine": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_extra_right": 18500.0,
          "thruster_main_extra_left": 18500.0,
          "thruster_main_right": 18500.0,
          "thruster_main_left": 18500.0
        },
        "Retro": {
          "thruster_retro_right": 18500.0,
          "thruster_retro_left": 18500.0
        },
        "Vtol": {
          "thruster_vtol_rear_bottom_right": 18500.0,
          "thruster_vtol_front_bottom_right": 18500.0,
          "thruster_vtol_rear_bottom_left": 18500.0,
          "thruster_vtol_front_bottom_left": 18500.0
        },
        "Maneuvering": {
          "thruster_mav_rear_top_right": 18500.0,
          "thruster_mav_rear_side_right": 18500.0,
          "thruster_mav_front_top_right": 18500.0,
          "thruster_mav_front_side_right": 18500.0,
          "thruster_mav_rear_top_left": 18500.0,
          "thruster_mav_rear_side_left": 18500.0,
          "thruster_mav_front_top_left": 18500.0,
          "thruster_mav_front_side_left": 18500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 215.0,
      "MaxSpeed": 1200.0,
      "Pitch": 30.0,
      "Yaw": 30.0,
      "Roll": 60.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 44750000.0,
        "Retro": 22350000.0,
        "Vtol": 9854624.0,
        "Maneuvering": 30799640.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 6.3,
        "Retro": 3.1,
        "Strafe": 2.6,
        "Up": 3.1,
        "Down": 2.6
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 410.0,
          "BoostSpeedBackward": 205.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.5,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 100000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 2600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 5593.75,
        "Retro": 2793.75,
        "Vtol": 1231.828,
        "Maneuvering": 3849.955
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 12091.0,
        "SCMActive": 14493.0,
        "NAV": 27571.0
      },
      "Infrared": {
        "Start": 14399.0
      },
      "CrossSection": {
        "Front": 5106.0,
        "Side": 16023.0,
        "Top": 17608.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 56100.0,
      "PilotBurstDPS": 1091.0,
      "TurretsBurstDPS": 2182.0,
      "TotalMissilesDmg": 11734.0
    },
    "Insurance": {
      "StandardClaimTime": 21.0,
      "ExpeditedClaimTime": 7.0,
      "ExpeditedCost": 9393.0
    },
    "Buy": {
      "Crusader Showroom, Orison": 12285000.0
    }
  },
  {
    "ClassName": "DRAK_Buccaneer",
    "Name": "Drake Buccaneer",
    "Description": "The Buccaneer has been designed from the ground up to fly and fight the way you live. No leather interiors or hyperpillows here: the Bucc is a scrapper designed to maneuver and fight above its weight class. This rough-and-tumble frontier fighter can be maintained in the worst of conditions in order to keep real, working space crews alive.",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.25,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 36527.0,
    "ComponentsMass": 7333.0,
    "Dimensions": {
      "Length": 15.0,
      "Width": 16.0,
      "Height": 4.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 1800.0,
          "Nose": 1800.0
        },
        "Parts": {
          "Rear_Landing_Gear_Door_Left": 300.0,
          "Rear_Landing_Gear_Door_Bottom": 300.0,
          "Rear_Landing_Gear_Door_Right": 300.0,
          "Engine_Left": 1000.0,
          "Wing_Left": 400.0,
          "Engine_Right": 1000.0,
          "Wing_Right": 400.0,
          "intake_left": 400.0,
          "intake_right": 400.0,
          "tailFlap_left": 40.0,
          "tailFlap_right": 40.0,
          "landing_gear_left_attach": 200.0,
          "landing_gear_right_attach": 200.0,
          "Front_Landing_Gear_Door_Center": 100.0,
          "Front_Landing_Gear_Door_Left": 100.0,
          "Front_Landing_Gear_Door_Right": 100.0,
          "Cockpit_Canopy_Door": 100.0,
          "landing_gear_front_attach": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "Left_Main_Thruster": 10750.0,
          "Right_Main_Thruster": 10750.0
        },
        "Retro": {
          "Left_Main_Retro": 9850.0,
          "Right_Main_Retro": 9850.0
        },
        "Maneuvering": {
          "Man_Thruster_Left_Main_Front_X-": 9150.0,
          "Man_Thruster_Left_Main_Front_Z+": 9150.0,
          "Man_Thruster_Left_Main_Rear_Bot_X-": 9150.0,
          "Man_Thruster_Left_Main_Rear_Bot_Z+": 9150.0,
          "Man_Thruster_Left_Main_Rear_Top_X-": 9150.0,
          "Man_Thruster_Left_Main_Top_Front_Z-": 9150.0,
          "Man_Thruster_Left_Main_Top_Rear_Z-": 9150.0,
          "Man_Thruster_Right_Main_Bot_Front_Z+": 9150.0,
          "Man_Thruster_Right_Main_Bot_Rear_Z+": 9150.0,
          "Man_Thruster_Right_Main_Front_X+": 9150.0,
          "Man_Thruster_Right_Main_Rear_Bot_X+": 9150.0,
          "Man_Thruster_Right_Main_Rear_Top_X+": 9150.0,
          "Man_Thruster_Right_Main_Top_Front_Z-": 9150.0,
          "Man_Thruster_Right_Main_Top_Rear_Z-": 9150.0,
          "Man_Thruster_Left_Intake_Bot_Z+": 9150.0,
          "Man_Thruster_Left_Intake_Top_Z-": 9150.0,
          "Man_Thruster_Right_Intake_Bot_Z+": 9150.0,
          "Man_Thruster_Right_Intake_Top_Z-": 9150.0,
          "Man_Thruster_Cockpit_Bot_X-": 9150.0,
          "Man_Thruster_Cockpit_Bot_X+": 9150.0,
          "Man_Thruster_Cockpit_Bot_Z+": 9150.0,
          "Man_Thruster_Cockpit_Top_X-": 9150.0,
          "Man_Thruster_Cockpit_Top_X+": 9150.0,
          "Man_Thruster_Cockpit_Top_Z-": 9150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 240.0,
      "MaxSpeed": 1400.0,
      "Pitch": 50.0,
      "Yaw": 42.0,
      "Roll": 160.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 6240000.0,
        "Retro": 1456000.0,
        "Vtol": 0.0,
        "Maneuvering": 8990400.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 15.0,
        "Retro": 3.5,
        "Strafe": 4.5,
        "Up": 6.0,
        "Down": 3.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 600.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.7,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 25.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.4,
        "RegenerationTime": 33.3,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 7500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 30.0
      },
      "FuelUsagePerSecond": {
        "Main": 780.0,
        "Retro": 182.0,
        "Vtol": 0.0,
        "Maneuvering": 1123.8
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 7010.0,
        "SCMActive": 8332.0,
        "NAV": 14543.0
      },
      "Infrared": {
        "Start": 8915.0
      },
      "CrossSection": {
        "Front": 2439.0,
        "Side": 9145.0,
        "Top": 8535.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1500.0,
      "PilotBurstDPS": 2760.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 8098.0
    },
    "Insurance": {
      "StandardClaimTime": 5.4,
      "ExpeditedClaimTime": 1.8,
      "ExpeditedCost": 2700.0
    },
    "Buy": {
      "New Deal, Lorville": 1663200.0
    }
  },
  {
    "ClassName": "DRAK_Caterpillar",
    "Name": "Drake Caterpillar",
    "Description": "First introduced in 2871, Drake Interplanetary's Caterpillar has long proven to be a reliable, cost-effective multi-role vessel, capable of being outfitted for everything from mercantile operations to combat support. Long hailed as a hard-fought alternative to the ubiquitous Hull series, the Caterpillar is a freighter that doesn't skimp on weaponry or customization.",
    "Career": "Transporter",
    "Role": "Medium Freight",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 576.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 12.99
    },
    "Crew": 1,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 1508063.0,
    "ComponentsMass": 172110.0,
    "Dimensions": {
      "Length": 111.5,
      "Width": 39.5,
      "Height": 13.4
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 60000.0
        },
        "Parts": {
          "Engine_Center_Left": 1500.0,
          "Engine_Center_Right": 1500.0,
          "Engine_Right": 1500.0,
          "Engine_Left": 1500.0,
          "Command_Module": 1200.0,
          "Nose": 25500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_center_left": 14500.0,
          "thruster_main_center_right": 14500.0,
          "thruster_main_right": 14500.0,
          "thruster_main_left": 14500.0
        },
        "Retro": {
          "thruster_set2_retro_bottom": 13850.0,
          "thruster_set1_retro_bottom": 13850.0,
          "thruster_set1_retro_top_left": 13850.0,
          "thruster_set1_retro_top_right": 13850.0,
          "thruster_set2_retro_top_left": 13850.0,
          "thruster_set2_retro_top_right": 13850.0
        },
        "Maneuvering": {
          "thruster_set3_bottom_A": 13670.0,
          "thruster_set3_bottom_B": 13670.0,
          "thruster_set3_bottom_left": 13670.0,
          "thruster_set3_bottom_right": 13670.0,
          "thruster_set3_top": 13670.0,
          "thruster_set3_top_left": 13670.0,
          "thruster_set3_top_right": 13670.0,
          "thruster_set4_top": 13670.0,
          "thruster_set4_top_left": 13670.0,
          "thruster_set4_top_right": 13670.0,
          "thruster_set4_bottom_right": 13670.0,
          "thruster_set4_bottom_B": 13670.0,
          "thruster_set4_bottom_left": 13670.0,
          "thruster_set4_bottom_A": 13670.0,
          "thruster_set1_bottom_A": 13670.0,
          "thruster_set1_bottom_B": 13670.0,
          "thruster_set1_bottom_left": 13670.0,
          "thruster_set1_bottom_right": 13670.0,
          "thruster_set1_top": 13670.0,
          "thruster_set1_top_left": 13670.0,
          "thruster_set1_top_right": 13670.0,
          "thruster_set2_bottom_A": 13670.0,
          "thruster_set2_bottom_B": 13670.0,
          "thruster_set2_bottom_left": 13670.0,
          "thruster_set2_bottom_right": 13670.0,
          "thruster_set2_top": 13670.0,
          "thruster_set2_top_left": 13670.0,
          "thruster_set2_top_right": 13670.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 130.0,
      "MaxSpeed": 900.0,
      "Pitch": 16.0,
      "Yaw": 16.0,
      "Roll": 25.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 58800000.0,
        "Retro": 25200000.0,
        "Vtol": 0.0,
        "Maneuvering": 109200000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 3.6,
        "Retro": 1.5,
        "Strafe": 1.5,
        "Up": 2.0,
        "Down": 1.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 7.0,
        "ScmMode": {
          "BoostSpeedForward": 300.0,
          "BoostSpeedBackward": 120.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.3,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 250500000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 8600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 7.5,
        "Vtol": 0.0,
        "Maneuvering": 35.0
      },
      "FuelUsagePerSecond": {
        "Main": 7350.0,
        "Retro": 3150.0,
        "Vtol": 0.0,
        "Maneuvering": 13650.0
      },
      "IntakeToMainFuelRatio": 0.68,
      "TimeForIntakesToFillTank": 5010000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 26726.0,
        "SCMActive": 31926.0,
        "NAV": 42173.0
      },
      "Infrared": {
        "Start": 22585.0
      },
      "CrossSection": {
        "Front": 5952.0,
        "Side": 12362.0,
        "Top": 45786.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 168300.0,
      "PilotBurstDPS": 2458.0,
      "TurretsBurstDPS": 3272.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 18.63,
      "ExpeditedClaimTime": 6.21,
      "ExpeditedCost": 7730.0
    },
    "Buy": {
      "New Deal, Lorville": 12474000.0
    }
  },
  {
    "ClassName": "DRAK_Corsair",
    "Name": "Drake Corsair",
    "Description": "Heed the call of uncharted space and harness the spirit of exploration with the Drake Corsair. Utilizing a unique asymmetrical hull design, this versatile explorer can go wherever the winds of adventure may steer you.",
    "Career": "Exploration",
    "Role": "Expedition",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 72.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 5.6
    },
    "Crew": 4,
    "WeaponCrew": 3,
    "OperationsCrew": 0,
    "Mass": 380456.0,
    "ComponentsMass": 74542.0,
    "Dimensions": {
      "Length": 55.0,
      "Width": 56.0,
      "Height": 11.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 15000.0
        },
        "Parts": {
          "landing_gear_door_front_left_a": 300.0,
          "landing_gear_door_front_left_b": 300.0,
          "landing_gear_door_front_right_a": 300.0,
          "landing_gear_door_front_right_b": 300.0,
          "nose": 15000.0,
          "yaw_mesh_base": 2500.0,
          "pitch_mesh": 300.0,
          "tail": 15000.0,
          "nacelle_left_mesh": 12500.0,
          "wing_top_hinge_mesh": 2500.0,
          "wing_bottom_hinge_b_mesh": 2500.0,
          "nacelle_right_mesh": 12500.0,
          "right_wing_mesh": 5000.0,
          "rignt_wing_tip_antenna_mesh": 500.0,
          "right_wing_top_flap_mesh": 500.0,
          "rear_rail_door_mesh": 500.0,
          "front_rail_door_mesh": 500.0,
          "right_wing_bottom_flap_mesh": 500.0,
          "right_wing_rotator_mesh": 2500.0,
          "landing_gear_door_left_rotator_mesh": 500.0,
          "landing_gear_door_left_slider_mesh": 500.0,
          "landing_gear_door_right_rotator_mesh": 500.0,
          "landing_gear_door_right_slider_mesh": 500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster_a_left": 24000.0,
          "main_thruster_c_left": 24000.0,
          "main_thruster_b_left": 24000.0,
          "main_thruster_b_right": 24000.0,
          "main_thruster_a_right": 24000.0,
          "main_thruster_c_right": 24000.0
        },
        "Retro": {
          "retro_thruster_a_left": 30000.0,
          "retro_thruster_b_left": 30000.0,
          "retro_thruster_c_left": 30000.0,
          "retro_thruster_a_right": 30000.0,
          "retro_thruster_b_right": 30000.0,
          "retro_thruster_c_right": 30000.0
        },
        "Maneuvering": {
          "thruster_mav_body_left_bottom": 30000.0,
          "thruster_mav_body_left_bottom_side": 30000.0,
          "thruster_mav_body_right_bottom": 30000.0,
          "thruster_mav_body_right_bottom_side": 30000.0,
          "thruster_mav_nose_left_bottom": 30000.0,
          "thruster_mav_nose_left_bottom_side": 30000.0,
          "thruster_mav_nose_left_top": 30000.0,
          "thruster_mav_nose_left_top_side": 30000.0,
          "thruster_mav_nose_right_bottom": 30000.0,
          "thruster_mav_nose_right_bottom_side": 30000.0,
          "thruster_mav_nose_right_top": 30000.0,
          "thruster_mav_nose_right_top_side": 30000.0,
          "thruster_mav_nacelle_left_bottom": 30000.0,
          "thruster_mav_nacelle_left_top": 30000.0,
          "thruster_mav_nacelle_right_bottom": 30000.0,
          "thruster_mav_nacelle_right_top": 30000.0,
          "thruster_mav_tail_left_bottom_side": 30000.0,
          "thruster_mav_tail_left_bottom": 30000.0,
          "thruster_mav_tail_left_top_side": 30000.0,
          "thruster_mav_tail_left_top": 30000.0,
          "thruster_mav_tail_right_top": 30000.0,
          "thruster_mav_tail_right_top_side": 30000.0,
          "thruster_mav_tail_right_bottom_side": 30000.0,
          "thruster_mav_tail_right_bottom": 30000.0,
          "thruster_mav_body_left_top": 30000.0,
          "thruster_mav_body_right_top_side": 30000.0,
          "thruster_mav_body_right_top": 30000.0,
          "thruster_mav_body_left_top_side": 30000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1000.0,
      "Pitch": 30.0,
      "Yaw": 30.0,
      "Roll": 60.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 23190000.0,
        "Retro": 11580000.0,
        "Vtol": 0.0,
        "Maneuvering": 48720000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.1,
        "Retro": 2.5,
        "Strafe": 2.5,
        "Up": 3.1,
        "Down": 2.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 205.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.5,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 116000000.0,
      "FuelIntakeRate": 54.0,
      "QuantumFuelCapacity": 5200000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 7.5,
        "Retro": 7.5,
        "Vtol": 0.0,
        "Maneuvering": 35.0
      },
      "FuelUsagePerSecond": {
        "Main": 2898.75,
        "Retro": 1447.5,
        "Vtol": 0.0,
        "Maneuvering": 6090.0
      },
      "IntakeToMainFuelRatio": 1.86,
      "TimeForIntakesToFillTank": 2148148.15
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 18451.0,
        "SCMActive": 22163.0,
        "NAV": 33931.0
      },
      "Infrared": {
        "Start": 21722.0
      },
      "CrossSection": {
        "Front": 3737.0,
        "Side": 12794.0,
        "Top": 29117.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 10.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 48800.0,
      "PilotBurstDPS": 7174.0,
      "TurretsBurstDPS": 1968.0,
      "TotalMissilesDmg": 20211.0
    },
    "Insurance": {
      "StandardClaimTime": 17.01,
      "ExpeditedClaimTime": 5.67,
      "ExpeditedCost": 6805.0
    },
    "Dimensions2": {
      "Length": 55.0,
      "Width": 27.0,
      "Height": 31.0
    },
    "Buy": {
      "New Deal, Lorville": 6552000.0
    }
  },
  {
    "ClassName": "DRAK_Cutlass_Black",
    "Name": "Drake Cutlass Black",
    "Description": "Drake Interplanetary claims that the Cutlass Black is a low-cost, easy-to-maintain solution for local in-system militia units. The larger-than-average cargo hold, RIO seat and dedicated tractor mount are, the company literature insists, for facilitating search and rescue operations.",
    "Career": "Multi-Role",
    "Role": "Medium Fighter / Medium Freight",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 46.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 3.0,
      "PersonalInventory": 3.68
    },
    "Crew": 3,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 242177.0,
    "ComponentsMass": 11030.0,
    "Dimensions": {
      "Length": 36.0,
      "Width": 26.5,
      "Height": 14.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 6500.0,
          "Tail": 6500.0
        },
        "Parts": {
          "Wing_Left": 1500.0,
          "Wing_Right": 1500.0,
          "Canopy": 1000.0,
          "Thruster_Main_Base_Left": 480.0,
          "Thruster_Main_Left": 5000.0,
          "Thruster_Main_Base_Right": 480.0,
          "Thruster_Main_Right": 5000.0,
          "Missile_Housing_Right": 900.0,
          "Missile_Housing_Left": 900.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "Main_Thruster_Left": 11500.0,
          "Main_Thruster_Right": 11500.0
        },
        "Retro": {
          "Main_Retro_Left": 12340.0,
          "Main_Retro_Right": 12340.0
        },
        "Maneuvering": {
          "Man_Thruster_Left_Front": 10240.0,
          "Man_Thruster_Right_Front": 10240.0,
          "Man_Thruster_Left_Outer_Bot": 10240.0,
          "Man_Thruster_Left_Outer_Top": 10240.0,
          "Man_Thruster_Left_Wing_Bot": 10240.0,
          "Man_Thruster_Left_Wing_Top": 10240.0,
          "Man_Thruster_Right_Outer_Bot": 10240.0,
          "Man_Thruster_Right_Outer_Top": 10240.0,
          "Man_Thruster_Right_Wing_Bot": 10240.0,
          "Man_Thruster_Right_Wing_Top": 10240.0,
          "Man_Thruster_Right_Rear": 10240.0,
          "Man_Thruster_Right_Center": 10240.0,
          "Man_Thruster_Left_Rear": 10240.0,
          "Man_Thruster_Left_Center": 10240.0,
          "Man_Thruster_Center_Top": 10240.0,
          "Man_Thruster_Center_Bot": 10240.0,
          "Man_Thruster_Left_Front_Bot": 10240.0,
          "Man_Thruster_Left_Front_Top": 10240.0,
          "Man_Thruster_Left_Rear_Bot": 10240.0,
          "Man_Thruster_Left_Rear_Top": 10240.0,
          "Man_Thruster_Right_Front_Bot": 10240.0,
          "Man_Thruster_Right_Front_Top": 10240.0,
          "Man_Thruster_Right_Rear_Bot": 10240.0,
          "Man_Thruster_Right_Rear_Top": 10240.0,
          "Man_Thruster_Left_Tail": 10240.0,
          "Man_Thruster_Right_Tail": 10240.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 217.0,
      "MaxSpeed": 1150.0,
      "Pitch": 47.0,
      "Yaw": 39.0,
      "Roll": 137.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 18830926.0,
        "Retro": 2920000.0,
        "Vtol": 0.0,
        "Maneuvering": 69970000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.3,
        "Retro": 3.8,
        "Strafe": 8.0,
        "Up": 8.2,
        "Down": 4.1,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 465.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 2800.0,
        "CapacitorRegenPerSec": 100.0,
        "CapacitorIdleCost": 20.0,
        "CapacitorLinearCost": 1.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 28.0,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 36000000.0,
      "FuelIntakeRate": 20.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 32.5
      },
      "FuelUsagePerSecond": {
        "Main": 2353.866,
        "Retro": 365.0,
        "Vtol": 0.0,
        "Maneuvering": 8746.25
      },
      "IntakeToMainFuelRatio": 0.85,
      "TimeForIntakesToFillTank": 1800000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 8156.0,
        "SCMActive": 10143.0,
        "NAV": 23636.0
      },
      "Infrared": {
        "Start": 10279.0
      },
      "CrossSection": {
        "Front": 4690.0,
        "Side": 8886.0,
        "Top": 13713.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4130.0,
      "PilotBurstDPS": 2105.0,
      "TurretsBurstDPS": 1091.0,
      "TotalMissilesDmg": 33573.0
    },
    "Insurance": {
      "StandardClaimTime": 9.99,
      "ExpeditedClaimTime": 3.33,
      "ExpeditedCost": 6251.0
    },
    "Buy": {
      "New Deal, Lorville": 2116800.0
    }
  },
  {
    "ClassName": "DRAK_Cutlass_Blue",
    "Name": "Drake Cutlass Blue",
    "Description": "Sleek, mean, and royal. The Cutlass Blue adds missiles, a more aggressive engine, and Durasteel holding cells in the cargo bay to the standard model. The Cutlass Blue is the outworld militia standard ship of choice for patrols.",
    "Career": "Multi-Role",
    "Role": "Medium Fighter / Medium Freight",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 12.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 3.0,
      "PersonalInventory": 2.78
    },
    "Crew": 3,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 222300.0,
    "ComponentsMass": 13234.0,
    "Dimensions": {
      "Length": 36.0,
      "Width": 26.5,
      "Height": 14.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 6500.0
        },
        "Parts": {
          "Wing_Right": 1880.0,
          "Wing_Left": 1880.0,
          "Canopy": 6250.0,
          "Tail": 6500.0,
          "Thruster_Main_Base_Left": 480.0,
          "Thruster_Main_Left": 5000.0,
          "Thruster_Main_Base_Right": 480.0,
          "Thruster_Main_Right": 5000.0,
          "Missile_Housing_Left": 900.0,
          "Missile_Housing_Right": 900.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "Main_Thruster_Left": 11500.0,
          "Main_Thruster_Right": 11500.0
        },
        "Retro": {
          "Main_Retro_Left": 12340.0,
          "Main_Retro_Right": 12340.0
        },
        "Maneuvering": {
          "Man_Thruster_Right_Front": 10240.0,
          "Man_Thruster_Left_Front": 10240.0,
          "Man_Thruster_Right_Outer_Bot": 10240.0,
          "Man_Thruster_Right_Wing_Bot": 10240.0,
          "Man_Thruster_Right_Wing_Top": 10240.0,
          "Man_Thruster_Right_Outer_Top": 10240.0,
          "Man_Thruster_Left_Wing_Top": 10240.0,
          "Man_Thruster_Left_Outer_Bot": 10240.0,
          "Man_Thruster_Left_Outer_Top": 10240.0,
          "Man_Thruster_Left_Wing_Bot": 10240.0,
          "Man_Thruster_Right_Tail": 10240.0,
          "Man_Thruster_Left_Tail": 10240.0,
          "Man_Thruster_Left_Rear_Top": 10240.0,
          "Man_Thruster_Left_Rear_Bot": 10240.0,
          "Man_Thruster_Left_Front_Top": 10240.0,
          "Man_Thruster_Left_Front_Bot": 10240.0,
          "Man_Thruster_Right_Rear_Top": 10240.0,
          "Man_Thruster_Right_Rear_Bot": 10240.0,
          "Man_Thruster_Right_Front_Top": 10240.0,
          "Man_Thruster_Right_Front_Bot": 10240.0,
          "Man_Thruster_Center_Top": 10240.0,
          "Man_Thruster_Left_Rear": 10240.0,
          "Man_Thruster_Right_Rear": 10240.0,
          "Man_Thruster_Left_Center": 10240.0,
          "Man_Thruster_Right_Center": 10240.0,
          "Man_Thruster_Center_Bot": 10240.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1165.0,
      "Pitch": 45.0,
      "Yaw": 36.0,
      "Roll": 137.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 17000000.0,
        "Retro": 2220000.0,
        "Vtol": 0.0,
        "Maneuvering": 64894000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.3,
        "Retro": 3.8,
        "Strafe": 8.0,
        "Up": 8.3,
        "Down": 4.1,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 467.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 2800.0,
        "CapacitorRegenPerSec": 100.0,
        "CapacitorIdleCost": 20.0,
        "CapacitorLinearCost": 1.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 28.0,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 36000000.0,
      "FuelIntakeRate": 20.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 32.5
      },
      "FuelUsagePerSecond": {
        "Main": 2125.0,
        "Retro": 277.5,
        "Vtol": 0.0,
        "Maneuvering": 8111.75
      },
      "IntakeToMainFuelRatio": 0.94,
      "TimeForIntakesToFillTank": 1800000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 10930.0,
        "SCMActive": 16246.0,
        "NAV": 26410.0
      },
      "Infrared": {
        "Start": 10094.0
      },
      "CrossSection": {
        "Front": 5361.0,
        "Side": 10158.0,
        "Top": 15676.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 5100.0,
      "PilotBurstDPS": 1785.0,
      "TurretsBurstDPS": 1091.0,
      "TotalMissilesDmg": 40086.0
    },
    "Insurance": {
      "StandardClaimTime": 9.99,
      "ExpeditedClaimTime": 3.33,
      "ExpeditedCost": 6643.0
    },
    "Buy": {
      "New Deal, Lorville": 3704400.0
    }
  },
  {
    "ClassName": "DRAK_Cutlass_Red",
    "Name": "Drake Cutlass Red",
    "Description": "The Cutlass Red converts the standard cargo hold to a well-equiped medical facility including an Autodoc. This starbound ambulance features the Nav-E7 Echo Transponder, a long range scanner, and a Secure Plus Docking Collar, making it ideal for search and rescue. This model also features a unique Red Crossbones skin.",
    "Career": "Multi-Role",
    "Role": "Medical",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 12.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 3.0,
      "PersonalInventory": 3.43
    },
    "Crew": 2,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 222300.0,
    "ComponentsMass": 10820.0,
    "Dimensions": {
      "Length": 36.0,
      "Width": 26.5,
      "Height": 14.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 6600.0
        },
        "Parts": {
          "Wing_Right": 1880.0,
          "Wing_Left": 1880.0,
          "Canopy": 6200.0,
          "Tail": 6600.0,
          "Thruster_Main_Base_Left": 480.0,
          "Thruster_Main_Left": 5200.0,
          "Thruster_Main_Base_Right": 480.0,
          "Thruster_Main_Right": 5200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "Main_Thruster_Left": 11500.0,
          "Main_Thruster_Right": 11500.0
        },
        "Retro": {
          "Main_Retro_Left": 12340.0,
          "Main_Retro_Right": 12340.0
        },
        "Maneuvering": {
          "Man_Thruster_Center_Top": 10240.0,
          "Man_Thruster_Center_Bot": 10240.0,
          "Man_Thruster_Right_Center": 10240.0,
          "Man_Thruster_Left_Center": 10240.0,
          "Man_Thruster_Right_Front": 10240.0,
          "Man_Thruster_Left_Front": 10240.0,
          "Man_Thruster_Right_Rear": 10240.0,
          "Man_Thruster_Left_Rear": 10240.0,
          "Man_Thruster_Right_Outer_Bot": 10240.0,
          "Man_Thruster_Right_Outer_Top": 10240.0,
          "Man_Thruster_Right_Wing_Bot": 10240.0,
          "Man_Thruster_Right_Wing_Top": 10240.0,
          "Man_Thruster_Left_Wing_Top": 10240.0,
          "Man_Thruster_Left_Outer_Bot": 10240.0,
          "Man_Thruster_Left_Outer_Top": 10240.0,
          "Man_Thruster_Left_Wing_Bot": 10240.0,
          "Man_Thruster_Right_Tail": 10240.0,
          "Man_Thruster_Left_Tail": 10240.0,
          "Man_Thruster_Left_Rear_Top": 10240.0,
          "Man_Thruster_Left_Rear_Bot": 10240.0,
          "Man_Thruster_Left_Front_Top": 10240.0,
          "Man_Thruster_Left_Front_Bot": 10240.0,
          "Man_Thruster_Right_Rear_Top": 10240.0,
          "Man_Thruster_Right_Rear_Bot": 10240.0,
          "Man_Thruster_Right_Front_Top": 10240.0,
          "Man_Thruster_Right_Front_Bot": 10240.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 212.0,
      "MaxSpeed": 1125.0,
      "Pitch": 44.0,
      "Yaw": 35.0,
      "Roll": 135.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 16660000.0,
        "Retro": 2120000.0,
        "Vtol": 0.0,
        "Maneuvering": 64433000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.3,
        "Retro": 3.8,
        "Strafe": 8.0,
        "Up": 8.3,
        "Down": 4.2,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 460.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 2800.0,
        "CapacitorRegenPerSec": 100.0,
        "CapacitorIdleCost": 20.0,
        "CapacitorLinearCost": 1.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 28.0,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 36000000.0,
      "FuelIntakeRate": 20.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 32.5
      },
      "FuelUsagePerSecond": {
        "Main": 2082.5,
        "Retro": 265.0,
        "Vtol": 0.0,
        "Maneuvering": 8054.125
      },
      "IntakeToMainFuelRatio": 0.96,
      "TimeForIntakesToFillTank": 1800000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 7719.0,
        "SCMActive": 9713.0,
        "NAV": 23199.0
      },
      "Infrared": {
        "Start": 9079.0
      },
      "CrossSection": {
        "Front": 4398.0,
        "Side": 8334.0,
        "Top": 12861.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 5100.0,
      "PilotBurstDPS": 2105.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 14.99,
      "ExpeditedClaimTime": 5.0,
      "ExpeditedCost": 6310.0
    },
    "Buy": {
      "New Deal, Lorville": 2857680.0
    }
  },
  {
    "ClassName": "DRAK_Cutlass_Steel",
    "Name": "Drake Cutlass Steel",
    "Description": "With the Cutlass Steel, Drake Interplanetary has once again reinvented their classic design to create a next generation combat transport ship through the addition of dedicated jump seats and an expanded arsenal. It’s a dangerous ‘verse out there, and the Cutlass Steel is ready to cut a path through whatever stands in the way of you and your dedicated crew. ",
    "Career": "Combat",
    "Role": "Drop Ship",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 2.78
    },
    "Crew": 3,
    "WeaponCrew": 7,
    "OperationsCrew": 0,
    "Mass": 242177.0,
    "ComponentsMass": 25930.0,
    "Dimensions": {
      "Length": 36.0,
      "Width": 26.5,
      "Height": 14.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 9400.0,
          "Tail": 6500.0
        },
        "Parts": {
          "Wing_Left": 1500.0,
          "Wing_Right": 1500.0,
          "Canopy": 1000.0,
          "Thruster_Main_Base_Left": 480.0,
          "Thruster_Main_Left": 5000.0,
          "Thruster_Main_Base_Right": 480.0,
          "Thruster_Main_Right": 5000.0,
          "Missile_Housing_Right": 900.0,
          "Missile_Housing_Left": 900.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "Main_Thruster_Left": 11500.0,
          "Main_Thruster_Right": 11500.0
        },
        "Retro": {
          "Main_Retro_Left": 12340.0,
          "Main_Retro_Right": 12340.0
        },
        "Maneuvering": {
          "Man_Thruster_Left_Front": 10240.0,
          "Man_Thruster_Right_Front": 10240.0,
          "Man_Thruster_Left_Outer_Bot": 10240.0,
          "Man_Thruster_Left_Outer_Top": 10240.0,
          "Man_Thruster_Left_Wing_Bot": 10240.0,
          "Man_Thruster_Left_Wing_Top": 10240.0,
          "Man_Thruster_Right_Outer_Bot": 10240.0,
          "Man_Thruster_Right_Outer_Top": 10240.0,
          "Man_Thruster_Right_Wing_Bot": 10240.0,
          "Man_Thruster_Right_Wing_Top": 10240.0,
          "Man_Thruster_Right_Rear": 10240.0,
          "Man_Thruster_Right_Center": 10240.0,
          "Man_Thruster_Left_Rear": 10240.0,
          "Man_Thruster_Left_Center": 10240.0,
          "Man_Thruster_Center_Top": 10240.0,
          "Man_Thruster_Center_Bot": 10240.0,
          "Man_Thruster_Left_Front_Bot": 10240.0,
          "Man_Thruster_Left_Front_Top": 10240.0,
          "Man_Thruster_Left_Rear_Bot": 10240.0,
          "Man_Thruster_Left_Rear_Top": 10240.0,
          "Man_Thruster_Right_Front_Bot": 10240.0,
          "Man_Thruster_Right_Front_Top": 10240.0,
          "Man_Thruster_Right_Rear_Bot": 10240.0,
          "Man_Thruster_Right_Rear_Top": 10240.0,
          "Man_Thruster_Left_Tail": 10240.0,
          "Man_Thruster_Right_Tail": 10240.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1100.0,
      "Pitch": 35.0,
      "Yaw": 30.0,
      "Roll": 100.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 18638648.0,
        "Retro": 2115366.0,
        "Vtol": 0.0,
        "Maneuvering": 50322622.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 9.7,
        "Retro": 3.3,
        "Strafe": 3.9,
        "Up": 5.5,
        "Down": 5.9,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 420.0,
          "BoostSpeedBackward": 240.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.2,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.2,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.2,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 36000000.0,
      "FuelIntakeRate": 20.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 32.5
      },
      "FuelUsagePerSecond": {
        "Main": 2329.831,
        "Retro": 264.421,
        "Vtol": 0.0,
        "Maneuvering": 6290.328
      },
      "IntakeToMainFuelRatio": 0.86,
      "TimeForIntakesToFillTank": 1800000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 8174.0,
        "SCMActive": 10169.0,
        "NAV": 23654.0
      },
      "Infrared": {
        "Start": 10399.0
      },
      "CrossSection": {
        "Front": 4919.0,
        "Side": 9320.0,
        "Top": 14383.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4740.0,
      "PilotBurstDPS": 2105.0,
      "TurretsBurstDPS": 1747.0,
      "TotalMissilesDmg": 33573.0
    },
    "Insurance": {
      "StandardClaimTime": 11.99,
      "ExpeditedClaimTime": 4.0,
      "ExpeditedCost": 7051.0
    },
    "Buy": {
      "New Deal, Lorville": 3997350.0
    }
  },
  {
    "ClassName": "DRAK_Cutter",
    "Name": "Drake Cutter",
    "Description": "Designed for hard-working folks of all stripes, the Cutter packs 4 SCU of cargo room and plenty of wallop into a rough and tumble, compact frame. It's a ship that truly embodies the spirit of Drake: that no matter who you are or what you do, you can reach the stars.",
    "Career": "Starter",
    "Role": "Starter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 4.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.9,
      "PersonalInventory": 0.93
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 81677.0,
    "ComponentsMass": 7295.2,
    "Dimensions": {
      "Length": 20.0,
      "Width": 13.0,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 6500.0
        },
        "Parts": {
          "body_armour_top": 1500.0,
          "vtol_r_geo": 3000.0,
          "debrisproxy_spoiler_left": 50.0,
          "debrisproxy_spoiler_right": 50.0,
          "nose": 3000.0,
          "vtol_l_geo": 3000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_aux_right": 9000.0,
          "thruster_aux_left": 9000.0
        },
        "Retro": {
          "thruster_auxretro_right": 9000.0,
          "thruster_auxretro_left": 9000.0,
          "thruster_retro_right": 9000.0,
          "thruster_retro_left": 9000.0
        },
        "Vtol": {
          "thruster_main_vtol_right": 9000.0,
          "thruster_main_vtol_left": 9000.0
        },
        "Maneuvering": {
          "thruster_rear_top_right": 9000.0,
          "thruster_rear_top_left": 9000.0,
          "thruster_rear_side_right": 9000.0,
          "thruster_rear_side_left": 9000.0,
          "thruster_rear_bottom_right": 9000.0,
          "thruster_rear_bottom_left": 9000.0,
          "thruster_front_top_left": 9000.0,
          "thruster_front_top_right": 9000.0,
          "thruster_front_side_right": 9000.0,
          "thruster_front_side_left": 9000.0,
          "thruster_front_bottom_right": 9000.0,
          "thruster_front_bottom_left": 9000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 180.0,
      "MaxSpeed": 1010.0,
      "Pitch": 36.0,
      "Yaw": 36.0,
      "Roll": 100.0,
      "IsVtolAssisted": true,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 7446000.0,
        "Retro": 2800000.0,
        "Vtol": 6400000.0,
        "Maneuvering": 19408000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 8.2,
        "Retro": 3.1,
        "Strafe": 6.2,
        "Up": 5.1,
        "Down": 3.6
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 380.0,
          "BoostSpeedBackward": 160.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 12000000.0,
      "FuelIntakeRate": 15.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 5.0,
        "Vtol": 2.5,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 480.75,
        "Retro": 350.0,
        "Vtol": 800.0,
        "Maneuvering": 2426.0
      },
      "IntakeToMainFuelRatio": 3.12,
      "TimeForIntakesToFillTank": 800000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1468.0,
        "SCMActive": 1661.0,
        "NAV": 9002.0
      },
      "Infrared": {
        "Start": 8491.0
      },
      "CrossSection": {
        "Front": 3777.0,
        "Side": 4460.0,
        "Top": 5983.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1500.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 4304.0
    },
    "Insurance": {
      "StandardClaimTime": 3.37,
      "ExpeditedClaimTime": 1.12,
      "ExpeditedCost": 2280.0
    },
    "Buy": {
      "New Deal, Lorville": 625040.0
    }
  },
  {
    "ClassName": "DRAK_Cutter_Rambler",
    "Name": "Drake Cutter Rambler",
    "Description": "The brass at Drake heard what you had to say, and their answer was the Cutter Rambler. Building upon the original, the Rambler preserves a full 2 SCU of cargo room while adding in requested creature comforts and enough personal storage to make even the longest journey go by in a flash.",
    "Career": "Starter",
    "Role": "Exploration",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 2.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.05,
      "PersonalInventory": 4.0
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 81677.0,
    "ComponentsMass": 7295.2,
    "Dimensions": {
      "Length": 20.0,
      "Width": 13.0,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 6500.0
        },
        "Parts": {
          "body_armour_top": 1500.0,
          "vtol_r_geo": 3000.0,
          "debrisproxy_spoiler_left": 50.0,
          "debrisproxy_spoiler_right": 50.0,
          "nose": 3000.0,
          "vtol_l_geo": 3000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_aux_right": 9000.0,
          "thruster_aux_left": 9000.0
        },
        "Retro": {
          "thruster_auxretro_right": 9000.0,
          "thruster_auxretro_left": 9000.0,
          "thruster_retro_right": 9000.0,
          "thruster_retro_left": 9000.0
        },
        "Vtol": {
          "thruster_main_vtol_right": 9000.0,
          "thruster_main_vtol_left": 9000.0
        },
        "Maneuvering": {
          "thruster_rear_top_right": 9000.0,
          "thruster_rear_top_left": 9000.0,
          "thruster_rear_side_right": 9000.0,
          "thruster_rear_side_left": 9000.0,
          "thruster_rear_bottom_right": 9000.0,
          "thruster_rear_bottom_left": 9000.0,
          "thruster_front_top_left": 9000.0,
          "thruster_front_top_right": 9000.0,
          "thruster_front_side_right": 9000.0,
          "thruster_front_side_left": 9000.0,
          "thruster_front_bottom_right": 9000.0,
          "thruster_front_bottom_left": 9000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 180.0,
      "MaxSpeed": 1010.0,
      "Pitch": 36.0,
      "Yaw": 36.0,
      "Roll": 100.0,
      "IsVtolAssisted": true,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 7446000.0,
        "Retro": 2800000.0,
        "Vtol": 6400000.0,
        "Maneuvering": 19408000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 8.2,
        "Retro": 3.1,
        "Strafe": 6.2,
        "Up": 5.1,
        "Down": 3.6
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 380.0,
          "BoostSpeedBackward": 160.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 24000000.0,
      "FuelIntakeRate": 15.0,
      "QuantumFuelCapacity": 2200000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 5.0,
        "Vtol": 2.5,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 480.75,
        "Retro": 350.0,
        "Vtol": 800.0,
        "Maneuvering": 2426.0
      },
      "IntakeToMainFuelRatio": 3.12,
      "TimeForIntakesToFillTank": 1600000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1468.0,
        "SCMActive": 1661.0,
        "NAV": 9002.0
      },
      "Infrared": {
        "Start": 8491.0
      },
      "CrossSection": {
        "Front": 3777.0,
        "Side": 4460.0,
        "Top": 5983.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1500.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 4304.0
    },
    "Insurance": {
      "StandardClaimTime": 1.25,
      "ExpeditedClaimTime": 0.0,
      "ExpeditedCost": 480.0
    },
    "New Ship": "Drake Cutter Rambler",
    "Buy": {
      "New Deal, Lorville": 740880.0
    }
  },
  {
    "ClassName": "DRAK_Cutter_Scout",
    "Name": "Drake Cutter Scout",
    "Description": "Pairing down the rough and tumble, compact frame of the Cutter to the bare essentials, Drake took an already impressive ship and transformed it into the ideal scouting vessel. Featuring improved radar and scanning capabilities paired with more power and cooling, the Cutter Scout is ready to fly ahead of the pack.",
    "Career": "Starter",
    "Role": "Scout",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 2.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.9,
      "PersonalInventory": 0.93
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 87677.0,
    "ComponentsMass": 8835.2,
    "Dimensions": {
      "Length": 20.0,
      "Width": 13.0,
      "Height": 6.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 6700.0
        },
        "Parts": {
          "body_armour_top": 1500.0,
          "vtol_r_geo": 3000.0,
          "debrisproxy_spoiler_left": 50.0,
          "debrisproxy_spoiler_right": 50.0,
          "nose": 3200.0,
          "vtol_l_geo": 3000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_aux_right": 9000.0,
          "thruster_aux_left": 9000.0
        },
        "Retro": {
          "thruster_auxretro_right": 9000.0,
          "thruster_auxretro_left": 9000.0,
          "thruster_retro_right": 9000.0,
          "thruster_retro_left": 9000.0
        },
        "Vtol": {
          "thruster_main_vtol_right": 9000.0,
          "thruster_main_vtol_left": 9000.0
        },
        "Maneuvering": {
          "thruster_rear_top_right": 9000.0,
          "thruster_rear_top_left": 9000.0,
          "thruster_rear_side_right": 9000.0,
          "thruster_rear_side_left": 9000.0,
          "thruster_rear_bottom_right": 9000.0,
          "thruster_rear_bottom_left": 9000.0,
          "thruster_front_top_left": 9000.0,
          "thruster_front_top_right": 9000.0,
          "thruster_front_side_right": 9000.0,
          "thruster_front_side_left": 9000.0,
          "thruster_front_bottom_right": 9000.0,
          "thruster_front_bottom_left": 9000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 180.0,
      "MaxSpeed": 1010.0,
      "Pitch": 36.0,
      "Yaw": 36.0,
      "Roll": 100.0,
      "IsVtolAssisted": true,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 7546000.0,
        "Retro": 2800000.0,
        "Vtol": 6500000.0,
        "Maneuvering": 19408000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 7.8,
        "Retro": 2.9,
        "Strafe": 5.8,
        "Up": 4.8,
        "Down": 3.3
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 380.0,
          "BoostSpeedBackward": 160.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 12000000.0,
      "FuelIntakeRate": 15.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 5.0,
        "Vtol": 2.5,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 480.75,
        "Retro": 350.0,
        "Vtol": 812.5,
        "Maneuvering": 2426.0
      },
      "IntakeToMainFuelRatio": 3.12,
      "TimeForIntakesToFillTank": 800000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1560.0,
        "SCMActive": 1745.0,
        "NAV": 9085.0
      },
      "Infrared": {
        "Start": 8930.0
      },
      "CrossSection": {
        "Front": 3777.0,
        "Side": 4460.0,
        "Top": 5983.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1500.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 3340.0
    },
    "Insurance": {
      "StandardClaimTime": 3.87,
      "ExpeditedClaimTime": 1.28,
      "ExpeditedCost": 2622.0
    },
    "New Ship": "Drake Cutter Scout",
    "Buy": {
      "New Deal, Lorville": 705600.0
    }
  },
  {
    "ClassName": "DRAK_Dragonfly",
    "Name": "Drake Dragonfly",
    "Description": "The Drake Dragonfly is the perfect snub ship for anyone looking to live on the edge. With nothing separating the pilot from the dangers of space, the Dragonfly is as much an adventure as a ship! Dual-mode conversion allows the Dragonfly to operate on the ground or in space, and a rear-facing second seat means you can even take a passenger!",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.39,
      "PersonalInventory": 0.39
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 5600.0,
    "ComponentsMass": 853.0,
    "Dimensions": {
      "Length": 6.0,
      "Width": 2.5,
      "Height": 1.5
    },
    "IsSpaceship": false,
    "IsGravlev": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.4,
        "Infrared": 0.27,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 880.0
        },
        "Parts": {
          "nacelle_front_right_main": 160.0,
          "nacelle_front_left_main": 160.0,
          "body": 50.0,
          "nacelle_rear_left_main": 160.0,
          "nacelle_rear_right_main": 160.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine": 1300.0
        },
        "Retro": {
          "retro_right": 1500.0,
          "retro_left": 1500.0
        },
        "Maneuvering": {
          "thruster_front_top_right": 1300.0,
          "thruster_front_bottom_right": 1300.0,
          "gravplate_centre_right": 1600.0,
          "gravplate_front_right": 1600.0,
          "thruster_front_top_left": 1300.0,
          "thruster_front_bottom_left": 1300.0,
          "gravplate_centre_left": 1600.0,
          "gravplate_front_left": 1600.0,
          "gravplate_rear_left": 1600.0,
          "thruster_rear_top_left": 1300.0,
          "thruster_rear_bottom_left": 1300.0,
          "thruster_rear_bottom_right": 1300.0,
          "gravplate_rear_right": 1600.0,
          "thruster_rear_top_right": 1300.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 190.0,
      "HoverMaxSpeed": 190.0,
      "MaxSpeed": 523.0,
      "Pitch": 70.0,
      "Yaw": 70.0,
      "Roll": 130.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 80500.0,
        "Retro": 135000.0,
        "Vtol": 0.0,
        "Maneuvering": 385400.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.4,
        "Retro": 2.2,
        "Strafe": 1.5,
        "Up": 2.0,
        "Down": 2.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 270.0,
          "BoostSpeedBackward": 120.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.2
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 1.25,
        "CapacitorIdleCost": 2.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 3.5,
        "RegenerationTime": 16.0,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 1500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 10.062,
        "Retro": 16.875,
        "Vtol": 0.0,
        "Maneuvering": 48.175
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 576.0,
        "SCMActive": 930.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 518.0
      },
      "CrossSection": {
        "Front": 334.0,
        "Side": 452.0,
        "Top": 564.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 749.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.10125,
      "ExpeditedClaimTime": 0.0,
      "ExpeditedCost": 55.0
    },
    "Buy": {
      "New Deal, Lorville": 342720.0
    }
  },
  {
    "ClassName": "DRAK_Dragonfly_Yellow",
    "Name": "Drake Dragonfly Yellowjacket",
    "Description": "The Drake Dragonfly is the perfect snub ship for anyone looking to live on the edge. With nothing separating the pilot from the dangers of space, the Dragonfly is as much an adventure as a ship! Dual-mode conversion allows the Dragonfly to operate on the ground or in space, and a rear-facing second seat means you can even take a passenger! This model features a custom Yellowjacket paintjob.",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.39,
      "PersonalInventory": 0.39
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 5600.0,
    "ComponentsMass": 853.0,
    "Dimensions": {
      "Length": 6.0,
      "Width": 2.5,
      "Height": 1.5
    },
    "IsSpaceship": false,
    "IsGravlev": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.4,
        "Infrared": 0.27,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 880.0
        },
        "Parts": {
          "nacelle_front_right_main": 160.0,
          "nacelle_front_left_main": 160.0,
          "body": 50.0,
          "nacelle_rear_left_main": 160.0,
          "nacelle_rear_right_main": 160.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine": 1300.0
        },
        "Retro": {
          "retro_right": 1500.0,
          "retro_left": 1500.0
        },
        "Maneuvering": {
          "thruster_front_top_right": 1300.0,
          "thruster_front_bottom_right": 1300.0,
          "gravplate_centre_right": 1600.0,
          "gravplate_front_right": 1600.0,
          "thruster_front_top_left": 1300.0,
          "thruster_front_bottom_left": 1300.0,
          "gravplate_centre_left": 1600.0,
          "gravplate_front_left": 1600.0,
          "gravplate_rear_left": 1600.0,
          "thruster_rear_top_left": 1300.0,
          "thruster_rear_bottom_left": 1300.0,
          "thruster_rear_bottom_right": 1300.0,
          "gravplate_rear_right": 1600.0,
          "thruster_rear_top_right": 1300.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 190.0,
      "HoverMaxSpeed": 190.0,
      "MaxSpeed": 523.0,
      "Pitch": 70.0,
      "Yaw": 70.0,
      "Roll": 130.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 80500.0,
        "Retro": 135000.0,
        "Vtol": 0.0,
        "Maneuvering": 385400.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.5,
        "Retro": 2.2,
        "Strafe": 1.6,
        "Up": 2.0,
        "Down": 2.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 270.0,
          "BoostSpeedBackward": 120.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.2
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 1.25,
        "CapacitorIdleCost": 2.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 3.5,
        "RegenerationTime": 16.0,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 1500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 10.062,
        "Retro": 16.875,
        "Vtol": 0.0,
        "Maneuvering": 48.175
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 576.0,
        "SCMActive": 930.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 518.0
      },
      "CrossSection": {
        "Front": 334.0,
        "Side": 452.0,
        "Top": 564.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 749.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.10125,
      "ExpeditedClaimTime": 0.0,
      "ExpeditedCost": 55.0
    },
    "Buy": {
      "New Deal, Lorville": 342720.0
    }
  },
  {
    "ClassName": "DRAK_Golem",
    "Name": "Drake Golem",
    "Description": "With the Golem, Drake designed the ideal ship for those interested in starting a mining career. The ship features a bespoke mining laser and the capacity to carry 32 SCU of valuable resources. In classic Drake fashion, the Golem is a purpose-built ship that prioritizes function over frills.",
    "Career": "Starter",
    "Role": "Mining",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 32.0,
      "ExternalStorage": 0.9,
      "PersonalInventory": 0.25
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 69217.0,
    "ComponentsMass": 5347.0,
    "Dimensions": {
      "Length": 15.5,
      "Width": 7.0,
      "Height": 4.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.41,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.1,
        "Infrared": 1.1,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2350.0
        },
        "Parts": {
          "m_det_fr_vtol": 1450.0,
          "m_det_fl_vtol": 1450.0,
          "m_body_rear": 2350.0,
          "m_vtol_rear_cover_left": 1000.0,
          "m_det_vtol_ext_main_housing_left": 500.0,
          "m_vtol_rear_cover_right": 1000.0,
          "m_det_vtol_ext_main_housing_right": 500.0,
          "m_det_rr_cover": 600.0,
          "m_det_rr_fin": 250.0,
          "m_det_rl_cover": 600.0,
          "m_det_rside_cover": 400.0,
          "m_det_lside_cover": 400.0,
          "m_det_rl_fin": 250.0,
          "m_det_fr_cover": 1600.0,
          "m_det_fl_cover": 1600.0,
          "m_det_fr_lower_cover": 500.0,
          "m_det_fl_lower_cover": 500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "rear_main_thruster_left": 2800.0,
          "rear_main_thruster_right": 2800.0
        },
        "Retro": {
          "vtol_retro_thruster_left": 3000.0,
          "vtol_retro_thruster_right": 3000.0,
          "retro_front_left": 1800.0,
          "retro_front_right": 1800.0
        },
        "Vtol": {
          "vtol_front_right": 1700.0,
          "vtol_front_left": 1700.0,
          "vtol_thruster_main_left": 3000.0,
          "vtol_thruster_main_right": 3000.0
        },
        "Maneuvering": {
          "mav_rear_bottom_left": 1050.0,
          "mav_rear_bottom_right": 1050.0,
          "mav_rear_top_outer_left": 1050.0,
          "mav_rear_top_inner_left": 1050.0,
          "mav_rear_top_inner_right": 1050.0,
          "mav_rear_top_outer_right": 1050.0,
          "mav_front_bottom_left": 1050.0,
          "mav_front_bottom_right": 1050.0,
          "mav_front_top_left": 1050.0,
          "mav_front_top_right": 1050.0,
          "mav_front_left": 1050.0,
          "mav_front_right": 1050.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 203.0,
      "MaxSpeed": 1010.0,
      "Pitch": 43.0,
      "Yaw": 43.0,
      "Roll": 140.0,
      "IsVtolAssisted": true,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 7462000.0,
        "Retro": 2990000.0,
        "Vtol": 1140000.0,
        "Maneuvering": 17392000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 9.7,
        "Retro": 4.4,
        "Strafe": 5.8,
        "Up": 6.8,
        "Down": 3.9,
        "CheckDate": "2025-03-20"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 280.0,
          "BoostSpeedBackward": 210.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 1000.0,
        "CapacitorRegenPerSec": 50.0,
        "CapacitorIdleCost": 50.0,
        "CapacitorLinearCost": 1.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 3.0,
        "RegenerationTime": 20.0,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 24000000.0,
      "FuelIntakeRate": 15.0,
      "QuantumFuelCapacity": 950000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 6.5,
        "Retro": 13.0,
        "Vtol": 13.0,
        "Maneuvering": 39.0
      },
      "FuelUsagePerSecond": {
        "Main": 3149.9,
        "Retro": 971.75,
        "Vtol": 370.5,
        "Maneuvering": 5652.4
      },
      "IntakeToMainFuelRatio": 0.48,
      "TimeForIntakesToFillTank": 1600000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1539.0,
        "SCMActive": 1716.0,
        "NAV": 9825.0
      },
      "Infrared": {
        "Start": 9021.0
      },
      "CrossSection": {
        "Front": 0.0,
        "Side": 0.0,
        "Top": 0.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1850.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 2152.0
    },
    "Insurance": {
      "StandardClaimTime": 3.0,
      "ExpeditedClaimTime": 0.75,
      "ExpeditedCost": 1030.0
    },
    "Dimensions2": {
      "Length": 15.5,
      "Width": 7.0,
      "Height": 5.0
    }
  },
  {
    "ClassName": "DRAK_Herald",
    "Name": "Drake Herald",
    "Description": "The Drake Herald is a small, armored ship designed to safely get information from Point A to Point B. Featuring a powerful central engine (for high speed transit and generating the power needed for effective data encryption/containment), advanced encryption software and an armored computer core, the Herald is unique among personal spacecraft in that it is designed to be easily ‘cleaned’ when in danger of capture.",
    "Career": "Transporter",
    "Role": "Medium Data",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.84
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 62205.0,
    "ComponentsMass": 5492.0,
    "Dimensions": {
      "Length": 23.5,
      "Width": 12.5,
      "Height": 9.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2880.0,
          "tail": 1400.0
        },
        "Parts": {
          "sat_array_lower_right": 100.0,
          "sat_array_upper_right": 100.0,
          "sat_flap_lower": 100.0,
          "sat_array_upper_left": 100.0,
          "sat_flap_right": 100.0,
          "sat_flap_left": 100.0,
          "sat_array_lower_left": 100.0,
          "WingLeft_Detach": 660.0,
          "WingRight_Detach": 660.0,
          "pipe_cover_right": 100.0,
          "pipe_cover_left": 100.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_top": 18500.0,
          "thruster_main_bottom": 18500.0
        },
        "Retro": {
          "thruster_front_left_front": 17500.0,
          "thruster_front_right_front": 17500.0
        },
        "Maneuvering": {
          "thruster_front_left_bottom": 16500.0,
          "thruster_front_left_side": 16500.0,
          "thruster_front_left_top": 16500.0,
          "thruster_front_right_bottom": 16500.0,
          "thruster_front_right_side": 16500.0,
          "thruster_front_right_top": 16500.0,
          "thruster_back_left_back": 16500.0,
          "thruster_back_left_bottom": 16500.0,
          "thruster_back_left_side": 16500.0,
          "thruster_back_left_top": 16500.0,
          "thruster_back_right_back": 16500.0,
          "thruster_back_right_bottom": 16500.0,
          "thruster_back_right_side": 16500.0,
          "thruster_back_right_top": 16500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 240.0,
      "MaxSpeed": 1400.0,
      "Pitch": 50.0,
      "Yaw": 42.0,
      "Roll": 160.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 7565034.0,
        "Retro": 2892150.0,
        "Vtol": 0.0,
        "Maneuvering": 13778411.6
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 14.0,
        "Retro": 4.4,
        "Strafe": 4.5,
        "Up": 6.0,
        "Down": 3.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 600.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.7,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.3,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.4,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 10500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 945.629,
        "Retro": 361.519,
        "Vtol": 0.0,
        "Maneuvering": 1722.302
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5588.0,
        "SCMActive": 6665.0,
        "NAV": 13122.0
      },
      "Infrared": {
        "Start": 7701.0
      },
      "CrossSection": {
        "Front": 3859.0,
        "Side": 5146.0,
        "Top": 9648.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 1163.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9248.0
    },
    "Insurance": {
      "StandardClaimTime": 2.025,
      "ExpeditedClaimTime": 0.675,
      "ExpeditedCost": 1015.0
    },
    "Buy": {
      "New Deal, Lorville": 1285200.0
    }
  },
  {
    "ClassName": "DRAK_Mule",
    "Name": "Drake Mule",
    "Description": "The six-wheeled Drake Mule is a dependable workhorse for all sorts of loading and hauling jobs. Whether transporting cargo over rough terrain or ferrying it onto larger vessels and cargo decks, the Mule sees even the toughest contracts through to the end. Plain and simple.",
    "Career": "Ground",
    "Role": "Ground",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 1.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.75,
      "PersonalInventory": 0.73
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 2780.0,
    "ComponentsMass": 264.0,
    "Dimensions": {
      "Length": 4.2,
      "Width": 3,
      "Height": 2.7
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.8,
        "Infrared": 0.9,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2000.0
        },
        "Parts": {
          "hardpoint_wheel_FL": 800.0,
          "hardpoint_wheel_ML": 800.0,
          "hardpoint_wheel_FR": 800.0,
          "hardpoint_wheel_MR": 800.0,
          "hardpoint_wheel_RR": 800.0,
          "hardpoint_wheel_RL": 800.0,
          "Cargo_Arms": 200.0,
          "SHIELD_SDF_01_FT": 200.0,
          "Arm_Hinge": 200.0,
          "Rear": 2000.0,
          "sidetray_right": 200.0,
          "sidetray_left": 200.0,
          "Entry_Door_Lower": 200.0,
          "Door_Arms": 200.0,
          "Entry_Door_Upper_node": 200.0,
          "Seat_Hatch": 200.0
        }
      }
    },
    "DriveCharacteristics": {
      "Acceleration": 8.0,
      "Decceleration": 12.0,
      "TopSpeed": 32.0,
      "ReverseSpeed": 7.0
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 15.0,
      "VMaxSteerSpeed": 20.0,
      "V0SteerMaxAngle": 15.0,
      "SteerSubtractV": 1.0,
      "SteerSubtractAngle": 6.0,
      "SteerRelaxationSpeed": 40.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 12.0,
        "SCMActive": 12.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1577.0
      },
      "CrossSection": {
        "Front": 1184.0,
        "Side": 1011.0,
        "Top": 505.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 3.04,
      "ExpeditedClaimTime": 1.0125,
      "ExpeditedCost": 1215.0
    },
    "Buy": {
      "New Deal, Lorville": 68040.0
    }
  },
  {
    "ClassName": "DRAK_Vulture",
    "Name": "Drake Vulture",
    "Description": "Answer to no one, cut out the middle man, and throw caution to the wind. Rip wrecks like a pro and carve out your own place in the great big empty behind the stick of this rough, rugged salvage machine from Drake Interplanetary.",
    "Career": "Industrial",
    "Role": "Light Salvage",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 12.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.2,
      "PersonalInventory": 1.14
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 182983.0,
    "ComponentsMass": 6053.2,
    "Dimensions": {
      "Length": 33.0,
      "Width": 16.0,
      "Height": 9.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 12000.0
        },
        "Parts": {
          "body_tail": 7000.0,
          "drone": 200.0,
          "drone_wing_left": 50.0,
          "drone_wing_right": 50.0,
          "front_nacelle_right": 5000.0,
          "debrisProxy_salvage_arm_right": 4000.0,
          "front_nacelle_left": 5000.0,
          "debrisProxy_salvage_arm_left": 4000.0,
          "tail": 2400.0,
          "main_engine_left": 2000.0,
          "main_engine_right": 2000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 12340.0,
          "thruster_main_right": 12340.0
        },
        "Retro": {
          "thruster_retro_left": 12340.0,
          "thruster_retro_right": 12340.0
        },
        "Vtol": {
          "thruster_vtol_front_right": 10240.0,
          "thruster_vtol_front_left": 10240.0,
          "thruster_vtol_rear_left": 10240.0,
          "thruster_vtol_rear_right": 10240.0
        },
        "Maneuvering": {
          "thruster_mav_front_top_right": 10240.0,
          "thruster_mav_front_side_right": 10240.0,
          "thruster_mav_front_bottom_right": 10240.0,
          "thruster_mav_front_bottom_left": 10240.0,
          "thruster_mav_front_side_left": 10240.0,
          "thruster_mav_front_top_left": 10240.0,
          "thruster_mav_rear_bottom_left": 10240.0,
          "thruster_mav_rear_top_left": 10240.0,
          "thruster_mav_rear_side_left": 10240.0,
          "thruster_mav_rear_top_right": 10240.0,
          "thruster_mav_rear_side_right": 10240.0,
          "thruster_mav_rear_bottom_right": 10240.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1100.0,
      "Pitch": 55.0,
      "Yaw": 55.0,
      "Roll": 125.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 10480000.0,
        "Retro": 5710000.0,
        "Vtol": 182700.0,
        "Maneuvering": 28580000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.6,
        "Retro": 3.0,
        "Strafe": 4.0,
        "Up": 4.0,
        "Down": 3.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 350.0,
          "BoostSpeedBackward": 240.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 36000000.0,
      "FuelIntakeRate": 20.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1310.0,
        "Retro": 713.75,
        "Vtol": 22.838,
        "Maneuvering": 3572.5
      },
      "IntakeToMainFuelRatio": 1.53,
      "TimeForIntakesToFillTank": 1800000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 7402.0,
        "SCMActive": 8859.0,
        "NAV": 14935.0
      },
      "Infrared": {
        "Start": 9241.0
      },
      "CrossSection": {
        "Front": 3339.0,
        "Side": 6009.0,
        "Top": 12520.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 5550.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 9.0,
      "ExpeditedClaimTime": 3.0,
      "ExpeditedCost": 3040.0
    },
    "Buy": {
      "New Deal, Lorville": 2646000.0
    }
  },
  {
    "ClassName": "ESPR_Prowler",
    "Name": "Esperia Prowler",
    "Description": "Named after the UPE military designation, the Prowler is a modernized version of the infamous Tevarin boarding craft from the First Tevarin War. The Prowler’s effectiveness as a rapid personnel deployment vehicle was mainly due to its silence. With the Prowler, you will find the perfect fusion of two cultures: the elegance and effectiveness of the Tevarin war machine combined with the reliability of modern UEE technology.",
    "Career": "Combat",
    "Role": "Drop Ship",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.85
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 148900.0,
    "ComponentsMass": 43080.0,
    "Dimensions": {
      "Length": 34.0,
      "Width": 32.0,
      "Height": 15.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.4,
        "Infrared": 0.42,
        "CrossSection": 0.6
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 8500.0
        },
        "Parts": {
          "body": 40000.0,
          "rear_wing_stabilizer_right": 4000.0,
          "rear_wing_stabilizer_left": 4000.0,
          "humerus_base_e_left": 1000.0,
          "humerus_left": 2000.0,
          "ulna_left": 8000.0,
          "phalange_shield_left": 700.0,
          "humerus_base_e_right": 1000.0,
          "humerus_right": 2000.0,
          "ulna_right": 8000.0,
          "phalange_shield_right": 700.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster_wing_left": 19500.0,
          "main_thruster_wing_right": 19500.0
        },
        "Retro": {
          "retro_thruster_body_right": 18000.0,
          "retro_thruster_body_left": 18000.0,
          "retro_thruster_wing_left": 18000.0,
          "retro_thruster_wing_right": 18000.0
        },
        "Maneuvering": {
          "mav_thruster_nose_left_top": 17000.0,
          "mav_thruster_nose_left_bot": 17000.0,
          "mav_thruster_nose_right_top": 17000.0,
          "mav_thruster_nose_right_bot": 17000.0,
          "grav_nose_left_rear": 19500.0,
          "mav_thruster_nose_left_mid": 17000.0,
          "mav_thruster_nose_right_mid": 17000.0,
          "grav_nose_left_front": 19500.0,
          "grav_nose_right_front": 19500.0,
          "grav_nose_right_rear": 19500.0,
          "mav_thruster_tail_left_mid": 17000.0,
          "mav_thruster_tail_left_bot": 17000.0,
          "mav_thruster_tail_left_top": 17000.0,
          "mav_thruster_tail_right_top": 17000.0,
          "mav_thruster_tail_right_mid": 17000.0,
          "mav_thruster_tail_right_bot": 17000.0,
          "grav_body_right_rear": 19500.0,
          "grav_body_left_rear": 19500.0,
          "grav_body_left_front": 19500.0,
          "grav_body_right_front": 19500.0,
          "mav_thruster_spine_left": 17000.0,
          "mav_thruster_spine_right": 17000.0,
          "mav_thruster_wing_left_mid": 17000.0,
          "mav_thruster_wing_right_mid": 17000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1100.0,
      "Pitch": 35.0,
      "Yaw": 30.0,
      "Roll": 100.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 12541802.0,
        "Retro": 4291816.4,
        "Vtol": 0.0,
        "Maneuvering": 32924823.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 9.0,
        "Retro": 2.5,
        "Strafe": 3.9,
        "Up": 4.4,
        "Down": 4.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 420.0,
          "BoostSpeedBackward": 240.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.2,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.2,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.2,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 39000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 5.0,
        "Vtol": 0.0,
        "Maneuvering": 30.0
      },
      "FuelUsagePerSecond": {
        "Main": 1567.725,
        "Retro": 536.477,
        "Vtol": 0.0,
        "Maneuvering": 4115.603
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 8316.0,
        "SCMActive": 10403.0,
        "NAV": 14508.0
      },
      "Infrared": {
        "Start": 8437.0
      },
      "CrossSection": {
        "Front": 4423.0,
        "Side": 9459.0,
        "Top": 10072.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 7020.0,
      "PilotBurstDPS": 3414.0,
      "TurretsBurstDPS": 923.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 23.22,
      "ExpeditedClaimTime": 7.74,
      "ExpeditedCost": 9993.0
    },
    "Buy": {
      "Astro Armada, Area 18": 18711000.0
    }
  },
  {
    "ClassName": "ESPR_Talon",
    "Name": "Esperia Talon",
    "Description": "The Talon represents Esperia's continuing effort to preserve historically significant Tevarin ship designs. A maneuverable single-seat combat ship with light armor but powerful, directional \"Phalanx\" shields, the Talon is made to strike first and strike hard before using the shields to cover its escape.",
    "Career": "Combat",
    "Role": "Fighter",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 46242.06,
    "ComponentsMass": 7743.0,
    "Dimensions": {
      "Length": 26.0,
      "Width": 23.3,
      "Height": 8.6
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.6,
        "Infrared": 0.6,
        "CrossSection": 0.6
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2700.0
        },
        "Parts": {
          "eject_joint": 80.0,
          "Leg_Right": 1900.0,
          "Leg_Lower_Right": 1500.0,
          "leg_feathers_01_right": 50.0,
          "leg_feathers_02_right": 50.0,
          "leg_feathers_03_right": 50.0,
          "leg_feathers_04_right": 50.0,
          "leg_feathers_05_right": 50.0,
          "wing_small_segment_01_right": 200.0,
          "wings_small_feathers_01_right": 50.0,
          "wings_small_feathers_02_right": 50.0,
          "wings_small_feathers_03_right": 50.0,
          "wings_small_feathers_04_right": 50.0,
          "wings_small_feathers_05_right": 50.0,
          "wings_small_feathers_06_right": 50.0,
          "wings_small_feathers_07_right": 50.0,
          "comp_jumpdrive_door_front": 50.0,
          "comp_jumpdrive_door_mid": 50.0,
          "comp_jumpdrive_door_rear": 50.0,
          "comp_jumpdrive_door_right": 50.0,
          "comp_jumpdrive_door_left": 50.0,
          "radar_scanner_door_right": 50.0,
          "radar_scanner_door_rear": 50.0,
          "radar_scanner_door_mid": 50.0,
          "radar_scanner_door_front": 50.0,
          "radar_scanner_door_left": 50.0,
          "coolers_door_mid": 50.0,
          "coolers_door_rear": 50.0,
          "coolers_door_right": 50.0,
          "coolers_door_front": 50.0,
          "coolers_door_left": 50.0,
          "shieldgen_door_outer_right": 50.0,
          "shieldgen_door_inner_right": 50.0,
          "shieldgen_door_inner_left": 50.0,
          "shieldgen_door_outer_left": 50.0,
          "Leg_Left": 1900.0,
          "Leg_Lower_Left": 1500.0,
          "leg_feathers_05_left": 50.0,
          "leg_feathers_04_left": 50.0,
          "leg_feathers_03_left": 50.0,
          "leg_feathers_02_left": 50.0,
          "leg_feathers_01_left": 50.0,
          "wing_small_segment_01_left": 200.0,
          "wings_small_feathers_01_left": 50.0,
          "wings_small_feathers_02_left": 50.0,
          "wings_small_feathers_03_left": 50.0,
          "wings_small_feathers_04_left": 50.0,
          "wings_small_feathers_05_left": 50.0,
          "wings_small_feathers_06_left": 50.0,
          "wings_small_feathers_07_left": 50.0,
          "Tail_Left": 1650.0,
          "Wing_Left": 1650.0,
          "Wing_Right": 1650.0,
          "Tail_Right": 1650.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_top_left": 5000.0,
          "main_top_right": 5000.0,
          "main_bottom_left": 5000.0,
          "main_bottom_right": 5000.0
        },
        "Retro": {
          "retro_left": 5000.0,
          "retro_right": 5000.0
        },
        "Vtol": {
          "thruster_bottom_right": 4000.0,
          "thruster_bottom_left": 4000.0
        },
        "Maneuvering": {
          "mav_BF_left": 4000.0,
          "mav_BR_left": 4000.0,
          "mav_SF_left": 4000.0,
          "mav_SR_left": 4000.0,
          "mav_TF_left": 4000.0,
          "mav_TR_left": 4000.0,
          "mav_BF_right": 4000.0,
          "mav_BR_right": 4000.0,
          "mav_SF_right": 4000.0,
          "mav_SR_right": 4000.0,
          "mav_TF_right": 4000.0,
          "mav_TR_right": 4000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1200.0,
      "Pitch": 70.0,
      "Yaw": 52.0,
      "Roll": 200.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 7548000.0,
        "Retro": 2614000.0,
        "Vtol": 0.0,
        "Maneuvering": 21524000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 13.0,
        "Retro": 4.5,
        "Strafe": 10.0,
        "Up": 10.0,
        "Down": 5.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 500.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.3,
        "Y_AccelMultiplicator": 1.25,
        "Z_AccelMultiplicator": 1.4
      }
    },
    "FuelManagement": {
      "FuelCapacity": 8000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 2.5,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 943.5,
        "Retro": 326.75,
        "Vtol": 0.0,
        "Maneuvering": 2690.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3790.0,
        "SCMActive": 4506.0,
        "NAV": 8310.0
      },
      "Infrared": {
        "Start": 6315.0
      },
      "CrossSection": {
        "Front": 1534.0,
        "Side": 4167.0,
        "Top": 4630.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 1385.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 6681.0
    },
    "Insurance": {
      "StandardClaimTime": 11.34,
      "ExpeditedClaimTime": 3.78,
      "ExpeditedCost": 5243.0
    },
    "Buy": {
      "Astro Armada, Area 18": 3260250.0
    }
  },
  {
    "ClassName": "ESPR_Talon_Shrike",
    "Name": "Esperia Talon Shrike",
    "Description": "The Talon represents Esperia's continuing effort to preserve historically significant Tevarin ship designs. A maneuverable single-seat combat ship with light armor but powerful, directional \"Phalanx\" shields, the Talon is made to strike first and strike hard before using the shields to cover its escape. The infamous Shrike variant model is armed with additional internal missile racks.",
    "Career": "Combat",
    "Role": "Fighter",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 46242.06,
    "ComponentsMass": 9365.0,
    "Dimensions": {
      "Length": 26.0,
      "Width": 23.3,
      "Height": 8.6
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.6,
        "Infrared": 0.6,
        "CrossSection": 0.6
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2700.0
        },
        "Parts": {
          "eject_joint": 80.0,
          "Leg_Right": 1900.0,
          "Leg_Lower_Right": 1500.0,
          "leg_feathers_01_right": 50.0,
          "leg_feathers_02_right": 50.0,
          "leg_feathers_03_right": 50.0,
          "leg_feathers_04_right": 50.0,
          "leg_feathers_05_right": 50.0,
          "wing_small_segment_01_right": 200.0,
          "wings_small_feathers_01_right": 50.0,
          "wings_small_feathers_02_right": 50.0,
          "wings_small_feathers_03_right": 50.0,
          "wings_small_feathers_04_right": 50.0,
          "wings_small_feathers_05_right": 50.0,
          "wings_small_feathers_06_right": 50.0,
          "wings_small_feathers_07_right": 50.0,
          "comp_jumpdrive_door_front": 50.0,
          "comp_jumpdrive_door_mid": 50.0,
          "comp_jumpdrive_door_rear": 50.0,
          "comp_jumpdrive_door_right": 50.0,
          "comp_jumpdrive_door_left": 50.0,
          "radar_scanner_door_right": 50.0,
          "radar_scanner_door_rear": 50.0,
          "radar_scanner_door_mid": 50.0,
          "radar_scanner_door_front": 50.0,
          "radar_scanner_door_left": 50.0,
          "coolers_door_mid": 50.0,
          "coolers_door_rear": 50.0,
          "coolers_door_right": 50.0,
          "coolers_door_front": 50.0,
          "coolers_door_left": 50.0,
          "shieldgen_door_outer_right": 50.0,
          "shieldgen_door_inner_right": 50.0,
          "shieldgen_door_inner_left": 50.0,
          "shieldgen_door_outer_left": 50.0,
          "Leg_Left": 1900.0,
          "Leg_Lower_Left": 1500.0,
          "leg_feathers_05_left": 50.0,
          "leg_feathers_04_left": 50.0,
          "leg_feathers_03_left": 50.0,
          "leg_feathers_02_left": 50.0,
          "leg_feathers_01_left": 50.0,
          "wing_small_segment_01_left": 200.0,
          "wings_small_feathers_01_left": 50.0,
          "wings_small_feathers_02_left": 50.0,
          "wings_small_feathers_03_left": 50.0,
          "wings_small_feathers_04_left": 50.0,
          "wings_small_feathers_05_left": 50.0,
          "wings_small_feathers_06_left": 50.0,
          "wings_small_feathers_07_left": 50.0,
          "Tail_Left": 1650.0,
          "Wing_Left": 1650.0,
          "Wing_Right": 1650.0,
          "Tail_Right": 1650.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_top_left": 5000.0,
          "main_top_right": 5000.0,
          "main_bottom_left": 5000.0,
          "main_bottom_right": 5000.0
        },
        "Retro": {
          "retro_left": 5000.0,
          "retro_right": 5000.0
        },
        "Vtol": {
          "thruster_bottom_right": 4000.0,
          "thruster_bottom_left": 4000.0
        },
        "Maneuvering": {
          "mav_BF_left": 4000.0,
          "mav_BR_left": 4000.0,
          "mav_SF_left": 4000.0,
          "mav_SR_left": 4000.0,
          "mav_TF_left": 4000.0,
          "mav_TR_left": 4000.0,
          "mav_BF_right": 4000.0,
          "mav_BR_right": 4000.0,
          "mav_SF_right": 4000.0,
          "mav_SR_right": 4000.0,
          "mav_TF_right": 4000.0,
          "mav_TR_right": 4000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1200.0,
      "Pitch": 70.0,
      "Yaw": 52.0,
      "Roll": 200.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 7548000.0,
        "Retro": 2614000.0,
        "Vtol": 0.0,
        "Maneuvering": 21524000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 13.0,
        "Retro": 4.5,
        "Strafe": 10.0,
        "Up": 10.0,
        "Down": 5.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 500.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.3,
        "Y_AccelMultiplicator": 1.25,
        "Z_AccelMultiplicator": 1.4
      }
    },
    "FuelManagement": {
      "FuelCapacity": 8000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 2.5,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 943.5,
        "Retro": 326.75,
        "Vtol": 0.0,
        "Maneuvering": 2690.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3792.0,
        "SCMActive": 4508.0,
        "NAV": 8312.0
      },
      "Infrared": {
        "Start": 6345.0
      },
      "CrossSection": {
        "Front": 1460.0,
        "Side": 3967.0,
        "Top": 4408.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 617.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 60634.0
    },
    "Insurance": {
      "StandardClaimTime": 11.34,
      "ExpeditedClaimTime": 3.78,
      "ExpeditedCost": 7183.0
    },
    "Buy": {
      "Astro Armada, Area 18": 3260250.0
    }
  },
  {
    "ClassName": "GAMA_Syulen",
    "Name": "Gatac Syulen",
    "Description": "The Syulen cargo vessel has been artfully crafted by the renowned House Gatac to be well suited for both Human and Xi’an pilots. With a refined agile frame, the Syulen lends itself to ferrying important deliveries across the universe, or as the ideal ship for those making their transport career debut.",
    "Career": "Starter",
    "Role": "Starter",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 6.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.25,
      "PersonalInventory": 1.06
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 77877.0,
    "ComponentsMass": 12584.2,
    "Dimensions": {
      "Length": 25.0,
      "Width": 28.0,
      "Height": 16.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 1.0,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2000.0
        },
        "Parts": {
          "Mesh_Front": 500.0,
          "Wing_Small_Bottom": 700.0,
          "Wing_Small_Bottom_Fin_Left": 220.0,
          "Wing_Small_Bottom_Fin_Right": 220.0,
          "Wing_Small_Left": 700.0,
          "Wing_Small_Left_Fin_Left": 220.0,
          "Wing_Small_Left_Fin_Right": 220.0,
          "Wing_Small_Right": 700.0,
          "Wing_Small_Right_Fin_Left": 220.0,
          "Wing_Small_Right_Fin_Right": 220.0,
          "Wing_Large_Left": 1500.0,
          "Wing_Large_Left_Fin_Left": 220.0,
          "Wing_Large_Left_Fin_Right": 220.0,
          "Wing_Large_Top": 1500.0,
          "Wing_Large_Top_Fin_Left": 220.0,
          "Wing_Large_Top_Fin_Right": 220.0,
          "Wing_Large_Right": 1500.0,
          "Wing_Large_Right_Fin_Left": 220.0,
          "Wing_Large_Right_Fin_Right": 220.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "wings_small_bottom_thruster_main": 1000.0,
          "wings_small_left_thruster_main": 1000.0,
          "wings_small_right_thruster_main": 1000.0,
          "wings_large_left_thruster_main": 1000.0,
          "thruster_wings_large_top_thruster_main": 1000.0,
          "wings_large_right_thruster_main": 1000.0
        },
        "Retro": {
          "body_left_thruster_retro": 1000.0,
          "body_right_thruster_retro": 1000.0,
          "body_top_thruster_retro": 1000.0
        },
        "Maneuvering": {
          "body_front_left_bottom_thruster_mav": 1000.0,
          "body_front_left_mid_thruster_mav": 1000.0,
          "body_front_left_top_thruster_mav": 1000.0,
          "body_front_right_bottom_thruster_mav": 1000.0,
          "body_front_right_mid_thruster_mav": 1000.0,
          "body_front_right_top_thruster_mav": 1000.0,
          "body_mid_left_bottom_thruster_mav": 1000.0,
          "body_mid_left_mid_thruster_mav": 1000.0,
          "body_mid_left_top_thruster_mav": 1000.0,
          "body_mid_right_bottom_thruster_mav": 1000.0,
          "body_mid_right_mid_thruster_mav": 1000.0,
          "body_mid_right_top_thruster_mav": 1000.0,
          "body_rear_left_bottom_thruster_mav": 1000.0,
          "body_rear_left_mid_thruster_mav": 1000.0,
          "body_rear_left_top_thruster_mav": 1000.0,
          "body_rear_right_bottom_thruster_mav": 1000.0,
          "body_rear_right_mid_thruster_mav": 1000.0,
          "body_rear_right_top_thruster_mav": 1000.0,
          "wings_large_left_thruster_mav_left": 1000.0,
          "wings_large_left_thruster_mav_right": 1000.0,
          "wings_large_top_thruster_mav_right": 1000.0,
          "wings_large_top_thruster_mav_left": 1000.0,
          "wings_large_right_thruster_mav_left": 1000.0,
          "wings_large_right_thruster_mav_right": 1000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1175.0,
      "Pitch": 42.0,
      "Yaw": 42.0,
      "Roll": 135.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8454000.0,
        "Retro": 3759000.0,
        "Vtol": 0.0,
        "Maneuvering": 30403000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 8.8,
        "Retro": 4.0,
        "Strafe": 8.8,
        "Up": 8.8,
        "Down": 4.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 450.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 40000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 7.5,
        "Retro": 3.75,
        "Vtol": 0.0,
        "Maneuvering": 30.0
      },
      "FuelUsagePerSecond": {
        "Main": 1056.75,
        "Retro": 469.875,
        "Vtol": 0.0,
        "Maneuvering": 3800.375
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 2417.0,
        "SCMActive": 2854.0,
        "NAV": 9950.0
      },
      "Infrared": {
        "Start": 13362.0
      },
      "CrossSection": {
        "Front": 0.0,
        "Side": 0.0,
        "Top": 0.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3000.0,
      "PilotBurstDPS": 1637.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 28544.0
    },
    "Insurance": {
      "StandardClaimTime": 2.95,
      "ExpeditedClaimTime": 1.1,
      "ExpeditedCost": 2000.0
    },
    "New Ship": "Gatac Syulen",
    "Dimensions2": {
      "Length": 20.0,
      "Width": 22.0,
      "Height": 15.0
    },
    "Buy": {
      "Astro Armada, Area 18": 2778300.0
    }
  },
  {
    "ClassName": "GRIN_PTV",
    "Name": "Greycat PTV",
    "Description": "The Greycat PTV is a simple and practical buggy frequently used to reduce long walk distance in large hangers or outpost.",
    "Career": "Ground",
    "Role": "Ground",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.39,
      "PersonalInventory": 2.15
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 1940.0,
    "ComponentsMass": 103.0,
    "Dimensions": {
      "Length": 3,
      "Width": 2,
      "Height": 1.8
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 1.0,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 1200.0
        },
        "Parts": {
          "wheel1": 900.0,
          "wheel2": 900.0,
          "wheel4": 900.0,
          "wheel3": 900.0,
          "body_100_debris_wheel3": 1.0,
          "body_100_debris1": 1.0,
          "body_100_debris_wheel4": 1.0,
          "body_100_debris_wheel1": 1.0,
          "body_100_debris2": 1.0,
          "body_100_debris_wheel2": 1.0,
          "body_100_debris3": 1.0,
          "body_100_debris_steering": 1.0,
          "glass": 200.0,
          "glass_100_debris2": 1.0,
          "glass_100_debris1": 1.0,
          "headLightRight": 200.0,
          "headLightRightFlare": 200.0,
          "headLightLeft": 200.0,
          "headLightLeftFlare": 200.0,
          "brakeLightRight": 200.0,
          "brakeLightRightFlare": 200.0,
          "brakeLightLeft": 200.0,
          "brakeLightLeftFlare": 200.0,
          "reverseLightRight": 200.0,
          "reverseLightLeft": 200.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 175.0,
      "VMaxSteerSpeed": 20.0,
      "V0SteerMaxAngle": 45.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 14.0,
      "SteerRelaxationSpeed": 150.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 765.0,
        "SCMActive": 765.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 379.0
      },
      "CrossSection": {
        "Front": 857.0,
        "Side": 814.0,
        "Top": 429.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.28,
      "ExpeditedClaimTime": 0.09,
      "ExpeditedCost": 115.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "Astro Armada, Area 18": 29170.0
    }
  },
  {
    "ClassName": "GRIN_ROC",
    "Name": "Greycat ROC",
    "Description": "By focusing on the essentials of terrestrial-based mining, Greycat Industrial designed their hardworking, no-nonsense ROC (Remote Ore Collector) to complement the miners who use it. From its precision gimbaled mining arm to its all-terrain wheels, this solo-operated vehicle shows how important it is to have the right tool for the job. ",
    "Career": "Ground",
    "Role": "Light Mining",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 1.2,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.08
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 2420.0,
    "ComponentsMass": 345.0,
    "Dimensions": {
      "Length": 6.0,
      "Width": 3.9,
      "Height": 3.2
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.4,
        "Infrared": 0.4,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "rollcage_main": 2250.0
        },
        "Parts": {
          "hardpoint_wheel_FL": 1500.0,
          "hardpoint_wheel_FR": 1500.0,
          "hardpoint_wheel_RL": 1500.0,
          "hardpoint_wheel_RR": 1500.0,
          "roof": 250.0,
          "rear_frame": 250.0,
          "side_panel_right": 50.0,
          "windshield": 200.0,
          "bottom_hatch": 200.0,
          "top_hatch_front": 200.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 200.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 50.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 175.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 7.0,
        "SCMActive": 7.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 874.0
      },
      "CrossSection": {
        "Front": 559.0,
        "Side": 720.0,
        "Top": 821.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 3.54,
      "ExpeditedClaimTime": 1.11,
      "ExpeditedCost": 1460.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "New Deal, Lorville": 103950.0
    }
  },
  {
    "ClassName": "GRIN_ROC_DS",
    "Name": "Greycat ROC-DS",
    "Description": "By focusing on the essentials of terrestrial-based mining, Greycat Industrial designed their hardworking, no-nonsense ROC-DS (Remote Ore Collector Dual Seat) to let mining pairs do more while in the field. The ROC-DS raises the ground-mining game by adding extra cargo capacity and a second seat to operate the precision gimbaled mining arm. Greycat even upgraded the driver's cab with a protective enclosure to allow for longer excursions in harsh conditions. With the ROC-DS, mining duos now have the right tool to comfortably collect more ore. ",
    "Career": "Ground",
    "Role": "Light Mining",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 3.4,
      "ExternalStorage": 0.0,
      "PersonalInventory": 2.15
    },
    "Crew": 2,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 2580.0,
    "ComponentsMass": 305.0,
    "Dimensions": {
      "Length": 6.6,
      "Width": 5.0,
      "Height": 3.3
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.4,
        "Infrared": 0.4,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "rollcage_main": 2250.0
        },
        "Parts": {
          "light_bar": 50.0,
          "roof": 250.0,
          "rear_frame": 250.0,
          "windshield": 200.0,
          "bottom_hatch": 200.0,
          "top_hatch_front": 200.0,
          "hardpoint_wheel_FL": 1500.0,
          "hardpoint_wheel_FL_assembly": 1.0,
          "hardpoint_wheel_FR": 1500.0,
          "hardpoint_wheel_FR_assembly": 1.0,
          "hardpoint_wheel_RL": 1500.0,
          "hardpoint_wheel_RR": 1500.0,
          "hardpoint_wheel_ML": 1500.0,
          "hardpoint_wheel_MR": 1500.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 200.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 175.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 6.0,
        "SCMActive": 6.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 994.0
      },
      "CrossSection": {
        "Front": 793.0,
        "Side": 815.0,
        "Top": 642.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 4.43,
      "ExpeditedClaimTime": 1.39,
      "ExpeditedCost": 1825.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "New Deal, Lorville": 141750.0
    }
  },
  {
    "ClassName": "GRIN_STV",
    "Name": "Greycat STV",
    "Description": "Get ready to have some serious fun on the job with the STV from Greycat. This Sport Terrain Vehicle was built by pros for pros and features blazing speed and convenient built-in storage.",
    "Career": "Ground",
    "Role": "Ground",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.125,
      "PersonalInventory": 0.0
    },
    "Crew": 2,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 3570.0,
    "ComponentsMass": 128.0,
    "Dimensions": {
      "Length": 4.2,
      "Width": 2.8,
      "Height": 2
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.42,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 0.7,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 2500.0
        },
        "Parts": {
          "AAsus_wheel_FL": 1500.0,
          "AAsus_wheel_FR": 1500.0,
          "AAsus_wheel_RL": 1500.0,
          "AAsus_wheel_RR": 1500.0,
          "mesh_bonnet_plate": 500.0,
          "Bonnet_Arm": 250.0,
          "fender_fr": 250.0,
          "fender_rl": 250.0,
          "fender_rr": 250.0,
          "fender_fl": 250.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 140.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 105.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 15.0,
        "SCMActive": 15.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 795.0
      },
      "CrossSection": {
        "Front": 319.0,
        "Side": 574.0,
        "Top": 906.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.2,
      "ExpeditedClaimTime": 0.0,
      "ExpeditedCost": 75.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "Astro Armada, Area 18": 75600.0
    }
  },
  {
    "ClassName": "KRIG_P52_Merlin",
    "Name": "Kruger P-52 Merlin",
    "Description": "Designed in conjunction with RSI, this elegant short-range snub fighter represents the first ship produced under the Kruger Intergalactic brand. Utilizing centuries of manufacturing expertise, the compact precision of the Kruger hull blends perfectly with the trusted RSI thrusters to grant the Merlin exceptional handling and maneuverability while ensuring that it is capable of fulfilling a variety of roles from combat to scouting to scanning. ",
    "Career": "Combat",
    "Role": "Snub Fighter",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.43,
      "PersonalInventory": 0.43
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 7599.0,
    "ComponentsMass": 2255.0,
    "Dimensions": {
      "Length": 12.0,
      "Width": 7.7,
      "Height": 2.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 1000.0
        },
        "Parts": {
          "Canopy": 80.0,
          "Body2": 1000.0,
          "wing_left_animation_geo": 200.0,
          "wing_right_animation_geo": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 6500.0,
          "engine_right": 6500.0
        },
        "Retro": {
          "thruster_lower_center_retro": 5750.0,
          "thruster_upper_left_retro": 5750.0,
          "thruster_upper_right_retro": 5750.0
        },
        "Maneuvering": {
          "thruster_front_bottom": 5000.0,
          "thruster_front_left": 5000.0,
          "thruster_front_right": 5000.0,
          "thruster_front_top": 5000.0,
          "thruster_wing_right_bottom": 5000.0,
          "thruster_wing_right_top": 5000.0,
          "thruster_wing_left_top": 5000.0,
          "thruster_wing_left_bottom": 5000.0,
          "thruster_rear_right": 5000.0,
          "thruster_rear_left": 5000.0,
          "thruster_rear_bottom": 5000.0,
          "thruster_rear_top": 5000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 280.0,
      "MaxSpeed": 1450.0,
      "Pitch": 55.0,
      "Yaw": 55.0,
      "Roll": 200.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 1957000.0,
        "Retro": 380000.0,
        "Vtol": 0.0,
        "Maneuvering": 2880500.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 18.1,
        "Retro": 3.5,
        "Strafe": 7.0,
        "Up": 8.0,
        "Down": 4.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 620.0,
          "BoostSpeedBackward": 290.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 25.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 33.3,
        "X_AccelMultiplicator": 2.2,
        "Y_AccelMultiplicator": 1.4,
        "Z_AccelMultiplicator": 1.6
      }
    },
    "FuelManagement": {
      "FuelCapacity": 7000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 3.75,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 244.625,
        "Retro": 47.5,
        "Vtol": 0.0,
        "Maneuvering": 360.062
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3516.0,
        "SCMActive": 4187.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 7439.0
      },
      "CrossSection": {
        "Front": 988.0,
        "Side": 5928.0,
        "Top": 3794.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1600.0,
      "PilotBurstDPS": 888.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 2.65,
      "ExpeditedClaimTime": 0.88,
      "ExpeditedCost": 1375.0
    },
    "Buy": {
      "Astro Armada, Area 18": 283500.0
    }
  },
  {
    "ClassName": "KRIG_P72_Archimedes",
    "Name": "Kruger P-72 Archimedes",
    "Description": "Whether for added security, exploring a system or simply the joy of flying, the Kruger Intergalactic’s P-72 Archimedes snub craft was designed to deliver exceptional handling and nimble acceleration in a sleek and stylish package. ",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.43,
      "PersonalInventory": 0.43
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 7599.0,
    "ComponentsMass": 2616.0,
    "Dimensions": {
      "Length": 12.0,
      "Width": 7.7,
      "Height": 2.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 800.0
        },
        "Parts": {
          "Canopy": 80.0,
          "Body2": 800.0,
          "wing_left_animation_geo": 200.0,
          "wing_right_animation_geo": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 5000.0,
          "engine_right": 5000.0
        },
        "Retro": {
          "thruster_lower_center_retro": 4000.0,
          "thruster_upper_left_retro": 4000.0,
          "thruster_upper_right_retro": 4000.0
        },
        "Maneuvering": {
          "thruster_front_bottom": 3500.0,
          "thruster_front_left": 3500.0,
          "thruster_front_right": 3500.0,
          "thruster_front_top": 3500.0,
          "thruster_wing_right_bottom": 3500.0,
          "thruster_wing_right_top": 3500.0,
          "thruster_wing_left_top": 3500.0,
          "thruster_wing_left_bottom": 3500.0,
          "thruster_rear_right": 3500.0,
          "thruster_rear_left": 3500.0,
          "thruster_rear_bottom": 3500.0,
          "thruster_rear_top": 3500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 300.0,
      "MaxSpeed": 1485.0,
      "Pitch": 50.0,
      "Yaw": 50.0,
      "Roll": 190.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 1497000.0,
        "Retro": 363000.0,
        "Vtol": 0.0,
        "Maneuvering": 2314000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.6,
        "Retro": 4.0,
        "Strafe": 7.0,
        "Up": 7.5,
        "Down": 4.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 650.0,
          "BoostSpeedBackward": 300.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 25.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 33.3,
        "X_AccelMultiplicator": 2.2,
        "Y_AccelMultiplicator": 1.4,
        "Z_AccelMultiplicator": 1.6
      }
    },
    "FuelManagement": {
      "FuelCapacity": 7000000.0,
      "FuelIntakeRate": 3.5,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 3.75,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 187.125,
        "Retro": 45.375,
        "Vtol": 0.0,
        "Maneuvering": 289.25
      },
      "IntakeToMainFuelRatio": 1.87,
      "TimeForIntakesToFillTank": 2000000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5986.0,
        "SCMActive": 7149.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 7749.0
      },
      "CrossSection": {
        "Front": 984.0,
        "Side": 5906.0,
        "Top": 3780.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2240.0,
      "PilotBurstDPS": 875.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 2.65,
      "ExpeditedClaimTime": 0.88,
      "ExpeditedCost": 1375.0
    },
    "Buy": {
      "Astro Armada, Area 18": 449820.0
    }
  },
  {
    "ClassName": "MISC_Fortune",
    "Name": "MISC Fortune",
    "Description": "For those ready to elevate their profession to the next level, the engineers at MISC have carefully crafted the Fortune as a best-in-class small reclamation vessel. Equipped with a versatile salvage arm and a cargo lift, the MISC Fortune is built from the struts up to turn trash into treasure.",
    "Career": "Industrial",
    "Role": "Light Salvage",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 16.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.9,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 137700.0,
    "ComponentsMass": 25700.0,
    "Dimensions": {
      "Length": 26.0,
      "Width": 16.0,
      "Height": 7.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.05,
        "Distortion": 1.05
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.5,
        "Infrared": 1.5,
        "CrossSection": 1.5
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 15200.0
        },
        "Parts": {
          "geo_fortune_thruster_front_right": 4000.0,
          "geo_fortune_thruster_front_left": 4000.0,
          "body": 15200.0,
          "geo_cargo_grid_panels_right": 200.0,
          "geo_cargo_grid_panels_left": 200.0,
          "geo_spine": 200.0,
          "tail": 8000.0,
          "geo_fortune_thruster_rear_left": 6000.0,
          "geo_fortune_thruster_rear_right": 6000.0,
          "geo_spoiler": 500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_front_right": 11400.0,
          "thruster_main_front_left": 11400.0,
          "thruster_main_rear_middle": 11400.0,
          "thruster_main_rear_left": 11400.0,
          "thruster_main_rear_right": 11400.0
        },
        "Retro": {
          "thruster_retro_top": 10500.0,
          "thruster_retro_front_right": 10500.0,
          "thruster_retro_front_left": 10500.0,
          "thruster_retro_rear_left": 10500.0,
          "thruster_retro_rear_right": 10500.0
        },
        "Maneuvering": {
          "thruster_front_left_bottom": 10000.0,
          "thruster_front_right_bottom": 10000.0,
          "thruster_front_right_side": 10000.0,
          "thruster_front_left_side": 10000.0,
          "thruster_front_left_top": 10000.0,
          "thruster_front_right_top": 10000.0,
          "thruster_rear_left_top": 10000.0,
          "thruster_rear_right_top": 10000.0,
          "thruster_rear_right_bottom": 10000.0,
          "thruster_rear_left_bottom": 10000.0,
          "thruster_rear_left_side": 10000.0,
          "thruster_rear_right_side": 10000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 143.0,
      "MaxSpeed": 975.0,
      "Pitch": 32.0,
      "Yaw": 32.0,
      "Roll": 75.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 7517735.0,
        "Retro": 5602014.0,
        "Vtol": 0.0,
        "Maneuvering": 19984954.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 4.5,
        "Retro": 3.4,
        "Strafe": 2.6,
        "Up": 3.3,
        "Down": 3.3,
        "CheckDate": "2025-01-30"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 350.0,
          "BoostSpeedBackward": 150.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.1,
        "RampDown": 0.7,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 2.0,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.4,
        "Y_AccelMultiplicator": 1.4,
        "Z_AccelMultiplicator": 1.4
      }
    },
    "FuelManagement": {
      "FuelCapacity": 21000000.0,
      "FuelIntakeRate": 13.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 6.25,
        "Retro": 6.25,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 939.717,
        "Retro": 700.252,
        "Vtol": 0.0,
        "Maneuvering": 2498.119
      },
      "IntakeToMainFuelRatio": 1.38,
      "TimeForIntakesToFillTank": 1615384.62
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 17215.0,
        "SCMActive": 20691.0,
        "NAV": 28503.0
      },
      "Infrared": {
        "Start": 19808.0
      },
      "CrossSection": {
        "Front": 4800.0,
        "Side": 10200.0,
        "Top": 16500.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 5550.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 5.18,
      "ExpeditedClaimTime": 1.3,
      "ExpeditedCost": 3900.0
    },
    "New Ship": "MISC Fortune"
  },
  {
    "ClassName": "MISC_Freelancer",
    "Name": "MISC Freelancer",
    "Description": "Freelancers are used as long haul merchant ships by major corporations, but they are just as frequently repurposed as dedicated exploration vessels by independent captains who want to operate on the fringes of the galaxy.",
    "Career": "Transporter",
    "Role": "Medium Freight",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 66.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 4.91
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 219396.0,
    "ComponentsMass": 19448.0,
    "Dimensions": {
      "Length": 38.0,
      "Width": 23.5,
      "Height": 9.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 9500.0,
          "Body": 9500.0,
          "Tail": 6200.0
        },
        "Parts": {
          "Roof_Scoop": 1200.0,
          "Wing_Left": 1960.0,
          "Wingflap_Left": 640.0,
          "Wing_Right": 1960.0,
          "WingFlap_Right": 640.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 15750.0,
          "engine_right": 15750.0
        },
        "Retro": {
          "retro_left_a": 14560.0,
          "retro_left_b": 14560.0,
          "retro_right_a": 14560.0
        },
        "Maneuvering": {
          "thruster_front_left_bottom": 13450.0,
          "thruster_front_right_bottom": 13450.0,
          "thruster_front_left_top": 13450.0,
          "thruster_front_right_top": 13450.0,
          "thruster_centre_right_bottom": 13450.0,
          "thruster_centre_left_bottom": 13450.0,
          "thruster_back_left_top": 13450.0,
          "thruster_back_right_top": 13450.0,
          "thruster_centre_rear_left_bottom": 13450.0,
          "thruster_centre_rear_right_bottom": 13450.0,
          "thruster_rear_left_bottom": 13450.0,
          "thruster_rear_right_bottom": 13450.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 197.0,
      "MaxSpeed": 1010.0,
      "Pitch": 32.0,
      "Yaw": 32.0,
      "Roll": 105.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 14500000.0,
        "Retro": 5445000.0,
        "Vtol": 0.0,
        "Maneuvering": 18140000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.6,
        "Retro": 2.0,
        "Strafe": 4.3,
        "Up": 4.3,
        "Down": 2.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 205.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 108000000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 3.75,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1812.5,
        "Retro": 680.625,
        "Vtol": 0.0,
        "Maneuvering": 2267.5
      },
      "IntakeToMainFuelRatio": 2.76,
      "TimeForIntakesToFillTank": 2160000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 12567.0,
        "SCMActive": 16685.0,
        "NAV": 28047.0
      },
      "Infrared": {
        "Start": 9419.0
      },
      "CrossSection": {
        "Front": 3747.0,
        "Side": 10042.0,
        "Top": 14988.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 13290.0,
      "PilotBurstDPS": 2735.0,
      "TurretsBurstDPS": 1091.0,
      "TotalMissilesDmg": 19620.0
    },
    "Insurance": {
      "StandardClaimTime": 12.99,
      "ExpeditedClaimTime": 4.33,
      "ExpeditedCost": 6503.0
    },
    "Buy": {
      "New Deal, Lorville": 3118500.0
    }
  },
  {
    "ClassName": "MISC_Freelancer_DUR",
    "Name": "MISC Freelancer DUR",
    "Description": "The Freelancer DUR variant specializes in exploration. Sacrificing 25% cargo capacity of the standard Freelancer for an enhanced jump drive, a more advanced scanner, and an expanded fuel tank may seem like a bad call to some, but those who value discovery over profit will find it to be their ship of choice.",
    "Career": "Exploration",
    "Role": "Expedition",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 36.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 5.08
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 222418.0,
    "ComponentsMass": 19200.0,
    "Dimensions": {
      "Length": 38.0,
      "Width": 23.5,
      "Height": 9.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 5500.0,
          "Body": 6200.0,
          "Tail": 3200.0
        },
        "Parts": {
          "Roof_Scoop": 1200.0,
          "Wing_Right": 1960.0,
          "Wingflap_Right": 640.0,
          "Fuel_Tank_Right_Lower": 300.0,
          "Fuel_Tank_Right_Upper": 300.0,
          "Wing_Left": 1960.0,
          "Wingflap_Left": 640.0,
          "Fuel_Tank_Left_Lower": 300.0,
          "Fuel_Tank_Left_Upper": 300.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_right": 15750.0,
          "engine_left": 15750.0
        },
        "Retro": {
          "retro_right_a": 14560.0,
          "retro_right_b": 14560.0,
          "retro_left_a": 14560.0
        },
        "Maneuvering": {
          "thruster_front_left_bottom": 13450.0,
          "thruster_front_right_bottom": 13450.0,
          "thruster_front_left_top": 13450.0,
          "thruster_front_right_top": 13450.0,
          "thruster_centre_rear_right_bottom": 13450.0,
          "thruster_centre_rear_left_bottom": 13450.0,
          "thruster_rear_right_bottom": 13450.0,
          "thruster_back_right_top": 13450.0,
          "thruster_rear_left_bottom": 13450.0,
          "thruster_back_left_top": 13450.0,
          "thruster_centre_right_bottom": 13450.0,
          "thruster_centre_left_bottom": 13450.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 197.0,
      "MaxSpeed": 1010.0,
      "Pitch": 32.0,
      "Yaw": 32.0,
      "Roll": 105.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 14500000.0,
        "Retro": 5445000.0,
        "Vtol": 0.0,
        "Maneuvering": 18140000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 6.0,
        "Retro": 2.2,
        "Strafe": 4.5,
        "Up": 4.5,
        "Down": 3.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 205.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 140000000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 2400000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 3.75,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1812.5,
        "Retro": 680.625,
        "Vtol": 0.0,
        "Maneuvering": 2267.5
      },
      "IntakeToMainFuelRatio": 2.76,
      "TimeForIntakesToFillTank": 2800000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 13567.0,
        "SCMActive": 17885.0,
        "NAV": 29047.0
      },
      "Infrared": {
        "Start": 10606.0
      },
      "CrossSection": {
        "Front": 4024.0,
        "Side": 10783.0,
        "Top": 16094.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 13290.0,
      "PilotBurstDPS": 3145.0,
      "TurretsBurstDPS": 1091.0,
      "TotalMissilesDmg": 19707.0
    },
    "Insurance": {
      "StandardClaimTime": 12.99,
      "ExpeditedClaimTime": 4.33,
      "ExpeditedCost": 6035.0
    },
    "Buy": {
      "New Deal, Lorville": 3316950.0
    }
  },
  {
    "ClassName": "MISC_Freelancer_MAX",
    "Name": "MISC Freelancer MAX",
    "Description": "Freelancer variant with additional cargo capacity at the expense of weapons. The Freelancer MAX variant sacrifices weaponry for an increased cargo capacity making it ideal for equipment or raw materials transport.",
    "Career": "Transporter",
    "Role": "Heavy Freight",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 120.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 4.91
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 341408.0,
    "ComponentsMass": 26040.0,
    "Dimensions": {
      "Length": 38.0,
      "Width": 36.0,
      "Height": 9.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 5500.0,
          "Body": 6200.0,
          "Tail": 3200.0
        },
        "Parts": {
          "Wing_Right": 1960.0,
          "Wingflap_Right": 640.0,
          "Wing_Left": 1960.0,
          "Wingflap_Left": 640.0,
          "Roof_Scoop": 1200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_right2": 15750.0,
          "engine_right": 15750.0,
          "engine_left2": 15750.0,
          "engine_left": 15750.0
        },
        "Retro": {
          "retro_right_b": 14560.0,
          "retro_right_a": 14560.0,
          "retro_left_b": 14560.0,
          "retro_left_a": 14560.0
        },
        "Maneuvering": {
          "thruster_front_right_top": 13450.0,
          "thruster_front_right_bottom": 13450.0,
          "thruster_front_left_top": 13450.0,
          "thruster_front_left_bottom": 13450.0,
          "thruster_centre_right_bottom": 13450.0,
          "thruster_centre_left_bottom": 13450.0,
          "thruster_rear_right_bottom": 13450.0,
          "thruster_rear_left_bottom": 13450.0,
          "thruster_centre_rear_right_bottom": 13450.0,
          "thruster_centre_rear_left_bottom": 13450.0,
          "thruster_back_right_top": 13450.0,
          "thruster_back_left_top": 13450.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 197.0,
      "MaxSpeed": 1010.0,
      "Pitch": 32.0,
      "Yaw": 32.0,
      "Roll": 105.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 29000000.0,
        "Retro": 11200000.0,
        "Vtol": 0.0,
        "Maneuvering": 18140000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 8.0,
        "Retro": 3.1,
        "Strafe": 3.0,
        "Up": 3.0,
        "Down": 2.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 205.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 58500000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 5.0,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 3625.0,
        "Retro": 1400.0,
        "Vtol": 0.0,
        "Maneuvering": 2267.5
      },
      "IntakeToMainFuelRatio": 1.38,
      "TimeForIntakesToFillTank": 1170000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 15600.0,
        "SCMActive": 20324.0,
        "NAV": 31080.0
      },
      "Infrared": {
        "Start": 12364.0
      },
      "CrossSection": {
        "Front": 4788.0,
        "Side": 12833.0,
        "Top": 19153.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 13290.0,
      "PilotBurstDPS": 2187.0,
      "TurretsBurstDPS": 1091.0,
      "TotalMissilesDmg": 22707.0
    },
    "Insurance": {
      "StandardClaimTime": 16.46,
      "ExpeditedClaimTime": 5.49,
      "ExpeditedCost": 8028.0
    },
    "Buy": {
      "New Deal, Lorville": 4252500.0
    }
  },
  {
    "ClassName": "MISC_Freelancer_MIS",
    "Name": "MISC Freelancer MIS",
    "Description": "The Freelancer MIS is a limited edition militarized variant of the classic mercantile ship developed by the UEE. These were produced in very small quantity due to some early payload incidents. This version sacrifices the majority of the cargo capacity to make way for missiles.",
    "Career": "Combat",
    "Role": "Gunship",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 36.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 3.71
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 223553.0,
    "ComponentsMass": 22022.0,
    "Dimensions": {
      "Length": 38.0,
      "Width": 23.5,
      "Height": 9.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 5500.0,
          "Body": 6200.0,
          "Tail": 3200.0
        },
        "Parts": {
          "Roof_Scoop": 1200.0,
          "Wing_Right": 1960.0,
          "WingFlap_Right": 640.0,
          "Wing_Left": 1960.0,
          "WingFlap_Left": 640.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_right": 15750.0,
          "engine_left": 15750.0
        },
        "Retro": {
          "retro_right_a": 14560.0,
          "retro_right_b": 14560.0,
          "retro_left_a": 14560.0,
          "retro_left_b": 14560.0
        },
        "Maneuvering": {
          "thruster_front_left_bottom": 13450.0,
          "thruster_front_right_bottom": 13450.0,
          "thruster_front_left_top": 13450.0,
          "thruster_front_right_top": 13450.0,
          "thruster_centre_rear_right_bottom": 13450.0,
          "thruster_centre_rear_left_bottom": 13450.0,
          "thruster_rear_right_bottom": 13450.0,
          "thruster_back_right_top": 13450.0,
          "thruster_rear_left_bottom": 13450.0,
          "thruster_back_left_top": 13450.0,
          "thruster_centre_right_bottom": 13450.0,
          "thruster_centre_left_bottom": 13450.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 197.0,
      "MaxSpeed": 1010.0,
      "Pitch": 32.0,
      "Yaw": 32.0,
      "Roll": 105.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 14500000.0,
        "Retro": 7260000.0,
        "Vtol": 0.0,
        "Maneuvering": 18140000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 6.0,
        "Retro": 3.0,
        "Strafe": 4.5,
        "Up": 4.5,
        "Down": 3.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 205.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 58000000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 5.0,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1812.5,
        "Retro": 907.5,
        "Vtol": 0.0,
        "Maneuvering": 2267.5
      },
      "IntakeToMainFuelRatio": 2.76,
      "TimeForIntakesToFillTank": 1160000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 12679.0,
        "SCMActive": 16799.0,
        "NAV": 28159.0
      },
      "Infrared": {
        "Start": 9594.0
      },
      "CrossSection": {
        "Front": 3814.0,
        "Side": 10222.0,
        "Top": 15257.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 14220.0,
      "PilotBurstDPS": 2735.0,
      "TurretsBurstDPS": 1091.0,
      "TotalMissilesDmg": 52975.0
    },
    "Insurance": {
      "StandardClaimTime": 15.59,
      "ExpeditedClaimTime": 5.2,
      "ExpeditedCost": 10465.0
    },
    "Buy": {
      "New Deal, Lorville": 4961250.0
    }
  },
  {
    "ClassName": "MISC_Fury",
    "Name": "Mirai Fury",
    "Description": "Featuring best-in-class maneuverability and fully integrated, cutting-edge Xi’an tech, the next-generation Fury snub fighter from Mirai uses its four halo-mounted size 2 laser repeaters to redefine short-range space combat.",
    "Career": "Combat",
    "Role": "Snub Fighter",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.45,
      "PersonalInventory": 0.22
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 13939.0,
    "ComponentsMass": 4385.0,
    "Dimensions": {
      "Length": 8.0,
      "Width": 5.4,
      "Height": 2.6
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.4,
        "Infrared": 1.4,
        "CrossSection": 1.4
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 1486.0
        },
        "Parts": {
          "Body_Top_Plate": 500.0,
          "Front_Lower_Plate": 500.0,
          "Mesh_Wing_Top_Left": 340.0,
          "Mesh_Slide_Top_Left": 340.0,
          "Mesh_Flap_Top_Left": 340.0,
          "Mesh_Wing_Top_Right": 340.0,
          "Mesh_Slide_Top_Right": 340.0,
          "Mesh_Flap_Top_Right": 340.0,
          "Mesh_Wing_Bottom_Left": 340.0,
          "Mesh_Slide_Bottom_Left": 340.0,
          "Mesh_Flap_Bottom_Left": 340.0,
          "Mesh_Wing_Bottom_Right": 340.0,
          "Mesh_Slide_Bottom_Right": 340.0,
          "Mesh_Flap_Bottom_Right": 340.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_top_left": 7500.0,
          "thruster_main_top_right": 7500.0,
          "thruster_main_bottom_left": 7500.0,
          "thruster_main_bottom_right": 7500.0
        },
        "Maneuvering": {
          "thruster_front_side_left": 7000.0,
          "thruster_front_side_right": 7000.0,
          "thruster_rear_side_left": 7000.0,
          "thruster_rear_side_right": 7000.0,
          "thruster_front_top_left": 7000.0,
          "thruster_rear_top_left": 7000.0,
          "thruster_front_top_right": 7000.0,
          "thruster_rear_top_right": 7000.0,
          "thruster_front_bottom_left": 7000.0,
          "thruster_rear_bottom_left": 7000.0,
          "thruster_front_bottom_right": 7000.0,
          "thruster_rear_bottom_right": 7000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 238.0,
      "MaxSpeed": 1263.0,
      "Pitch": 65.0,
      "Yaw": 65.0,
      "Roll": 215.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2917000.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 4324000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 15.4,
        "Retro": 4.4,
        "Strafe": 10.4,
        "Up": 11.2,
        "Down": 5.8
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 565.0,
          "BoostSpeedBackward": 275.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 2750000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 364.625,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 540.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 2134.0,
        "SCMActive": 2441.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 11230.0
      },
      "CrossSection": {
        "Front": 3265.0,
        "Side": 6429.0,
        "Top": 6058.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1190.0,
      "PilotBurstDPS": 1312.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9515.0
    },
    "Insurance": {
      "StandardClaimTime": 1.89,
      "ExpeditedClaimTime": 0.63,
      "ExpeditedCost": 1483.0
    },
    "New Ship": "Mirai Fury",
    "Dimensions2": {
      "Length": 6.13,
      "Width": 3.8,
      "Height": 3.27
    },
    "Buy": {
      "Astro Armada, Area 18": 727650.0,
      "New Deal, Lorville": 727650.0
    }
  },
  {
    "ClassName": "MISC_Fury_LX",
    "Name": "Mirai Fury LX",
    "Description": "Featuring best-in-class maneuverability and fully integrated, cutting-edge Xi’an tech, the next-generation Fury LX racing ship from Mirai switches out the lithe ship’s offensive capabilities to make room for additional maneuvering thrusters perfect for getting across the finish line.",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.45,
      "PersonalInventory": 0.22
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 12832.0,
    "ComponentsMass": 2762.0,
    "Dimensions": {
      "Length": 7.0,
      "Width": 5.4,
      "Height": 2.6
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.58,
        "Energy": 1.15,
        "Distortion": 1.15
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.5,
        "Infrared": 1.5,
        "CrossSection": 1.5
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 1377.0
        },
        "Parts": {
          "Body_Top_Plate": 400.0,
          "Front_Lower_Plate": 400.0,
          "Mesh_Wing_Bottom_Left": 240.0,
          "Mesh_Wing_Bottom_Right": 240.0,
          "Mesh_Wing_Top_Left": 240.0,
          "Mesh_Wing_Top_Right": 240.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_bottom_left": 7500.0,
          "thruster_main_bottom_right": 7500.0,
          "thruster_main_top_left": 7500.0,
          "thruster_main_top_right": 7500.0
        },
        "Maneuvering": {
          "thruster_front_side_left": 7000.0,
          "thruster_front_side_right": 7000.0,
          "thruster_rear_side_left": 7000.0,
          "thruster_rear_side_right": 7000.0,
          "thruster_mid_bottom_left": 7000.0,
          "thruster_front_bottom_left": 7000.0,
          "thruster_rear_bottom_left": 7000.0,
          "thruster_mid_bottom_right": 7000.0,
          "thruster_front_bottom_right": 7000.0,
          "thruster_rear_bottom_right": 7000.0,
          "thruster_mid_top_left": 7000.0,
          "thruster_front_top_left": 7000.0,
          "thruster_rear_top_left": 7000.0,
          "thruster_mid_top_right": 7000.0,
          "thruster_front_top_right": 7000.0,
          "thruster_rear_top_right": 7000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 249.0,
      "MaxSpeed": 1281.0,
      "Pitch": 71.5,
      "Yaw": 71.5,
      "Roll": 232.1,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2620000.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 4164000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.2,
        "Retro": 4.5,
        "Strafe": 11.4,
        "Up": 11.9,
        "Down": 6.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 587.0,
          "BoostSpeedBackward": 284.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.37,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 2750000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 20.0
      },
      "FuelUsagePerSecond": {
        "Main": 327.5,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 520.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1949.0,
        "SCMActive": 2292.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 11882.0
      },
      "CrossSection": {
        "Front": 3498.0,
        "Side": 6888.0,
        "Top": 6490.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2100.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 1.8,
      "ExpeditedClaimTime": 0.6,
      "ExpeditedCost": 1400.0
    },
    "New Ship": "Mirai Fury LX",
    "Dimensions2": {
      "Length": 6.13,
      "Width": 3.8,
      "Height": 3.27
    },
    "Buy": {
      "Astro Armada, Area 18": 824670.0
    }
  },
  {
    "ClassName": "MISC_Fury_Miru",
    "Name": "Mirai Fury MX",
    "Description": "Featuring best-in-class maneuverability and fully integrated, cutting-edge Xi’an tech, the next-generation Fury MX snub bomber from Mirai uses its twenty halo-mounted missiles to devastate targets during short-range space combat.",
    "Career": "Combat",
    "Role": "Snub Bomber",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.45,
      "PersonalInventory": 0.22
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 13939.0,
    "ComponentsMass": 5057.0,
    "Dimensions": {
      "Length": 7.0,
      "Width": 5.4,
      "Height": 2.6
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.4,
        "Infrared": 1.4,
        "CrossSection": 1.4
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 1486.0
        },
        "Parts": {
          "Body_Top_Plate": 500.0,
          "Front_Lower_Plate": 500.0,
          "Mesh_Wing_Top_Left": 340.0,
          "Mesh_Slide_Top_Left": 340.0,
          "Mesh_Flap_Top_Left": 340.0,
          "Mesh_Wing_Top_Right": 340.0,
          "Mesh_Slide_Top_Right": 340.0,
          "Mesh_Flap_Top_Right": 340.0,
          "Mesh_Wing_Bottom_Left": 340.0,
          "Mesh_Slide_Bottom_Left": 340.0,
          "Mesh_Flap_Bottom_Left": 340.0,
          "Mesh_Wing_Bottom_Right": 340.0,
          "Mesh_Slide_Bottom_Right": 340.0,
          "Mesh_Flap_Bottom_Right": 340.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_top_left": 7500.0,
          "thruster_main_top_right": 7500.0,
          "thruster_main_bottom_left": 7500.0,
          "thruster_main_bottom_right": 7500.0
        },
        "Maneuvering": {
          "thruster_front_side_left": 7000.0,
          "thruster_front_side_right": 7000.0,
          "thruster_rear_side_left": 7000.0,
          "thruster_rear_side_right": 7000.0,
          "thruster_front_top_left": 7000.0,
          "thruster_rear_top_left": 7000.0,
          "thruster_front_top_right": 7000.0,
          "thruster_rear_top_right": 7000.0,
          "thruster_front_bottom_left": 7000.0,
          "thruster_rear_bottom_left": 7000.0,
          "thruster_front_bottom_right": 7000.0,
          "thruster_rear_bottom_right": 7000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 238.0,
      "MaxSpeed": 1263.0,
      "Pitch": 65.0,
      "Yaw": 65.0,
      "Roll": 215.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 3020000.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 4476000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 15.5,
        "Retro": 4.4,
        "Strafe": 10.6,
        "Up": 11.2,
        "Down": 5.8
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 565.0,
          "BoostSpeedBackward": 275.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 2750000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 377.5,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 559.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 2801.0,
        "SCMActive": 3107.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 9830.0
      },
      "CrossSection": {
        "Front": 3265.0,
        "Side": 6429.0,
        "Top": 6058.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1190.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 37665.0
    },
    "Insurance": {
      "StandardClaimTime": 1.89,
      "ExpeditedClaimTime": 0.63,
      "ExpeditedCost": 2299.0
    },
    "New Ship": "Mirai Fury MX",
    "Dimensions2": {
      "Length": 6.13,
      "Width": 3.8,
      "Height": 3.27
    },
    "Buy": {
      "New Deal, Lorville": 727650.0
    }
  },
  {
    "ClassName": "MISC_Hull_A",
    "Name": "MISC Hull A",
    "Description": "The smallest, most affordable Hull. The Hull A is great for those just striking out in the galaxy on their own. The Hull A is most similar to the Aurora and Mustang, but lacks the ‘jack of all trades’ nature. Where the others trade cargo capacity for firepower or speed, the Hull A is 100% on-mission transport.",
    "Career": "Transporter",
    "Role": "Light Freight",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 64.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.05,
      "PersonalInventory": 1.01
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 107050.0,
    "ComponentsMass": 18030.0,
    "Dimensions": {
      "Length": 17.0,
      "Width": 4.0,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 20000.0,
          "tail_geo": 3000.0,
          "nose": 20000.0
        },
        "Parts": {
          "winglet_right": 150.0,
          "winglet_left": 150.0,
          "spindle_connector_rear_geo": 400.0,
          "hydraulic_arm_front_geo_left": 1000.0,
          "hydraulic_arm_connector_geo_left": 1000.0,
          "hydraulic_cargoplates_mount_geo_left": 1000.0,
          "DEBRIS_cargoplate_top_left": 2000.0,
          "SHIELD_SDF_01_LT": 4000.0,
          "SHIELD_SDF_02_LT": 4000.0,
          "SHIELD_SDF_03_LT": 4000.0,
          "SHIELD_SDF_04_LT": 4000.0,
          "DEBRIS_cargoplate_bot_left": 2000.0,
          "SHIELD_SDF_01_LB": 4000.0,
          "SHIELD_SDF_02_LB": 4000.0,
          "SHIELD_SDF_03_LB": 4000.0,
          "SHIELD_SDF_04_LB": 4000.0,
          "hydraulic_arm_front_geo_right": 1000.0,
          "hydraulic_arm_connector_geo_right": 1000.0,
          "hydraulic_cargoplates_mount_geo_right": 1000.0,
          "DEBRIS_cargoplate_top_right": 2000.0,
          "SHIELD_SDF_01_RT": 4000.0,
          "SHIELD_SDF_02_RT": 4000.0,
          "SHIELD_SDF_03_RT": 4000.0,
          "SHIELD_SDF_04_RT": 4000.0,
          "DEBRIS_cargoplate_bot_right": 2000.0,
          "SHIELD_SDF_01_RB": 4000.0,
          "SHIELD_SDF_02_RB": 4000.0,
          "SHIELD_SDF_03_RB": 4000.0,
          "SHIELD_SDF_04_RB": 4000.0,
          "piston_01_geo": 400.0,
          "piston_02_tube": 400.0,
          "piston_02_geo": 400.0,
          "door_02_geo_rear_right": 100.0,
          "door_lock_geo_rear_right": 100.0,
          "door_01_geo_rear_right": 100.0,
          "tail_geo_spinner": 400.0,
          "tail_geo_bot": 1500.0,
          "tail_geo_top": 1500.0,
          "hydraulic_arm_back_geo_left": 400.0,
          "hydraulic_arm_back_geo_right": 400.0,
          "door_02_geo_centre_left": 400.0,
          "door_lock_geo_centre_left": 400.0,
          "door_01_geo_centre_left": 400.0,
          "door_02_geo_centre_right": 400.0,
          "door_01_geo_centre_right": 400.0,
          "door_geo_front_right": 400.0,
          "door_geo_front_left": 400.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_aux_left": 11400.0,
          "thruster_aux_right": 11400.0,
          "thruster_main": 11400.0
        },
        "Retro": {
          "thruster_retro_right": 10500.0,
          "thruster_retro_left": 10500.0
        },
        "Vtol": {
          "thruster_vtol_rear_left": 10500.0,
          "thruster_vtol_rear_right": 10500.0,
          "thruster_vtol_front_right": 10500.0,
          "thruster_vtol_front_left": 10500.0
        },
        "Maneuvering": {
          "thruster_mav_rear_bottom_left": 10000.0,
          "thruster_mav_rear_bottom_right": 10000.0,
          "thruster_mav_rear_side_left": 10000.0,
          "thruster_mav_rear_side_right": 10000.0,
          "thruster_mav_rear_top_left": 10000.0,
          "thruster_mav_rear_top_right": 10000.0,
          "thruster_mav_front_top_right": 10000.0,
          "thruster_mav_front_top_left": 10000.0,
          "thruster_mav_front_side_right": 10000.0,
          "thruster_mav_front_side_left": 10000.0,
          "thruster_mav_front_bottom_right": 10000.0,
          "thruster_mav_front_bottom_left": 10000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 140.0,
      "MaxSpeed": 950.0,
      "Pitch": 35.0,
      "Yaw": 35.0,
      "Roll": 100.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 6330000.0,
        "Retro": 5080000.0,
        "Vtol": 3804000.0,
        "Maneuvering": 6336000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.1,
        "Retro": 4.1,
        "Strafe": 2.5,
        "Up": 4.0,
        "Down": 3.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 340.0,
          "BoostSpeedBackward": 150.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.7,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 16399999.999999998,
      "FuelIntakeRate": 7.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 3.75,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 791.25,
        "Retro": 635.0,
        "Vtol": 475.5,
        "Maneuvering": 792.0
      },
      "IntakeToMainFuelRatio": 0.88,
      "TimeForIntakesToFillTank": 2342857.14
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 10969.0,
        "SCMActive": 13645.0,
        "NAV": 18502.0
      },
      "Infrared": {
        "Start": 11166.0
      },
      "CrossSection": {
        "Front": 0.0,
        "Side": 0.0,
        "Top": 0.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4740.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 5.95,
      "ExpeditedClaimTime": 1.98,
      "ExpeditedCost": 2700.0
    },
    "Dimensions2": {
      "Length": 22.0,
      "Width": 8.0,
      "Height": 4.0
    },
    "Buy": {
      "New Deal, Lorville": 1701000.0
    }
  },
  {
    "ClassName": "MISC_Hull_C",
    "Name": "MISC Hull C",
    "Description": "Often called the most common ship in the galaxy, the Hull C is the most-produced of the range and is considered by many to be the most versatile. Intended to hit the ‘sweet spot’ between the smaller single-person transports and the massive superfreighters that make up the rest of the range, the Hull C offers the expansive modularity of the larger ships while still retaining a modicum of the maneuverability allowed the low end of the range.",
    "Career": "Transporter",
    "Role": "Heavy Freight",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 4608.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 5.4,
      "PersonalInventory": 6.79
    },
    "Crew": 1,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 726530.0,
    "ComponentsMass": 184712.8,
    "Dimensions": {
      "Length": 90.0,
      "Width": 35.5,
      "Height": 25.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 60000.0
        },
        "Parts": {
          "Nose": 30000.0,
          "Vtol_Door_L_Geo": 8000.0,
          "Vtol_Door_R_Geo": 8000.0,
          "Tunnel_Front": 10000.0,
          "Center_1_ph_geo": 8000.0,
          "FoldingSection001_geo": 8000.0,
          "DEBRIS_Strut_Inner005": 8000.0,
          "DEBRIS_Strut_Outer005": 8000.0,
          "DEBRIS_Strut_Inner006": 8000.0,
          "DEBRIS_Strut_Outer006": 8000.0,
          "DEBRIS_Strut_Inner007": 8000.0,
          "DEBRIS_Strut_Outer007": 8000.0,
          "DEBRIS_Strut_Inner008": 8000.0,
          "DEBRIS_Strut_Outer008": 8000.0,
          "DEBRIS_Strut_Inner001": 8000.0,
          "DEBRIS_Strut_Outer001": 8000.0,
          "DEBRIS_Strut_Inner004": 8000.0,
          "DEBRIS_Strut_Outer004": 8000.0,
          "DEBRIS_Strut_Inner003": 8000.0,
          "DEBRIS_Strut_Outer003": 8000.0,
          "DEBRIS_Strut_Inner002": 8000.0,
          "DEBRIS_Strut_Outer002": 8000.0,
          "Rear": 20500.0,
          "Engine_Left": 8000.0,
          "EngineTop_Left": 8000.0,
          "EngineDebris": 1000.0,
          "Engine_Right": 8000.0,
          "EngineTop_Right": 8000.0,
          "EngineDebris001": 1000.0,
          "Center": 9000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_bottom_middle": 15000.0,
          "thruster_main_top_middle": 15000.0,
          "thruster_main_top_left": 15000.0,
          "thruster_main_bottom_left": 15000.0,
          "thruster_main_top_right": 15000.0,
          "thruster_main_bottom_right": 15000.0
        },
        "Retro": {
          "thruster_retro_top_left": 15000.0,
          "thruster_retro_top_right": 15000.0,
          "thruster_retro_bottom_left": 15000.0,
          "thruster_retro_bottom_right": 15000.0
        },
        "Vtol": {
          "thruster_vtol_outer_front_right": 15000.0,
          "thruster_vtol_outer_front_left": 15000.0,
          "thruster_vtol_inner_front_right": 15000.0,
          "thruster_vtol_inner_front_left": 15000.0,
          "thruster_vtol_outer_rear_left": 15000.0,
          "thruster_vtol_inner_rear_left": 15000.0,
          "thruster_vtol_outer_rear_right": 15000.0,
          "thruster_vtol_inner_rear_right": 15000.0
        },
        "Maneuvering": {
          "thruster_bottom_front_right": 15000.0,
          "thruster_bottom_front_left": 15000.0,
          "thruster_top_front_left": 15000.0,
          "thruster_side_front_left": 15000.0,
          "thruster_top_front_right": 15000.0,
          "thruster_side_front_right": 15000.0,
          "thruster_top_rear_left": 15000.0,
          "thruster_side_rear_left": 15000.0,
          "thruster_bottom_rear_left": 15000.0,
          "thruster_side_rear_right": 15000.0,
          "thruster_top_rear_right": 15000.0,
          "thruster_bottom_rear_right": 15000.0,
          "thruster_bottom_mid_left": 15000.0,
          "thruster_top_mid_left": 15000.0,
          "thruster_top_mid_right": 15000.0,
          "thruster_bottom_mid_right": 15000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 110.0,
      "MaxSpeed": 890.0,
      "Pitch": 16.0,
      "Yaw": 16.0,
      "Roll": 25.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 27600000.0,
        "Retro": 20100000.0,
        "Vtol": 2800000.0,
        "Maneuvering": 55640000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.8,
        "Retro": 2.0,
        "Strafe": 0.7,
        "Up": 2.0,
        "Down": 2.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 7.0,
        "ScmMode": {
          "BoostSpeedForward": 290.0,
          "BoostSpeedBackward": 100.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 877000000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 8600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 7.5,
        "Retro": 5.0,
        "Vtol": 10.0,
        "Maneuvering": 20.0
      },
      "FuelUsagePerSecond": {
        "Main": 3450.0,
        "Retro": 2512.5,
        "Vtol": 350.0,
        "Maneuvering": 6955.0
      },
      "IntakeToMainFuelRatio": 1.45,
      "TimeForIntakesToFillTank": 17540000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 31605.0,
        "SCMActive": 37970.0,
        "NAV": 47052.0
      },
      "Infrared": {
        "Start": 23532.0
      },
      "CrossSection": {
        "Front": 15791.0,
        "Side": 15791.0,
        "Top": 32871.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 224400.0,
      "PilotBurstDPS": 1091.0,
      "TurretsBurstDPS": 2182.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 45.0,
      "ExpeditedClaimTime": 15.0,
      "ExpeditedCost": 22500.0
    },
    "New Ship": "MISC Hull C",
    "Dimensions2": {
      "Length": 125.0,
      "Width": 60.0,
      "Height": 60.00
    },
    "Buy": {
      "New Deal, Lorville": 16537500.0
    }
  },
  {
    "ClassName": "MISC_Prospector",
    "Name": "MISC Prospector",
    "Description": "For years, the Prospector has been the universe’s preferred mining vessel for solo operators. Featuring MISC’s sleek design sensibility and a bevy of upgraded high-tech mining tools, the 2947 Prospector perfectly balances form and functionality. ",
    "Career": "Industrial",
    "Role": "Light Mining",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 32.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.93
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 122096.0,
    "ComponentsMass": 18681.0,
    "Dimensions": {
      "Length": 26.0,
      "Width": 16.0,
      "Height": 7.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.05,
        "Distortion": 1.05
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.5,
        "Infrared": 1.5,
        "CrossSection": 1.5
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 13800.0,
          "Rear": 13800.0
        },
        "Parts": {
          "Coupling_FR": 1000.0,
          "Basket_R": 1000.0,
          "Coupling_FL": 1000.0,
          "Basket_L": 1000.0,
          "Nose_Pipes": 400.0,
          "hardpoint_landinggear_front": 200.0,
          "Coupling_RL": 100.0,
          "Coupling_RR": 100.0,
          "Rear_Pipes": 400.0,
          "hardpoint_landinggear_left": 200.0,
          "hardpoint_landinggear_right": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_rear_middle": 11400.0,
          "thruster_main_rear_right": 11400.0,
          "thruster_main_rear_left": 11400.0
        },
        "Retro": {
          "thruster_retro_left": 10500.0,
          "thruster_retro_right": 10500.0,
          "thruster_retro_top": 10500.0
        },
        "Maneuvering": {
          "thruster_front_left_bottom": 10000.0,
          "thruster_front_right_bottom": 10000.0,
          "thruster_front_right_side": 10000.0,
          "thruster_front_left_side": 10000.0,
          "thruster_front_left_top": 10000.0,
          "thruster_front_right_top": 10000.0,
          "thruster_rear_left_top": 10000.0,
          "thruster_rear_right_top": 10000.0,
          "thruster_rear_right_bottom": 10000.0,
          "thruster_rear_left_bottom": 10000.0,
          "thruster_rear_left_side": 10000.0,
          "thruster_rear_right_side": 10000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 156.0,
      "MaxSpeed": 994.0,
      "Pitch": 35.0,
      "Yaw": 35.0,
      "Roll": 75.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 6900000.0,
        "Retro": 5300000.0,
        "Vtol": 0.0,
        "Maneuvering": 18040000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.0,
        "Retro": 3.7,
        "Strafe": 3.0,
        "Up": 3.5,
        "Down": 3.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 371.0,
          "BoostSpeedBackward": 160.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.1,
        "RampDown": 0.7,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 21000000.0,
      "FuelIntakeRate": 13.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 3.75,
        "Retro": 3.75,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 862.5,
        "Retro": 662.5,
        "Vtol": 0.0,
        "Maneuvering": 2255.0
      },
      "IntakeToMainFuelRatio": 1.51,
      "TimeForIntakesToFillTank": 1615384.62
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 12649.0,
        "SCMActive": 15203.0,
        "NAV": 23937.0
      },
      "Infrared": {
        "Start": 13084.0
      },
      "CrossSection": {
        "Front": 4800.0,
        "Side": 10200.0,
        "Top": 16500.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 5550.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 9.0,
      "ExpeditedClaimTime": 3.0,
      "ExpeditedCost": 3040.0
    },
    "Buy": {
      "New Deal, Lorville": 2929500.0
    }
  },
  {
    "ClassName": "MISC_Razor",
    "Name": "Mirai Razor",
    "Description": "This advanced racer features an advanced composite spaceframe that puts pure speed ahead of everything else... it's the ship for pilots who want to leave the competition in the dust.",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.43,
      "PersonalInventory": 0.43
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 10861.0,
    "ComponentsMass": 2295.0,
    "Dimensions": {
      "Length": 11.5,
      "Width": 8.2,
      "Height": 2.7
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "hull_front": 800.0,
          "hull_rear": 1700.0
        },
        "Parts": {
          "wing_front_left": 600.0,
          "wing_front_right": 600.0,
          "wing_bridge_left": 400.0,
          "wing_bridge_right": 400.0,
          "wing_rear_left": 600.0,
          "wing_rear_right": 600.0,
          "wing_top": 400.0,
          "canopy_front": 550.0,
          "canopy_top": 550.0,
          "canopy_left": 550.0,
          "canopy_right": 550.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 5670.0,
          "engine_right": 5670.0
        },
        "Retro": {
          "thruster_retro_left": 5000.0,
          "thruster_retro_right": 5000.0
        },
        "Maneuvering": {
          "thruster_RR_top": 4560.0,
          "thruster_RR_side": 4560.0,
          "thruster_RR_bottom": 4560.0,
          "thruster_RL_bottom": 4560.0,
          "thruster_RL_side": 4560.0,
          "thruster_RL_top": 4560.0,
          "thruster_FR_top": 4560.0,
          "thruster_FR_side": 4560.0,
          "thruster_FR_bottom": 4560.0,
          "thruster_FL_bottom": 4560.0,
          "thruster_FL_side": 4560.0,
          "thruster_FL_top": 4560.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 280.0,
      "MaxSpeed": 1450.0,
      "Pitch": 55.0,
      "Yaw": 55.0,
      "Roll": 200.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2320000.0,
        "Retro": 451400.0,
        "Vtol": 0.0,
        "Maneuvering": 2475634.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 18.0,
        "Retro": 3.5,
        "Strafe": 4.4,
        "Up": 5.9,
        "Down": 4.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 620.0,
          "BoostSpeedBackward": 290.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 25.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 33.3,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 3000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1000000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 290.0,
        "Retro": 56.425,
        "Vtol": 0.0,
        "Maneuvering": 309.454
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1424.0,
        "SCMActive": 1636.0,
        "NAV": 8957.0
      },
      "Infrared": {
        "Start": 7146.0
      },
      "CrossSection": {
        "Front": 1513.0,
        "Side": 4190.0,
        "Top": 6402.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2240.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 2280.0
    },
    "Insurance": {
      "StandardClaimTime": 6.075,
      "ExpeditedClaimTime": 2.025,
      "ExpeditedCost": 3040.0
    },
    "Buy": {
      "New Deal, Lorville": 1863540.0
    }
  },
  {
    "ClassName": "MISC_Razor_EX",
    "Name": "Mirai Razor EX",
    "Description": "Outfitted with signature-reducing materials, the Razor EX was a specialty build for the UEE Advocacy for use in surveillance and extraction operations. Although the EX was ultimately rejected for widespread use, a variation of the model was released for members of the public looking to keep a lower profile.",
    "Career": "Combat",
    "Role": "Stealth Fighter",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.43,
      "PersonalInventory": 0.43
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 10860.0,
    "ComponentsMass": 2312.0,
    "Dimensions": {
      "Length": 11.5,
      "Width": 8.2,
      "Height": 2.7
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.6,
        "Infrared": 0.6,
        "CrossSection": 0.6
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "hull_front": 800.0,
          "hull_rear": 1700.0
        },
        "Parts": {
          "wing_front_left": 600.0,
          "wing_front_right": 600.0,
          "wing_bridge_left": 400.0,
          "wing_bridge_right": 400.0,
          "wing_rear_left": 600.0,
          "wing_rear_right": 600.0,
          "wing_top": 400.0,
          "canopy_front": 550.0,
          "canopy_top": 550.0,
          "canopy_left": 550.0,
          "canopy_right": 550.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 5670.0,
          "engine_right": 5670.0
        },
        "Retro": {
          "thruster_retro_left": 5000.0,
          "thruster_retro_right": 5000.0
        },
        "Maneuvering": {
          "thruster_RR_top": 4560.0,
          "thruster_RR_side": 4560.0,
          "thruster_RR_bottom": 4560.0,
          "thruster_RL_bottom": 4560.0,
          "thruster_RL_side": 4560.0,
          "thruster_RL_top": 4560.0,
          "thruster_FR_top": 4560.0,
          "thruster_FR_side": 4560.0,
          "thruster_FR_bottom": 4560.0,
          "thruster_FL_bottom": 4560.0,
          "thruster_FL_side": 4560.0,
          "thruster_FL_top": 4560.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 280.0,
      "MaxSpeed": 1450.0,
      "Pitch": 55.0,
      "Yaw": 55.0,
      "Roll": 200.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2320000.0,
        "Retro": 451400.0,
        "Vtol": 0.0,
        "Maneuvering": 2368000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 18.1,
        "Retro": 3.5,
        "Strafe": 4.5,
        "Up": 6.0,
        "Down": 3.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 620.0,
          "BoostSpeedBackward": 290.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 25.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 33.3,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 3000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1000000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 290.0,
        "Retro": 56.425,
        "Vtol": 0.0,
        "Maneuvering": 296.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 2894.0,
        "SCMActive": 3430.0,
        "NAV": 7414.0
      },
      "Infrared": {
        "Start": 5163.0
      },
      "CrossSection": {
        "Front": 1223.0,
        "Side": 3386.0,
        "Top": 5173.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1280.0,
      "PilotBurstDPS": 1120.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 2152.0
    },
    "Insurance": {
      "StandardClaimTime": 5.91,
      "ExpeditedClaimTime": 1.97,
      "ExpeditedCost": 2740.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1757700.0,
      "New Deal, Lorville": 1757700.0
    }
  },
  {
    "ClassName": "MISC_Razor_LX",
    "Name": "Mirai Razor LX",
    "Description": "The Razor gets supercharged. The LX features an overclocked engine to unleash blazing top speeds. This power comes at a cost with reduced maneuverability and armaments making it ideal for straight-shot racing. But who needs weapons when you’re leaving your competition in the dust.",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.43,
      "PersonalInventory": 0.43
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 11701.0,
    "ComponentsMass": 2143.0,
    "Dimensions": {
      "Length": 11.5,
      "Width": 8.2,
      "Height": 2.7
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "hull_front": 900.0,
          "hull_rear": 700.0
        },
        "Parts": {
          "wing_front_left": 100.0,
          "wing_front_right": 100.0,
          "wing_bridge_left": 100.0,
          "wing_bridge_right": 100.0,
          "wing_rear_left": 100.0,
          "wing_rear_right": 100.0,
          "wing_top": 100.0,
          "canopy_front": 150.0,
          "canopy_top": 150.0,
          "canopy_left": 150.0,
          "canopy_right": 150.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 5670.0,
          "engine_right": 5670.0
        },
        "Retro": {
          "thruster_retro_left": 5000.0,
          "thruster_retro_right": 5000.0
        },
        "Maneuvering": {
          "thruster_RR_top": 4560.0,
          "thruster_RR_side": 4560.0,
          "thruster_RR_bottom": 4560.0,
          "thruster_RL_bottom": 4560.0,
          "thruster_RL_side": 4560.0,
          "thruster_RL_top": 4560.0,
          "thruster_FR_top": 4560.0,
          "thruster_FR_side": 4560.0,
          "thruster_FR_bottom": 4560.0,
          "thruster_FL_bottom": 4560.0,
          "thruster_FL_side": 4560.0,
          "thruster_FL_top": 4560.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 275.0,
      "MaxSpeed": 1400.0,
      "Pitch": 55.0,
      "Yaw": 55.0,
      "Roll": 200.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2280000.0,
        "Retro": 451400.0,
        "Vtol": 0.0,
        "Maneuvering": 2472000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 17.9,
        "Retro": 3.5,
        "Strafe": 4.4,
        "Up": 5.9,
        "Down": 4.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 620.0,
          "BoostSpeedBackward": 290.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 25.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 33.3,
        "X_AccelMultiplicator": 2.5,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 3000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1000000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 285.0,
        "Retro": 56.425,
        "Vtol": 0.0,
        "Maneuvering": 309.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 4698.0,
        "SCMActive": 5591.0,
        "NAV": 12231.0
      },
      "Infrared": {
        "Start": 8555.0
      },
      "CrossSection": {
        "Front": 2208.0,
        "Side": 6116.0,
        "Top": 9343.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2240.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 6.075,
      "ExpeditedClaimTime": 2.025,
      "ExpeditedCost": 3040.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1927800.0,
      "New Deal, Lorville": 1927800.0
    }
  },
  {
    "ClassName": "MISC_Reliant",
    "Name": "MISC Reliant Kore",
    "Description": "With the Reliant Kore, MISC adds to its already impressive lineup of ships, a smaller introductory-class spacecraft. Utilizing advanced Xi’An designs, the Reliant features broad, sleek wings, omni-directional thrusters and a fully-articulated two-seat cockpit that supports horizontal and vertical flight modes. All of this combines with a larger carrying capacity than many ships in its class to make the Kore a natural choice for short-range hauling, or with the simple addition of a few optional components, this can-do ship can do anything you dream of.",
    "Career": "Multi-Role",
    "Role": "Starter / Light Freight",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 6.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 2.03
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 35153.0,
    "ComponentsMass": 7214.0,
    "Dimensions": {
      "Length": 14.5,
      "Width": 28.5,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 3000.0,
          "Body": 3500.0
        },
        "Parts": {
          "Wing_Left": 3500.0,
          "Vertical_Stabilizer_Wing_Top_Left": 25.0,
          "Vertical_Stabilizer_Wing_Bottom_Left": 25.0,
          "Wing_Right": 3000.0,
          "Vertical_Stabilizer_Wing_Top_Right": 25.0,
          "Vertical_Stabilizer_Wing_Bottom_Right": 25.0,
          "Engine_Left": 1180.0,
          "Engine_Right": 1180.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 8500.0,
          "thruster_main_right": 8500.0
        },
        "Retro": {
          "Thruster_LRF": 6250.0,
          "Thruster_LLF": 6250.0,
          "Thruster_ULF": 6250.0,
          "Thruster_URF": 6250.0
        },
        "Maneuvering": {
          "Thruster_LLS": 6250.0,
          "Thruster_LRS": 6250.0,
          "Thruster_LRR": 6250.0,
          "Thruster_LRB": 6250.0,
          "Thruster_LLL": 6250.0,
          "Thruster_LLB": 6250.0,
          "Thruster_ULB": 6250.0,
          "Thruster_ULL": 6250.0,
          "Thruster_URB": 6250.0,
          "Thruster_URR": 6250.0,
          "Thruster_ULS": 6250.0,
          "Thruster_URS": 6250.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2000000.0,
        "Retro": 2128000.0,
        "Vtol": 0.0,
        "Maneuvering": 15472000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.6,
        "Retro": 5.3,
        "Strafe": 7.9,
        "Up": 7.9,
        "Down": 7.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 250.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.33,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.33,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 10500000.0,
      "FuelIntakeRate": 8.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 5.0,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 250.0,
        "Retro": 266.0,
        "Vtol": 0.0,
        "Maneuvering": 1934.0
      },
      "IntakeToMainFuelRatio": 3.2,
      "TimeForIntakesToFillTank": 1312500.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 2594.0,
        "SCMActive": 3082.0,
        "NAV": 10128.0
      },
      "Infrared": {
        "Start": 8406.0
      },
      "CrossSection": {
        "Front": 11438.0,
        "Side": 1601.0,
        "Top": 5719.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3000.0,
      "PilotBurstDPS": 1312.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9515.0
    },
    "Insurance": {
      "StandardClaimTime": 0.675,
      "ExpeditedClaimTime": 0.0,
      "ExpeditedCost": 340.0
    },
    "Buy": {
      "New Deal, Lorville": 1719900.0
    }
  },
  {
    "ClassName": "MISC_Reliant_Mako",
    "Name": "MISC Reliant Mako",
    "Description": "The Empire depends on up-to-the-second information, which is why reporters need to be able to go where the news is happening: wherever, whenever. Enter the Mako, all the flexibility and dependability of a MISC Reliant combined with a state-of-the-art Cernan camera package to capture every moment as it happens with the clarity and accuracy that makes headlines. ",
    "Career": "Multi-Role",
    "Role": "Reporting",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.68
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 35153.0,
    "ComponentsMass": 6174.0,
    "Dimensions": {
      "Length": 14.5,
      "Width": 28.5,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 3000.0,
          "Body": 3500.0
        },
        "Parts": {
          "Wing_Left": 3500.0,
          "Vertical_Stabilizer_Wing_Top_Left": 25.0,
          "Vertical_Stabilizer_Wing_Bottom_Left": 25.0,
          "Wing_Right": 3000.0,
          "Vertical_Stabilizer_Wing_Top_Right": 25.0,
          "Vertical_Stabilizer_Wing_Bottom_Right": 25.0,
          "Engine_Left": 1180.0,
          "Engine_Right": 1180.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 8500.0,
          "thruster_main_right": 8500.0
        },
        "Retro": {
          "Thruster_LRF": 6250.0,
          "Thruster_LLF": 6250.0,
          "Thruster_ULF": 6250.0,
          "Thruster_URF": 6250.0
        },
        "Maneuvering": {
          "Thruster_LLS": 6250.0,
          "Thruster_LRS": 6250.0,
          "Thruster_LRR": 6250.0,
          "Thruster_LRB": 6250.0,
          "Thruster_LLL": 6250.0,
          "Thruster_LLB": 6250.0,
          "Thruster_ULB": 6250.0,
          "Thruster_ULL": 6250.0,
          "Thruster_URB": 6250.0,
          "Thruster_URR": 6250.0,
          "Thruster_ULS": 6250.0,
          "Thruster_URS": 6250.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2000000.0,
        "Retro": 2128000.0,
        "Vtol": 0.0,
        "Maneuvering": 15472000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.7,
        "Retro": 5.3,
        "Strafe": 8.0,
        "Up": 8.0,
        "Down": 8.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 250.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.33,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.33,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 10500000.0,
      "FuelIntakeRate": 4.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 5.0,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 250.0,
        "Retro": 266.0,
        "Vtol": 0.0,
        "Maneuvering": 1934.0
      },
      "IntakeToMainFuelRatio": 1.6,
      "TimeForIntakesToFillTank": 2625000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 2591.0,
        "SCMActive": 3064.0,
        "NAV": 10124.0
      },
      "Infrared": {
        "Start": 9121.0
      },
      "CrossSection": {
        "Front": 10371.0,
        "Side": 1452.0,
        "Top": 5186.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9515.0
    },
    "Insurance": {
      "StandardClaimTime": 5.36,
      "ExpeditedClaimTime": 1.79,
      "ExpeditedCost": 2868.0
    },
    "Buy": {
      "New Deal, Lorville": 2513700.0
    }
  },
  {
    "ClassName": "MISC_Reliant_Sen",
    "Name": "MISC Reliant Sen",
    "Description": "Magellan, Pierce, Croshaw, names that echo through history thanks to their adventurous spirit, a curious nature, and a reliable ship. The Reliant Sen is a versatile mobile science platform; outfitted with long range capabilities to take you further, longer, and the advanced Samos sensor suite. Perfect for the aspiring explorer who wants to whisper their name into the halls of history.",
    "Career": "Multi-Role",
    "Role": "Light Science",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.85
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 35153.0,
    "ComponentsMass": 7234.0,
    "Dimensions": {
      "Length": 14.5,
      "Width": 28.5,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 3000.0,
          "Body": 3500.0
        },
        "Parts": {
          "Wing_Left": 3500.0,
          "Vertical_Stabilizer_Wing_Top_Left": 25.0,
          "Vertical_Stabilizer_Wing_Bottom_Left": 25.0,
          "Wing_Right": 3000.0,
          "Vertical_Stabilizer_Wing_Top_Right": 25.0,
          "Vertical_Stabilizer_Wing_Bottom_Right": 25.0,
          "Engine_Left": 1180.0,
          "Engine_Right": 1180.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 8500.0,
          "thruster_main_right": 8500.0
        },
        "Retro": {
          "Thruster_LRF": 6250.0,
          "Thruster_LLF": 6250.0,
          "Thruster_ULF": 6250.0,
          "Thruster_URF": 6250.0
        },
        "Maneuvering": {
          "Thruster_LLS": 6250.0,
          "Thruster_LRS": 6250.0,
          "Thruster_LRR": 6250.0,
          "Thruster_LRB": 6250.0,
          "Thruster_LLL": 6250.0,
          "Thruster_LLB": 6250.0,
          "Thruster_ULB": 6250.0,
          "Thruster_ULL": 6250.0,
          "Thruster_URB": 6250.0,
          "Thruster_URR": 6250.0,
          "Thruster_ULS": 6250.0,
          "Thruster_URS": 6250.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2000000.0,
        "Retro": 2128000.0,
        "Vtol": 0.0,
        "Maneuvering": 15472000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.7,
        "Retro": 5.4,
        "Strafe": 8.0,
        "Up": 8.0,
        "Down": 8.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 250.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.33,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.33,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 10500000.0,
      "FuelIntakeRate": 4.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 5.0,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 250.0,
        "Retro": 266.0,
        "Vtol": 0.0,
        "Maneuvering": 1934.0
      },
      "IntakeToMainFuelRatio": 1.6,
      "TimeForIntakesToFillTank": 2625000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 2587.0,
        "SCMActive": 3064.0,
        "NAV": 10121.0
      },
      "Infrared": {
        "Start": 9121.0
      },
      "CrossSection": {
        "Front": 10371.0,
        "Side": 1452.0,
        "Top": 5186.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3700.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9515.0
    },
    "Insurance": {
      "StandardClaimTime": 4.82,
      "ExpeditedClaimTime": 1.61,
      "ExpeditedCost": 2653.0
    },
    "Buy": {
      "New Deal, Lorville": 2249100.0
    }
  },
  {
    "ClassName": "MISC_Reliant_Tana",
    "Name": "MISC Reliant Tana",
    "Description": "With Humanity ever-expanding through the universe, the need for a versatile lightweight fighter has expanded with it. Easy to maintain with a rugged construction, the Reliant Tana makes for an ideal choice for frontier and outpost defense thanks to its custom high-yield power plant, stronger shields, and additional weapon mounts.",
    "Career": "Multi-Role",
    "Role": "Light Fighter",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 1.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.42
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 34968.0,
    "ComponentsMass": 8064.0,
    "Dimensions": {
      "Length": 14.5,
      "Width": 28.5,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 3500.0,
          "Body": 3500.0
        },
        "Parts": {
          "Wing_Left": 2700.0,
          "Vertical_Stabilizer_Wing_Top_Left": 25.0,
          "Vertical_Stabilizer_Wing_Bottom_Left": 25.0,
          "Wing_Right": 2700.0,
          "Vertical_Stabilizer_Wing_Top_Right": 25.0,
          "Vertical_Stabilizer_Wing_Bottom_Right": 25.0,
          "Engine_Left": 1180.0,
          "Engine_Right": 1180.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 8500.0,
          "thruster_main_right": 8500.0
        },
        "Retro": {
          "Thruster_LRF": 6250.0,
          "Thruster_LLF": 6250.0,
          "Thruster_ULF": 6250.0,
          "Thruster_URF": 6250.0
        },
        "Maneuvering": {
          "Thruster_LLS": 6250.0,
          "Thruster_LRS": 6250.0,
          "Thruster_LRR": 6250.0,
          "Thruster_LRB": 6250.0,
          "Thruster_LLL": 6250.0,
          "Thruster_LLB": 6250.0,
          "Thruster_ULB": 6250.0,
          "Thruster_ULL": 6250.0,
          "Thruster_URB": 6250.0,
          "Thruster_URR": 6250.0,
          "Thruster_ULS": 6250.0,
          "Thruster_URS": 6250.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2000000.0,
        "Retro": 2128000.0,
        "Vtol": 0.0,
        "Maneuvering": 15472000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.8,
        "Retro": 5.3,
        "Strafe": 8.0,
        "Up": 8.0,
        "Down": 8.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 250.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.33,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.33,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 7500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 5.0,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 250.0,
        "Retro": 266.0,
        "Vtol": 0.0,
        "Maneuvering": 1934.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 2780.0,
        "SCMActive": 3257.0,
        "NAV": 10313.0
      },
      "Infrared": {
        "Start": 9144.0
      },
      "CrossSection": {
        "Front": 11662.0,
        "Side": 1633.0,
        "Top": 5831.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 1747.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 42435.0
    },
    "Insurance": {
      "StandardClaimTime": 4.82,
      "ExpeditedClaimTime": 1.61,
      "ExpeditedCost": 3829.0
    },
    "Buy": {
      "New Deal, Lorville": 1984500.0
    }
  },
  {
    "ClassName": "MISC_Starfarer",
    "Name": "MISC Starfarer",
    "Description": "The Starfarer differs from traditional bulk freighters in one key way: it is a dedicated fuel platform. The Starfarer is designed not only to load, store and protect fuel stasis units, it is designed to take in spaceborne gases and refine them for use without landing. And while it excels at this, the Starfarer can also be used to ferry traditional bulk cargo pods.",
    "Career": "Support",
    "Role": "Heavy Refuelling",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 291.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 9.14
    },
    "Crew": 1,
    "WeaponCrew": 3,
    "OperationsCrew": 0,
    "Mass": 3466606.0,
    "ComponentsMass": 111330.0,
    "Dimensions": {
      "Length": 101.0,
      "Width": 46.5,
      "Height": 23.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.55,
        "Energy": 1.1,
        "Distortion": 1.1
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.4,
        "Infrared": 1.4,
        "CrossSection": 1.4
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 31500.0,
          "body": 31500.0
        },
        "Parts": {
          "wing_back_right": 3600.0,
          "spoiler_mid": 1200.0,
          "leg_right": 2200.0,
          "wing_back_left": 3600.0,
          "leg_left": 2200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_main": 21000.0,
          "engine_right": 22500.0,
          "engine_left": 22500.0
        },
        "Retro": {
          "thruster_retro_right": 21178.0,
          "thruster_retro_left": 21178.0
        },
        "Vtol": {
          "thruster_VTOL_RR": 21000.0,
          "thruster_VTOL_RL": 21000.0,
          "thruster_VTOL_FL": 21000.0,
          "thruster_VTOL_FR": 21000.0
        },
        "Maneuvering": {
          "thruster_side_FL": 21000.0,
          "thruster_side_FR": 21000.0,
          "thruster_top_FL": 21000.0,
          "thruster_top_FR": 21000.0,
          "thruster_bottom_FL": 21000.0,
          "thruster_bottom_FR": 21000.0,
          "thruster_top_RR": 21000.0,
          "thruster_bottom_RR": 21000.0,
          "thruster_side_RR": 21000.0,
          "thruster_bottom_RL": 21000.0,
          "thruster_side_RL": 21000.0,
          "thruster_top_RL": 21000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 106.0,
      "MaxSpeed": 845.0,
      "Pitch": 23.0,
      "Yaw": 23.0,
      "Roll": 45.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 91500000.0,
        "Retro": 50000000.0,
        "Vtol": 64000000.0,
        "Maneuvering": 80000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.6,
        "Retro": 1.4,
        "Strafe": 1.6,
        "Up": 2.1,
        "Down": 2.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 7.0,
        "ScmMode": {
          "BoostSpeedForward": 295.0,
          "BoostSpeedBackward": 106.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.1,
        "RampDown": 0.7,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 652200000.0,
      "FuelIntakeRate": 220.0,
      "QuantumFuelCapacity": 8600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 3.75,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 11437.5,
        "Retro": 6250.0,
        "Vtol": 8000.0,
        "Maneuvering": 10000.0
      },
      "IntakeToMainFuelRatio": 1.92,
      "TimeForIntakesToFillTank": 2964545.45
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 31625.0,
        "SCMActive": 37694.0,
        "NAV": 53250.0
      },
      "Infrared": {
        "Start": 21443.0
      },
      "CrossSection": {
        "Front": 8170.0,
        "Side": 18812.0,
        "Top": 34203.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 10.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 168300.0,
      "PilotBurstDPS": 4102.0,
      "TurretsBurstDPS": 3818.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 18.0,
      "ExpeditedClaimTime": 6.0,
      "ExpeditedCost": 9000.0
    },
    "Buy": {
      "New Deal, Lorville": 13230000.0
    }
  },
  {
    "ClassName": "MISC_Starfarer_Gemini",
    "Name": "MISC Starfarer Gemini",
    "Description": "The United Empire of Earth military uses an adapted ‘rough and tumble’ variant of the Starfarer for their front line operations. The G2M Gemini, more commonly the Starfarer Gemini or ‘Star G,’ trades some cargo capacity and maneuverability in exchange for reinforced armor, increased shielding, more powerful engines and stronger versions of the three manned turrets.",
    "Career": "Support",
    "Role": "Heavy Refuelling",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 291.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 9.14
    },
    "Crew": 2,
    "WeaponCrew": 3,
    "OperationsCrew": 0,
    "Mass": 3494690.0,
    "ComponentsMass": 110781.0,
    "Dimensions": {
      "Length": 101.0,
      "Width": 46.5,
      "Height": 23.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 0.95,
        "Distortion": 0.95
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.4,
        "Infrared": 1.4,
        "CrossSection": 1.4
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 33059.25,
          "body": 31500.0
        },
        "Parts": {
          "wing_back_right": 3600.0,
          "spoiler_mid": 1200.0,
          "leg_right": 2200.0,
          "wing_back_left": 3600.0,
          "leg_left": 2200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_main": 21000.0,
          "engine_right": 22500.0,
          "engine_left": 22500.0
        },
        "Retro": {
          "thruster_retro_right": 21178.0,
          "thruster_retro_left": 21178.0
        },
        "Vtol": {
          "thruster_VTOL_RR": 21000.0,
          "thruster_VTOL_RL": 21000.0,
          "thruster_VTOL_FL": 21000.0,
          "thruster_VTOL_FR": 21000.0
        },
        "Maneuvering": {
          "thruster_side_FL": 21000.0,
          "thruster_side_FR": 21000.0,
          "thruster_top_FL": 21000.0,
          "thruster_top_FR": 21000.0,
          "thruster_bottom_FL": 21000.0,
          "thruster_bottom_FR": 21000.0,
          "thruster_top_RR": 21000.0,
          "thruster_bottom_RR": 21000.0,
          "thruster_side_RR": 21000.0,
          "thruster_bottom_RL": 21000.0,
          "thruster_side_RL": 21000.0,
          "thruster_top_RL": 21000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 106.0,
      "MaxSpeed": 845.0,
      "Pitch": 23.0,
      "Yaw": 23.0,
      "Roll": 45.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 91000000.0,
        "Retro": 50000000.0,
        "Vtol": 64000000.0,
        "Maneuvering": 80000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.6,
        "Retro": 1.4,
        "Strafe": 1.5,
        "Up": 2.0,
        "Down": 2.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 7.0,
        "ScmMode": {
          "BoostSpeedForward": 295.0,
          "BoostSpeedBackward": 106.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.1,
        "RampDown": 0.7,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 652200000.0,
      "FuelIntakeRate": 100.0,
      "QuantumFuelCapacity": 8600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 3.75,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 11375.0,
        "Retro": 6250.0,
        "Vtol": 8000.0,
        "Maneuvering": 10000.0
      },
      "IntakeToMainFuelRatio": 0.88,
      "TimeForIntakesToFillTank": 6522000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 26132.0,
        "SCMActive": 31081.0,
        "NAV": 47757.0
      },
      "Infrared": {
        "Start": 17150.0
      },
      "CrossSection": {
        "Front": 6735.0,
        "Side": 15506.0,
        "Top": 28193.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 10.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 168300.0,
      "PilotBurstDPS": 4102.0,
      "TurretsBurstDPS": 4637.0,
      "TotalMissilesDmg": 22738.0
    },
    "Insurance": {
      "StandardClaimTime": 35.34,
      "ExpeditedClaimTime": 11.78,
      "ExpeditedCost": 15995.0
    },
    "Buy": {
      "New Deal, Lorville": 14994000.0
    }
  },
  {
    "ClassName": "MISC_Starlancer_Max",
    "Name": "MISC Starlancer MAX",
    "Description": "For those looking to expand their hauling operations, the engineers at MISC have upgraded the Starlancer MAX with an extra spacious hold ready to transport cargo and vehicles. Paired with comfortable accommodations for longer trips and a full defensive package for when you go off the beaten path, it’s easy to see why the Starlancer MAX is the hauler of choice for industrious pilots across the ‘verse.",
    "Career": "Exploration",
    "Role": "Industrial",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 224.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 6.0,
      "PersonalInventory": 8.0
    },
    "Crew": 1,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 498070.5,
    "ComponentsMass": 329354.0,
    "Dimensions": {
      "Length": 83.0,
      "Width": 52.0,
      "Height": 16.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 35000.0
        },
        "Parts": {
          "nacelle_left": 7000.0,
          "nacelle_left_rear": 2000.0,
          "wing_plate_left": 1000.0,
          "wing_left": 2000.0,
          "wing_left_rear": 1000.0,
          "wing_aileron_left": 1000.0,
          "nacelle_right": 7000.0,
          "nacelle_right_rear": 2000.0,
          "wing_plate_right": 1000.0,
          "wing_right": 2000.0,
          "wing_right_rear": 1000.0,
          "wing_aileron_right": 1000.0,
          "spoiler_connection_left": 200.0,
          "rear_spoiler_left": 200.0,
          "spoiler_connection_right": 200.0,
          "rear_spoiler_right": 200.0,
          "top_spoiler_left": 200.0,
          "top_spoiler_right": 200.0,
          "nose": 20000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 7000.0,
          "thruster_main_left_aux_bottom": 3500.0,
          "thruster_main_left_aux_top": 3500.0,
          "thruster_main_centre": 17000.0,
          "thruster_main_right": 7000.0,
          "thruster_main_right_aux_bottom": 3500.0,
          "thruster_main_right_aux_top": 3500.0
        },
        "Retro": {
          "thruster_retro_left": 5500.0,
          "thruster_retro_right": 5500.0
        },
        "Vtol": {
          "thruster_vtol_RR": 2000.0,
          "thruster_vtol_RL": 2000.0,
          "thruster_vtol_SL": 2000.0,
          "thruster_vtol_SR": 2000.0,
          "thruster_vtol_FL": 2000.0,
          "thruster_vtol_FR": 2000.0
        },
        "Maneuvering": {
          "thruster_mav_RSL": 2000.0,
          "thruster_mav_RTL": 2000.0,
          "thruster_mav_RTR": 2000.0,
          "thruster_mav_MBR": 2000.0,
          "thruster_mav_MBL": 2000.0,
          "thruster_mav_RBR": 2000.0,
          "thruster_mav_RBL": 2000.0,
          "thruster_mav_RSR": 2000.0,
          "thruster_mav_FBL": 2000.0,
          "thruster_mav_FBR": 2000.0,
          "thruster_mav_MTL": 2000.0,
          "thruster_mav_MTR": 2000.0,
          "thruster_mav_FSL": 2000.0,
          "thruster_mav_FSR": 2000.0,
          "thruster_mav_FTL": 2000.0,
          "thruster_mav_FTR": 2000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 135.0,
      "MaxSpeed": 990.0,
      "Pitch": 31.0,
      "Yaw": 31.0,
      "Roll": 65.0,
      "IsVtolAssisted": true,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 35500000.0,
        "Retro": 15000000.0,
        "Vtol": 9000000.0,
        "Maneuvering": 73200000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 3.2,
        "Retro": 1.7,
        "Strafe": 2.0,
        "Up": 2.4,
        "Down": 2.4,
        "CheckDate": "2025-03-13"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 315.0,
          "BoostSpeedBackward": 140.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.35,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 3.0,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 50000000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 3600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 8.75,
        "Retro": 2.5,
        "Vtol": 7.5,
        "Maneuvering": 20.0
      },
      "FuelUsagePerSecond": {
        "Main": 5187.5,
        "Retro": 1875.0,
        "Vtol": 1125.0,
        "Maneuvering": 9150.0
      },
      "IntakeToMainFuelRatio": 0.96,
      "TimeForIntakesToFillTank": 1000000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 6502.0,
        "SCMActive": 7750.0,
        "NAV": 21982.0
      },
      "Infrared": {
        "Start": 15623.0
      },
      "CrossSection": {
        "Front": 0.0,
        "Side": 0.0,
        "Top": 0.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 56100.0,
      "PilotBurstDPS": 4102.0,
      "TurretsBurstDPS": 3272.0,
      "TotalMissilesDmg": 52422.0
    },
    "Insurance": {
      "StandardClaimTime": 40.0,
      "ExpeditedClaimTime": 15.0,
      "ExpeditedCost": 15000.0
    },
    "New Ship": "MISC Starlancer MAX",
    "Buy": {
      "Astro Armada - Area 18": 8820000.0,
      "New Deal - Teasa Spaceport - Lorville": 8820000.0
    }
  },
  {
    "ClassName": "MRAI_Guardian",
    "Name": "Mirai Guardian",
    "Description": "Taking the adage that the best defense is a good offense, Mirai engineers have brought their expertise in performance and maneuverability to the Guardian long range fighter.  Fly circles around your opponents with the Mirai Guardian while establishing your space superiority. ",
    "Career": "Combat",
    "Role": "Heavy Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.1,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 113100.0,
    "ComponentsMass": 10322.2,
    "Dimensions": {
      "Length": 25.0,
      "Width": 16.5,
      "Height": 9.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.05,
        "Distortion": 1.1
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.3,
        "Infrared": 1.3,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "geo_body": 7100.0
        },
        "Parts": {
          "geo_wing_left_top_middle": 4000.0,
          "geo_wing_left_top_back": 2500.0,
          "geo_wing_left_top_front": 3000.0,
          "geo_wing_arm_left_rear_top_a": 300.0,
          "geo_wing_right_top_middle": 4000.0,
          "geo_wing_right_top_back": 2500.0,
          "geo_wing_right_top_front": 3000.0,
          "geo_wing_arm_right_rear_top_a": 300.0,
          "geo_wing_bottom_left_middle": 4000.0,
          "geo_wing_bottom_left_back": 2500.0,
          "geo_wing_bottom_left_front": 3000.0,
          "geo_wing_bottom_right_middle": 4000.0,
          "geo_wing_bottom_right_back": 2500.0,
          "geo_wing_bottom_right_front": 3000.0,
          "geo_thruster_arm_left_b": 5000.0,
          "geo_thruster_arm_left_c": 5000.0,
          "geo_thruster_arm_right_b": 5000.0,
          "geo_thruster_arm_right_c": 5000.0,
          "geo_body_top_front_a": 3000.0,
          "geo_body_top_front_b": 300.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 5000.0,
          "thruster_main_right": 5000.0
        },
        "Retro": {
          "thruster_retro_top_left": 2200.0,
          "thruster_retro_top_right": 2200.0,
          "thruster_retro_bottom_left": 2200.0,
          "thruster_retro_bottom_right": 2200.0
        },
        "Maneuvering": {
          "thruster_wing_top_left_mid": 2200.0,
          "thruster_wing_top_left_rear": 2200.0,
          "thruster_wing_top_left_front_lateral": 2200.0,
          "thruster_wing_top_left_front": 2200.0,
          "thruster_wing_top_right_mid": 2200.0,
          "thruster_wing_top_right_rear": 2200.0,
          "thruster_wing_top_right_front_lateral": 2200.0,
          "thruster_wing_top_right_front": 2200.0,
          "thruster_wing_bot_left_mid": 2200.0,
          "thruster_wing_bot_left_rear": 2200.0,
          "thruster_wing_bot_left_front_lateral": 2200.0,
          "thruster_wing_bot_left_front": 2200.0,
          "thruster_wing_bot_right_mid": 2200.0,
          "thruster_wing_bot_right_rear": 2200.0,
          "thruster_wing_bot_right_front": 2200.0,
          "thruster_wing_bot_right_front_lateral": 2200.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 213.0,
      "MaxSpeed": 1125.0,
      "Pitch": 40.0,
      "Yaw": 40.0,
      "Roll": 130.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4710000.0,
        "Retro": 4700000.0,
        "Vtol": 0.0,
        "Maneuvering": 31720000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.3,
        "Retro": 3.8,
        "Strafe": 8.2,
        "Up": 8.2,
        "Down": 8.2,
        "CheckDate": "2024-12-20"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 465.0,
          "BoostSpeedBackward": 225.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 9000000.0,
      "FuelIntakeRate": 30.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 5.0,
        "Vtol": 0.0,
        "Maneuvering": 20.0
      },
      "FuelUsagePerSecond": {
        "Main": 588.75,
        "Retro": 587.5,
        "Vtol": 0.0,
        "Maneuvering": 3965.0
      },
      "IntakeToMainFuelRatio": 5.1,
      "TimeForIntakesToFillTank": 300000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5316.0,
        "SCMActive": 6999.0,
        "NAV": 25548.0
      },
      "Infrared": {
        "Start": 12845.0
      },
      "CrossSection": {
        "Front": 3333.0,
        "Side": 6000.0,
        "Top": 9000.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4740.0,
      "PilotBurstDPS": 3073.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 38059.0
    },
    "Insurance": {
      "StandardClaimTime": 11.33,
      "ExpeditedClaimTime": 2.83,
      "ExpeditedCost": 5710.0
    },
    "New Ship": "Mirai Guardian"
  },
  {
    "ClassName": "MRAI_Guardian_QI",
    "Name": "Mirai Guardian QI",
    "Description": "Taking the adage that the best defense is a good offense, Mirai engineers have brought their expertise in performance and maneuverability to the Guardian long range fighter.  Fly circles around your opponents with the Mirai Guardian while establishing your space superiority. ",
    "Career": "Combat",
    "Role": "Interdiction",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.1,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 113100.0,
    "ComponentsMass": 9765.2,
    "Dimensions": {
      "Length": 25.0,
      "Width": 16.5,
      "Height": 9.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.05,
        "Distortion": 1.1
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.3,
        "Infrared": 1.3,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "geo_body": 7000.0
        },
        "Parts": {
          "geo_wing_left_top_middle": 4000.0,
          "geo_wing_left_top_back": 2500.0,
          "geo_wing_left_top_front": 3000.0,
          "geo_wing_arm_left_rear_top_a": 300.0,
          "geo_wing_right_top_middle": 4000.0,
          "geo_wing_right_top_back": 2500.0,
          "geo_wing_right_top_front": 3000.0,
          "geo_wing_arm_right_rear_top_a": 300.0,
          "geo_wing_bottom_left_middle": 4000.0,
          "geo_wing_bottom_left_back": 2500.0,
          "geo_wing_bottom_left_front": 3000.0,
          "geo_wing_bottom_right_middle": 4000.0,
          "geo_wing_bottom_right_back": 2500.0,
          "geo_wing_bottom_right_front": 3000.0,
          "geo_thruster_arm_left_b": 5000.0,
          "geo_thruster_arm_left_c": 5000.0,
          "geo_thruster_arm_right_b": 5000.0,
          "geo_thruster_arm_right_c": 5000.0,
          "geo_body_top_front_a": 3000.0,
          "geo_body_top_front_b": 300.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 5000.0,
          "thruster_main_right": 5000.0
        },
        "Retro": {
          "thruster_retro_top_left": 2200.0,
          "thruster_retro_top_right": 2200.0,
          "thruster_retro_bottom_left": 2200.0,
          "thruster_retro_bottom_right": 2200.0
        },
        "Maneuvering": {
          "thruster_wing_top_left_mid": 2200.0,
          "thruster_wing_top_left_rear": 2200.0,
          "thruster_wing_top_left_front_lateral": 2200.0,
          "thruster_wing_top_left_front": 2200.0,
          "thruster_wing_top_right_mid": 2200.0,
          "thruster_wing_top_right_rear": 2200.0,
          "thruster_wing_top_right_front_lateral": 2200.0,
          "thruster_wing_top_right_front": 2200.0,
          "thruster_wing_bot_left_mid": 2200.0,
          "thruster_wing_bot_left_rear": 2200.0,
          "thruster_wing_bot_left_front_lateral": 2200.0,
          "thruster_wing_bot_left_front": 2200.0,
          "thruster_wing_bot_right_mid": 2200.0,
          "thruster_wing_bot_right_rear": 2200.0,
          "thruster_wing_bot_right_front": 2200.0,
          "thruster_wing_bot_right_front_lateral": 2200.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 210.0,
      "MaxSpeed": 1100.0,
      "Pitch": 37.5,
      "Yaw": 37.5,
      "Roll": 125.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 4710000.0,
        "Retro": 4700000.0,
        "Vtol": 0.0,
        "Maneuvering": 31720000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.3,
        "Retro": 3.8,
        "Strafe": 8.2,
        "Up": 8.2,
        "Down": 8.2,
        "CheckDate": "2024-12-20"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 460.0,
          "BoostSpeedBackward": 223.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.7,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 9000000.0,
      "FuelIntakeRate": 30.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 5.0,
        "Vtol": 0.0,
        "Maneuvering": 20.0
      },
      "FuelUsagePerSecond": {
        "Main": 588.75,
        "Retro": 587.5,
        "Vtol": 0.0,
        "Maneuvering": 3965.0
      },
      "IntakeToMainFuelRatio": 5.1,
      "TimeForIntakesToFillTank": 300000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 8978.0,
        "SCMActive": 15055.0,
        "NAV": 29210.0
      },
      "Infrared": {
        "Start": 12995.0
      },
      "CrossSection": {
        "Front": 3333.0,
        "Side": 6000.0,
        "Top": 9000.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4740.0,
      "PilotBurstDPS": 3073.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 20211.0
    },
    "Insurance": {
      "StandardClaimTime": 12.0,
      "ExpeditedClaimTime": 3.0,
      "ExpeditedCost": 6180.0
    },
    "New Ship": "Mirai Guardian QI"
  },
  {
    "ClassName": "MRAI_Pulse",
    "Name": "Mirai Pulse",
    "Description": "The engineers at Mirai set out to craft an open-canopy bike capable of more. A more intimate connection between pilot and performance with a form-fitting silhouette. A more intuitive way to tame formidable landscapes with a responsive grav-lev system. A more intelligent combat experience with a custom weapon fully integrated into the spirit of the vehicle. The end result? The Mirai Pulse.",
    "Career": "Ground",
    "Role": "Combat",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.6,
      "PersonalInventory": 0.25
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 2140.0,
    "ComponentsMass": 468.0,
    "Dimensions": {
      "Length": 3.15,
      "Width": 0.9,
      "Height": 1.0
    },
    "IsSpaceship": false,
    "IsGravlev": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 0.35,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 700.0
        },
        "Parts": {
          "arm_front_left_debris_a": 50.0,
          "arm_front_left_debris_a_panel": 50.0,
          "arm_front_right_debris_a": 50.0,
          "arm_front_right_debris_a_panel": 50.0,
          "body_panel_back_left_debris": 50.0,
          "body_panel_back_right_debris": 50.0,
          "body_spoiler_upper_right_mesh": 50.0,
          "hardpoint_vehicle_destroyed": 400.0,
          "component_housing_mesh": 50.0,
          "body_spoiler_upper_left_mesh": 50.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main": 2750.0
        },
        "Retro": {
          "thruster_retro_right": 2500.0,
          "thruster_retro_left": 2500.0
        },
        "Maneuvering": {
          "thruster_mav_front_left_bottom": 2150.0,
          "gravlev_front_left": 2750.0,
          "thruster_mav_front_left_side": 2150.0,
          "thruster_mav_front_left_top": 2150.0,
          "thruster_mav_front_right_bottom": 2150.0,
          "thruster_mav_front_right_side": 2150.0,
          "thruster_mav_front_right_top": 2150.0,
          "gravlev_front_right": 2750.0,
          "thruster_mav_rear_left_top": 2150.0,
          "thruster_mav_rear_right_top": 2150.0,
          "gravlev_rear_left": 2750.0,
          "gravlev_rear_right": 2750.0,
          "thruster_mav_rear_right_bottom": 2150.0,
          "thruster_mav_rear_left_bottom": 2150.0,
          "thruster_mav_rear_left_side": 2150.0,
          "thruster_mav_rear_right_side": 2150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 204.0,
      "HoverMaxSpeed": 204.0,
      "MaxSpeed": 561.0,
      "Pitch": 84.0,
      "Yaw": 84.0,
      "Roll": 135.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 68800.0,
        "Retro": 59600.0,
        "Vtol": 0.0,
        "Maneuvering": 223000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.8,
        "Retro": 2.5,
        "Strafe": 1.4,
        "Up": 1.9,
        "Down": 1.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 284.0,
          "BoostSpeedBackward": 124.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.3,
            "Z": 1.2
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.3,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 15.0,
        "CapacitorRegenPerSec": 2.0,
        "CapacitorIdleCost": 2.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 2.0,
        "RegenerationTime": 7.5,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 650000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 20.0
      },
      "FuelUsagePerSecond": {
        "Main": 8.6,
        "Retro": 7.45,
        "Vtol": 0.0,
        "Maneuvering": 27.875
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 199.0,
        "SCMActive": 324.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 705.0
      },
      "CrossSection": {
        "Front": 253.0,
        "Side": 401.0,
        "Top": 506.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 314.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.15,
      "ExpeditedClaimTime": 0.05,
      "ExpeditedCost": 75.0
    },
    "New Ship": "Mirai Pulse",
    "Buy": {
      "Astro Armada, Area 18": 185220.0
    }
  },
  {
    "ClassName": "MRAI_Pulse_LX",
    "Name": "Mirai Pulse LX",
    "Description": "Seamlessly pairing pilot and pure speed, the Mirai Pulse LX grav-lev bike soars over terrain like no open-canopy racer before. Feel your heartrate quicken as you experience first-hand the Pulse’s ground-breaking responsiveness and form-fitting silhouette.",
    "Career": "Ground",
    "Role": "Racing",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.6,
      "PersonalInventory": 0.25
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 2140.0,
    "ComponentsMass": 248.0,
    "Dimensions": {
      "Length": 3.15,
      "Width": 0.9,
      "Height": 1.0
    },
    "IsSpaceship": false,
    "IsGravlev": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 2.75,
        "Infrared": 0.31,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 700.0
        },
        "Parts": {
          "arm_front_left_debris_a": 50.0,
          "arm_front_left_debris_a_panel": 50.0,
          "arm_front_right_debris_a": 50.0,
          "arm_front_right_debris_a_panel": 50.0,
          "body_panel_back_left_debris": 50.0,
          "body_panel_back_right_debris": 50.0,
          "body_spoiler_upper_right_mesh": 50.0,
          "hardpoint_vehicle_destroyed": 400.0,
          "component_housing_mesh": 50.0,
          "body_spoiler_upper_left_mesh": 50.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_aux": 2750.0,
          "thruster_main": 2750.0
        },
        "Retro": {
          "thruster_retro_right": 2500.0,
          "thruster_retro_left": 2500.0
        },
        "Maneuvering": {
          "thruster_mav_front_left_bottom": 2150.0,
          "gravlev_front_left": 2750.0,
          "thruster_mav_front_left_side": 2150.0,
          "thruster_mav_front_left_top": 2150.0,
          "thruster_mav_front_right_bottom": 2150.0,
          "thruster_mav_front_right_side": 2150.0,
          "thruster_mav_front_right_top": 2150.0,
          "gravlev_front_right": 2750.0,
          "thruster_mav_rear_left_top": 2150.0,
          "thruster_mav_rear_right_top": 2150.0,
          "gravlev_rear_left": 2750.0,
          "gravlev_rear_right": 2750.0,
          "thruster_mav_rear_right_bottom": 2150.0,
          "thruster_mav_rear_left_bottom": 2150.0,
          "thruster_mav_rear_left_side": 2150.0,
          "thruster_mav_rear_right_side": 2150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 218.0,
      "HoverMaxSpeed": 218.0,
      "MaxSpeed": 600.0,
      "Pitch": 97.0,
      "Yaw": 97.0,
      "Roll": 145.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 67500.0,
        "Retro": 58200.0,
        "Vtol": 0.0,
        "Maneuvering": 225400.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 3.2,
        "Retro": 2.8,
        "Strafe": 1.6,
        "Up": 2.5,
        "Down": 2.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 298.0,
          "BoostSpeedBackward": 138.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.8,
            "Y": 2.3,
            "Z": 1.2
          },
          "NegativeAxis": {
            "X": 1.8,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 10.0,
        "CapacitorRegenPerSec": 4.0,
        "CapacitorIdleCost": 4.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.0,
        "RegenerationTime": 2.5,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 650000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 20.0
      },
      "FuelUsagePerSecond": {
        "Main": 8.438,
        "Retro": 7.275,
        "Vtol": 0.0,
        "Maneuvering": 28.175
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 544.0,
        "SCMActive": 887.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 626.0
      },
      "CrossSection": {
        "Front": 253.0,
        "Side": 401.0,
        "Top": 506.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.15,
      "ExpeditedClaimTime": 0.05,
      "ExpeditedCost": 75.0
    },
    "New Ship": "Mirai Pulse",
    "Buy": {
      "New Deal - Teasa Spaceport - Lorville": 211680.0
    }
  },
  {
    "ClassName": "ORIG_100i",
    "Name": "Origin 100i",
    "Description": "Tour the universe with the perfect coupling of luxury and performance. The 100i features Origin Jumpworks' patented AIR fuel system, making it the most efficient and eco-friendly ship on the market. Capable of long distance flights that most ships of its size aren't equipped for, the 100i is perfect for solo pilots looking to turn heads without sacrificing functionality or reliability.",
    "Career": "Exploration",
    "Role": "Starter / Pathfinder",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 2.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.93
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 45143.0,
    "ComponentsMass": 4934.0,
    "Dimensions": {
      "Length": 19.0,
      "Width": 11.0,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 1650.0
        },
        "Parts": {
          "Spoiler": 650.0,
          "Wing_Right": 800.0,
          "Wing_Left": 800.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 1200.0,
          "thruster_main_left": 1200.0
        },
        "Retro": {
          "thruster_retro_right": 2150.0,
          "thruster_retro_left": 2150.0
        },
        "Maneuvering": {
          "thruster_front_top_left": 1500.0,
          "thruster_front_side_left": 1500.0,
          "thruster_front_bottom_right": 1500.0,
          "thruster_front_side_right": 1500.0,
          "thruster_front_top_right": 1500.0,
          "thruster_front_bottom_left": 1500.0,
          "thruster_rear_bottom_right": 1500.0,
          "thruster_rear_top_right": 1500.0,
          "thruster_rear_side_right": 1500.0,
          "thruster_rear_bottom_left": 1500.0,
          "thruster_rear_top_left": 1500.0,
          "thruster_rear_side_left": 1500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 260.0,
      "MaxSpeed": 1425.0,
      "Pitch": 50.0,
      "Yaw": 50.0,
      "Roll": 195.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8192000.0,
        "Retro": 1740029.6,
        "Vtol": 0.0,
        "Maneuvering": 9716833.8
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.4,
        "Retro": 3.4,
        "Strafe": 4.4,
        "Up": 5.9,
        "Down": 3.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 610.0,
          "BoostSpeedBackward": 305.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.2,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 6500000.0,
      "FuelIntakeRate": 30.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1024.0,
        "Retro": 217.504,
        "Vtol": 0.0,
        "Maneuvering": 1214.604
      },
      "IntakeToMainFuelRatio": 2.93,
      "TimeForIntakesToFillTank": 216666.67
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5567.0,
        "SCMActive": 6620.0,
        "NAV": 13100.0
      },
      "Infrared": {
        "Start": 7272.0
      },
      "CrossSection": {
        "Front": 1906.0,
        "Side": 5117.0,
        "Top": 9030.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1500.0,
      "PilotBurstDPS": 1091.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 4115.0
    },
    "Insurance": {
      "StandardClaimTime": 3.36,
      "ExpeditedClaimTime": 1.12,
      "ExpeditedCost": 1858.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1146600.0,
      "New Deal, Lorville": 1146600.0
    }
  },
  {
    "ClassName": "ORIG_125a",
    "Name": "Origin 125a",
    "Description": "Risks were meant to be taken, but why risk running out of fuel in the heat of battle? With the AIR fuel system, a souped-up weapons package, and all the luxury and refinement you've come to expect from Origin Jumpworks, the 125a has been designed for the discerning maverick.",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 2.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.93
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 45143.0,
    "ComponentsMass": 5512.0,
    "Dimensions": {
      "Length": 19.0,
      "Width": 11.0,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 1650.0
        },
        "Parts": {
          "Spoiler": 650.0,
          "Wing_Right": 800.0,
          "Wing_Left": 800.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 1200.0,
          "thruster_main_left": 1200.0
        },
        "Retro": {
          "thruster_retro_right": 2150.0,
          "thruster_retro_left": 2150.0
        },
        "Maneuvering": {
          "thruster_front_top_left": 1500.0,
          "thruster_front_side_left": 1500.0,
          "thruster_front_bottom_right": 1500.0,
          "thruster_front_side_right": 1500.0,
          "thruster_front_top_right": 1500.0,
          "thruster_front_bottom_left": 1500.0,
          "thruster_rear_bottom_right": 1500.0,
          "thruster_rear_top_right": 1500.0,
          "thruster_rear_side_right": 1500.0,
          "thruster_rear_bottom_left": 1500.0,
          "thruster_rear_top_left": 1500.0,
          "thruster_rear_side_left": 1500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 260.0,
      "MaxSpeed": 1425.0,
      "Pitch": 70.0,
      "Yaw": 52.0,
      "Roll": 200.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8192000.0,
        "Retro": 1740029.6,
        "Vtol": 0.0,
        "Maneuvering": 9716833.8
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.4,
        "Retro": 3.4,
        "Strafe": 4.4,
        "Up": 5.9,
        "Down": 3.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 610.0,
          "BoostSpeedBackward": 305.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.2,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 6500000.0,
      "FuelIntakeRate": 30.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1024.0,
        "Retro": 217.504,
        "Vtol": 0.0,
        "Maneuvering": 1214.604
      },
      "IntakeToMainFuelRatio": 2.93,
      "TimeForIntakesToFillTank": 216666.67
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5630.0,
        "SCMActive": 6683.0,
        "NAV": 13163.0
      },
      "Infrared": {
        "Start": 7337.0
      },
      "CrossSection": {
        "Front": 2253.0,
        "Side": 6048.0,
        "Top": 10672.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1730.0,
      "PilotBurstDPS": 1091.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 12345.0
    },
    "Insurance": {
      "StandardClaimTime": 4.54,
      "ExpeditedClaimTime": 1.51,
      "ExpeditedCost": 2526.0
    },
    "Buy": {
      "New Deal, Lorville": 1587600.0
    }
  },
  {
    "ClassName": "ORIG_135c",
    "Name": "Origin 135c",
    "Description": "With a deceptive amount of storage space in its sleek, stylish frame, and Origin's patented AIR fuel system, the 135c model is the obvious choice for musicians, couriers, and anyone trying to get the party started. Get it there fast, and look good while you're doing it.",
    "Career": "Exploration",
    "Role": "Light Freight",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 6.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.93
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 45143.0,
    "ComponentsMass": 5374.0,
    "Dimensions": {
      "Length": 19.0,
      "Width": 11.0,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 1650.0
        },
        "Parts": {
          "Spoiler": 650.0,
          "Wing_Right": 800.0,
          "Wing_Left": 800.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 1200.0,
          "thruster_main_left": 1200.0
        },
        "Retro": {
          "thruster_retro_right": 2150.0,
          "thruster_retro_left": 2150.0
        },
        "Maneuvering": {
          "thruster_front_top_left": 1500.0,
          "thruster_front_side_left": 1500.0,
          "thruster_front_bottom_right": 1500.0,
          "thruster_front_side_right": 1500.0,
          "thruster_front_top_right": 1500.0,
          "thruster_front_bottom_left": 1500.0,
          "thruster_rear_bottom_right": 1500.0,
          "thruster_rear_top_right": 1500.0,
          "thruster_rear_side_right": 1500.0,
          "thruster_rear_bottom_left": 1500.0,
          "thruster_rear_top_left": 1500.0,
          "thruster_rear_side_left": 1500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 260.0,
      "MaxSpeed": 1425.0,
      "Pitch": 53.0,
      "Yaw": 53.0,
      "Roll": 212.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8192000.0,
        "Retro": 1740029.6,
        "Vtol": 0.0,
        "Maneuvering": 9716833.8
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.4,
        "Retro": 3.4,
        "Strafe": 4.4,
        "Up": 5.9,
        "Down": 3.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 610.0,
          "BoostSpeedBackward": 305.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.2,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 6500000.0,
      "FuelIntakeRate": 30.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1024.0,
        "Retro": 217.504,
        "Vtol": 0.0,
        "Maneuvering": 1214.604
      },
      "IntakeToMainFuelRatio": 2.93,
      "TimeForIntakesToFillTank": 216666.67
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5567.0,
        "SCMActive": 6620.0,
        "NAV": 13100.0
      },
      "Infrared": {
        "Start": 7404.0
      },
      "CrossSection": {
        "Front": 2254.0,
        "Side": 6050.0,
        "Top": 10676.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1850.0,
      "PilotBurstDPS": 1091.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 4115.0
    },
    "Insurance": {
      "StandardClaimTime": 3.78,
      "ExpeditedClaimTime": 1.26,
      "ExpeditedCost": 1830.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1149580.0
    }
  },
  {
    "ClassName": "ORIG_300i",
    "Name": "Origin 300i",
    "Description": "If you're going to travel the stars... why not do it in style? The 300i is Origin Jumpworks' premiere luxury spacecraft. It is a sleek, silver killer that sends as much of a message with its silhouette as it does with its particle cannons.",
    "Career": "Exploration",
    "Role": "Luxury",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 8.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.01
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 69677.0,
    "ComponentsMass": 12289.0,
    "Dimensions": {
      "Length": 27.0,
      "Width": 17.0,
      "Height": 8.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 1650.0,
          "tail": 1650.0
        },
        "Parts": {
          "glass_canopy_front": 1500.0,
          "wing_left_bottom": 800.0,
          "wing_b_left": 500.0,
          "wing_left_top": 200.0,
          "wing_flap_left": 200.0,
          "wing_right_bottom": 800.0,
          "wing_b_right": 500.0,
          "wing_right_top": 200.0,
          "wing_flap_right": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster": 8700.0
        },
        "Retro": {
          "thruster_retro_left": 8100.0,
          "thruster_retro_right": 8100.0
        },
        "Maneuvering": {
          "mav_thruster_nose_top_left": 7250.0,
          "mav_thruster_nose_bottom_left": 7250.0,
          "mav_thruster_nose_top_right": 7250.0,
          "mav_thruster_nose_bottom_right": 7250.0,
          "mav_thruster_nose_middle_left": 7250.0,
          "mav_thruster_nose_middle_right": 7250.0,
          "mav_thruster_tail_top_left": 7250.0,
          "mav_thruster_tail_bottom_left": 7250.0,
          "mav_thruster_tail_top_right": 7250.0,
          "mav_thruster_tail_bottom_right": 7250.0,
          "mav_thruster_tail_middle_left": 7250.0,
          "mav_thruster_tail_middle_right": 7250.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 260.0,
      "MaxSpeed": 1425.0,
      "Pitch": 52.0,
      "Yaw": 48.0,
      "Roll": 180.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 13420000.0,
        "Retro": 2850000.0,
        "Vtol": 0.0,
        "Maneuvering": 15660000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.8,
        "Retro": 3.5,
        "Strafe": 4.6,
        "Up": 6.1,
        "Down": 4.1,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 610.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.2,
        "Y_AccelMultiplicator": 2.25,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 10500000.0,
      "FuelIntakeRate": 12.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1677.5,
        "Retro": 356.25,
        "Vtol": 0.0,
        "Maneuvering": 1957.5
      },
      "IntakeToMainFuelRatio": 0.72,
      "TimeForIntakesToFillTank": 875000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5355.0,
        "SCMActive": 6386.0,
        "NAV": 12888.0
      },
      "Infrared": {
        "Start": 6620.0
      },
      "CrossSection": {
        "Front": 2687.0,
        "Side": 5631.0,
        "Top": 8318.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3000.0,
      "PilotBurstDPS": 1766.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 4115.0
    },
    "Insurance": {
      "StandardClaimTime": 7.76,
      "ExpeditedClaimTime": 2.59,
      "ExpeditedCost": 3618.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1375920.0
    }
  },
  {
    "ClassName": "ORIG_315p",
    "Name": "Origin 315p",
    "Description": "Exploration is man's highest calling. Prepare to chart distant horizons with man's most sophisticated piece of technology, the Origin 315p. Featuring a more robust power plant and a custom scanning package, exclusively designed by Chimera Communications.",
    "Career": "Exploration",
    "Role": "Pathfinder",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 12.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.93
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 70592.0,
    "ComponentsMass": 12019.0,
    "Dimensions": {
      "Length": 27.0,
      "Width": 17.0,
      "Height": 8.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 1650.0,
          "tail": 1650.0
        },
        "Parts": {
          "glass_canopy_front": 1500.0,
          "wing_left_bottom": 800.0,
          "wing_b_left": 500.0,
          "wing_left_top": 200.0,
          "wing_flap_left": 200.0,
          "wing_right_bottom": 800.0,
          "wing_b_right": 500.0,
          "wing_right_top": 200.0,
          "wing_flap_right": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster": 8700.0
        },
        "Retro": {
          "thruster_retro_left": 8100.0,
          "thruster_retro_right": 8100.0
        },
        "Maneuvering": {
          "mav_thruster_nose_top_left": 7250.0,
          "mav_thruster_nose_bottom_left": 7250.0,
          "mav_thruster_nose_top_right": 7250.0,
          "mav_thruster_nose_bottom_right": 7250.0,
          "mav_thruster_nose_middle_left": 7250.0,
          "mav_thruster_nose_middle_right": 7250.0,
          "mav_thruster_tail_top_left": 7250.0,
          "mav_thruster_tail_bottom_left": 7250.0,
          "mav_thruster_tail_top_right": 7250.0,
          "mav_thruster_tail_bottom_right": 7250.0,
          "mav_thruster_tail_middle_left": 7250.0,
          "mav_thruster_tail_middle_right": 7250.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 260.0,
      "MaxSpeed": 1425.0,
      "Pitch": 52.0,
      "Yaw": 48.0,
      "Roll": 180.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 13420000.0,
        "Retro": 2850000.0,
        "Vtol": 0.0,
        "Maneuvering": 15660000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.7,
        "Retro": 3.5,
        "Strafe": 4.5,
        "Up": 6.0,
        "Down": 4.1,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 610.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.2,
        "Y_AccelMultiplicator": 2.25,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 18000000.0,
      "FuelIntakeRate": 12.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1677.5,
        "Retro": 356.25,
        "Vtol": 0.0,
        "Maneuvering": 1957.5
      },
      "IntakeToMainFuelRatio": 0.72,
      "TimeForIntakesToFillTank": 1500000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5347.0,
        "SCMActive": 6379.0,
        "NAV": 12880.0
      },
      "Infrared": {
        "Start": 6713.0
      },
      "CrossSection": {
        "Front": 2663.0,
        "Side": 5579.0,
        "Top": 8241.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2560.0,
      "PilotBurstDPS": 1091.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 3340.0
    },
    "Insurance": {
      "StandardClaimTime": 5.18,
      "ExpeditedClaimTime": 1.73,
      "ExpeditedCost": 2579.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1490580.0
    }
  },
  {
    "ClassName": "ORIG_325a",
    "Name": "Origin 325a",
    "Description": "Just because it's a rough galaxy doesn't mean you need to sacrifice your comfort: the 325a can come out on top in any dogfight. The 325a features an advanced weapon payload as well as a custom targeting system designed especially for the 325a by WillsOp.",
    "Career": "Combat",
    "Role": "Interceptor",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 4.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.71
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 69324.0,
    "ComponentsMass": 13645.0,
    "Dimensions": {
      "Length": 27.0,
      "Width": 17.0,
      "Height": 8.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 1650.0,
          "tail": 1650.0
        },
        "Parts": {
          "glass_canopy_front": 1500.0,
          "wing_left_bottom": 800.0,
          "wing_b_left": 500.0,
          "wing_left_top": 200.0,
          "wing_flap_left": 200.0,
          "wing_right_bottom": 800.0,
          "wing_b_right": 500.0,
          "wing_right_top": 200.0,
          "wing_flap_right": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster": 8700.0
        },
        "Retro": {
          "thruster_retro_left": 8100.0,
          "thruster_retro_right": 8100.0
        },
        "Maneuvering": {
          "mav_thruster_nose_top_left": 7250.0,
          "mav_thruster_nose_bottom_left": 7250.0,
          "mav_thruster_nose_top_right": 7250.0,
          "mav_thruster_nose_bottom_right": 7250.0,
          "mav_thruster_nose_middle_left": 7250.0,
          "mav_thruster_nose_middle_right": 7250.0,
          "mav_thruster_tail_top_left": 7250.0,
          "mav_thruster_tail_bottom_left": 7250.0,
          "mav_thruster_tail_top_right": 7250.0,
          "mav_thruster_tail_bottom_right": 7250.0,
          "mav_thruster_tail_middle_left": 7250.0,
          "mav_thruster_tail_middle_right": 7250.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 260.0,
      "MaxSpeed": 1425.0,
      "Pitch": 52.0,
      "Yaw": 48.0,
      "Roll": 180.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 13420000.0,
        "Retro": 2850000.0,
        "Vtol": 0.0,
        "Maneuvering": 15660000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 16.7,
        "Retro": 3.5,
        "Strafe": 4.5,
        "Up": 6.0,
        "Down": 4.1,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 610.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.2,
        "Y_AccelMultiplicator": 2.25,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 18000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1677.5,
        "Retro": 356.25,
        "Vtol": 0.0,
        "Maneuvering": 1957.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5442.0,
        "SCMActive": 6473.0,
        "NAV": 12975.0
      },
      "Infrared": {
        "Start": 6775.0
      },
      "CrossSection": {
        "Front": 2829.0,
        "Side": 5928.0,
        "Top": 8757.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 2357.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 19707.0
    },
    "Insurance": {
      "StandardClaimTime": 6.21,
      "ExpeditedClaimTime": 2.07,
      "ExpeditedCost": 3900.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1852200.0
    }
  },
  {
    "ClassName": "ORIG_350r",
    "Name": "Origin 350r",
    "Description": "Origin Jumpwork's 300 series is the ultimate fusion of elegance and astroengineering. Every component is individually calibrated to ensure your ship stays in perfect harmony. By far the fastest member of the family, the 350r refocus the 300's power and translates it into pure speed. ",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 4.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.71
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 78107.0,
    "ComponentsMass": 11972.0,
    "Dimensions": {
      "Length": 27.0,
      "Width": 17.0,
      "Height": 8.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 850.0,
          "tail": 1200.0
        },
        "Parts": {
          "glass_canopy_front": 250.0,
          "wing_left_bottom": 100.0,
          "wing_b_left": 50.0,
          "wing_left_top": 100.0,
          "wing_flap_left": 100.0,
          "wing_right_bottom": 100.0,
          "wing_b_right": 100.0,
          "wing_right_top": 100.0,
          "wing_flap_right": 100.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster": 8700.0
        },
        "Retro": {
          "thruster_retro_left": 8100.0,
          "thruster_retro_right": 8100.0
        },
        "Maneuvering": {
          "mav_thruster_nose_top_left": 7250.0,
          "mav_thruster_nose_bottom_left": 7250.0,
          "mav_thruster_nose_top_right": 7250.0,
          "mav_thruster_nose_bottom_right": 7250.0,
          "mav_thruster_nose_middle_left": 7250.0,
          "mav_thruster_nose_middle_right": 7250.0,
          "mav_thruster_tail_top_left": 7250.0,
          "mav_thruster_tail_bottom_left": 7250.0,
          "mav_thruster_tail_top_right": 7250.0,
          "mav_thruster_tail_bottom_right": 7250.0,
          "mav_thruster_tail_middle_left": 7250.0,
          "mav_thruster_tail_middle_right": 7250.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 260.0,
      "MaxSpeed": 1425.0,
      "Pitch": 52.0,
      "Yaw": 48.0,
      "Roll": 180.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 13420000.0,
        "Retro": 2850000.0,
        "Vtol": 0.0,
        "Maneuvering": 15660000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 15.2,
        "Retro": 3.2,
        "Strafe": 4.1,
        "Up": 5.5,
        "Down": 3.7,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 610.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.2,
        "Y_AccelMultiplicator": 2.25,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 27000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 1677.5,
        "Retro": 356.25,
        "Vtol": 0.0,
        "Maneuvering": 1957.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5354.0,
        "SCMActive": 6386.0,
        "NAV": 12887.0
      },
      "Infrared": {
        "Start": 6320.0
      },
      "CrossSection": {
        "Front": 2687.0,
        "Side": 5631.0,
        "Top": 8318.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4480.0,
      "PilotBurstDPS": 1766.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 4115.0
    },
    "Insurance": {
      "StandardClaimTime": 10.14,
      "ExpeditedClaimTime": 3.38,
      "ExpeditedCost": 4573.0
    },
    "Buy": {
      "Astro Armada, Area 18": 3748500.0
    }
  },
  {
    "ClassName": "ORIG_400i",
    "Name": "Origin 400i",
    "Description": "To explore the stars is a most noble endeavor, and Origin Jumpworks has risen to the occasion in crafting the 400i high-performance pathfinder. With class-leading range, substantial defensive capabilities, and a factory-equipped scanning array, the 400i is ready to take on the harshest corners of the galaxy while maintaining the comfort and elegance Origin is known for. ",
    "Career": "Exploration",
    "Role": "Luxury",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 42.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 4.05,
      "PersonalInventory": 3.81
    },
    "Crew": 3,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 400457.06,
    "ComponentsMass": 37998.0,
    "Dimensions": {
      "Length": 56.0,
      "Width": 32.0,
      "Height": 12.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 20000.0,
          "Bridge": 15000.0
        },
        "Parts": {
          "Nose": 17500.0,
          "WingLeft": 14000.0,
          "WingRight": 14000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_sub_right": 18450.0,
          "thruster_sub_left": 18450.0,
          "thruster_main": 18450.0
        },
        "Retro": {
          "thruster_retro_right": 18450.0,
          "thruster_retro_left": 18450.0
        },
        "Vtol": {
          "thruster_bottom_front_left": 16000.0,
          "thruster_bottom_front_right": 16000.0,
          "thruster_bottom_rear_left": 16000.0,
          "thruster_bottom_rear_right": 16000.0
        },
        "Maneuvering": {
          "thruster_top_front_right": 16000.0,
          "thruster_top_front_left": 16000.0,
          "thruster_nose_bottom": 16000.0,
          "thruster_nose_top": 16000.0,
          "thruster_side_front_left": 16000.0,
          "thruster_side_front_right": 16000.0,
          "thruster_side_rear_left": 16000.0,
          "thruster_top_rear_left": 16000.0,
          "thruster_side_rear_right": 16000.0,
          "thruster_top_rear_right": 16000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 215.0,
      "MaxSpeed": 1150.0,
      "Pitch": 35.0,
      "Yaw": 35.0,
      "Roll": 70.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 24665060.0,
        "Retro": 12100000.0,
        "Vtol": 11314548.0,
        "Maneuvering": 37740000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.6,
        "Retro": 2.7,
        "Strafe": 2.4,
        "Up": 3.2,
        "Down": 2.7
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 450.0,
          "BoostSpeedBackward": 210.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.5,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 60000000.0,
      "FuelIntakeRate": 50.0,
      "QuantumFuelCapacity": 3600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 3.75,
        "Retro": 2.5,
        "Vtol": 5.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 3083.132,
        "Retro": 1512.5,
        "Vtol": 1414.318,
        "Maneuvering": 4717.5
      },
      "IntakeToMainFuelRatio": 1.62,
      "TimeForIntakesToFillTank": 1200000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 10178.0,
        "SCMActive": 12250.0,
        "NAV": 25658.0
      },
      "Infrared": {
        "Start": 9326.0
      },
      "CrossSection": {
        "Front": 4153.0,
        "Side": 10481.0,
        "Top": 19775.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 45400.0,
      "PilotBurstDPS": 1636.0,
      "TurretsBurstDPS": 2182.0,
      "TotalMissilesDmg": 51163.0
    },
    "Insurance": {
      "StandardClaimTime": 22.5,
      "ExpeditedClaimTime": 7.5,
      "ExpeditedCost": 12027.0
    },
    "Buy": {
      "Astro Armada, Area 18": 11466000.0,
      "New Deal, Lorville": 11466000.0
    }
  },
  {
    "ClassName": "ORIG_600i",
    "Name": "Origin 600i",
    "Description": "This multi-role luxury vessel from Origin Jumpworks features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form. The 600i is designed with a cutting-edge modular technology, allowing you to customize your ship for your needs.",
    "Career": "Exploration",
    "Role": "Luxury",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 44.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 4.46
    },
    "Crew": 1,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 1544667.0,
    "ComponentsMass": 92624.0,
    "Dimensions": {
      "Length": 91.5,
      "Width": 52.0,
      "Height": 17.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 55000.0,
          "Nose": 18600.0,
          "Front": 21000.0
        },
        "Parts": {
          "Wing_Left": 8625.0,
          "Wing_Right": 8625.0,
          "Tail": 40000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_upper_left": 21000.0,
          "main_upper_right": 21000.0,
          "main_lower_right": 21000.0,
          "main_lower_left": 21000.0
        },
        "Retro": {
          "thruster_retro_left": 19500.0,
          "thruster_retro_right": 19500.0
        },
        "Maneuvering": {
          "thruster_mav_rear_top_left": 18500.0,
          "thruster_mav_rear_side_left": 18500.0,
          "thruster_mav_rear_top_right": 18500.0,
          "thruster_mav_rear_side_right": 18500.0,
          "thruster_mav_rear_bottom_left": 18500.0,
          "thruster_mav_rear_bottom_right": 18500.0,
          "thruster_mav_rear_bottom_back": 18500.0,
          "thruster_mav_front_top_left": 18500.0,
          "thruster_mav_front_top_right": 18500.0,
          "thruster_mav_front_bottom_left": 18500.0,
          "thruster_mav_front_bottom_right": 18500.0,
          "thruster_mav_front_side_right": 18500.0,
          "thruster_mav_front_side_left": 18500.0,
          "thruster_mav_rear_bottom_front": 18500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 165.0,
      "MaxSpeed": 975.0,
      "Pitch": 19.0,
      "Yaw": 19.0,
      "Roll": 30.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 66200000.0,
        "Retro": 33100000.0,
        "Vtol": 0.0,
        "Maneuvering": 157200000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 4.1,
        "Retro": 2.0,
        "Strafe": 2.0,
        "Up": 3.6,
        "Down": 2.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 325.0,
          "BoostSpeedBackward": 185.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 180000000.0,
      "FuelIntakeRate": 150.0,
      "QuantumFuelCapacity": 5100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 8275.0,
        "Retro": 4137.5,
        "Vtol": 0.0,
        "Maneuvering": 19650.0
      },
      "IntakeToMainFuelRatio": 1.81,
      "TimeForIntakesToFillTank": 1200000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 16541.0,
        "SCMActive": 19991.0,
        "NAV": 31623.0
      },
      "Infrared": {
        "Start": 14147.0
      },
      "CrossSection": {
        "Front": 4576.0,
        "Side": 14099.0,
        "Top": 24735.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 112200.0,
      "PilotBurstDPS": 4609.0,
      "TurretsBurstDPS": 2182.0,
      "TotalMissilesDmg": 40423.0
    },
    "Insurance": {
      "StandardClaimTime": 35.1,
      "ExpeditedClaimTime": 11.7,
      "ExpeditedCost": 17550.0
    },
    "Buy": {
      "Astro Armada, Area 18": 27231750.0
    }
  },
  {
    "ClassName": "ORIG_600i_Touring",
    "Name": "Origin 600i Touring",
    "Description": "This multi-role luxury vessel from Origin Jumpworks features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form. The 600i is designed with a cutting-edge modular technology, allowing you to customize your ship for your needs.",
    "Career": "Exploration",
    "Role": "Luxury",
    "Size": 5,
    "Cargo": {
      "CargoGrid": 20.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 4.46
    },
    "Crew": 1,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 1544667.0,
    "ComponentsMass": 92624.0,
    "Dimensions": {
      "Length": 91.5,
      "Width": 52.0,
      "Height": 17.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 55000.0,
          "Nose": 18600.0,
          "Front": 21000.0
        },
        "Parts": {
          "Wing_Left": 8625.0,
          "Wing_Right": 8625.0,
          "Tail": 40000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_upper_left": 21000.0,
          "main_upper_right": 21000.0,
          "main_lower_right": 21000.0,
          "main_lower_left": 21000.0
        },
        "Retro": {
          "thruster_retro_left": 19500.0,
          "thruster_retro_right": 19500.0
        },
        "Maneuvering": {
          "thruster_mav_rear_top_left": 18500.0,
          "thruster_mav_rear_side_left": 18500.0,
          "thruster_mav_rear_top_right": 18500.0,
          "thruster_mav_rear_side_right": 18500.0,
          "thruster_mav_rear_bottom_left": 18500.0,
          "thruster_mav_rear_bottom_right": 18500.0,
          "thruster_mav_rear_bottom_back": 18500.0,
          "thruster_mav_front_top_left": 18500.0,
          "thruster_mav_front_top_right": 18500.0,
          "thruster_mav_front_bottom_left": 18500.0,
          "thruster_mav_front_bottom_right": 18500.0,
          "thruster_mav_front_side_right": 18500.0,
          "thruster_mav_front_side_left": 18500.0,
          "thruster_mav_rear_bottom_front": 18500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 165.0,
      "MaxSpeed": 975.0,
      "Pitch": 19.0,
      "Yaw": 19.0,
      "Roll": 30.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 66200000.0,
        "Retro": 33100000.0,
        "Vtol": 0.0,
        "Maneuvering": 157200000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 4.1,
        "Retro": 2.0,
        "Strafe": 2.0,
        "Up": 3.6,
        "Down": 2.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 325.0,
          "BoostSpeedBackward": 185.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 1.1,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 180000000.0,
      "FuelIntakeRate": 150.0,
      "QuantumFuelCapacity": 5100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 8275.0,
        "Retro": 4137.5,
        "Vtol": 0.0,
        "Maneuvering": 19650.0
      },
      "IntakeToMainFuelRatio": 1.81,
      "TimeForIntakesToFillTank": 1200000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 16540.0,
        "SCMActive": 19990.0,
        "NAV": 31622.0
      },
      "Infrared": {
        "Start": 13890.0
      },
      "CrossSection": {
        "Front": 4576.0,
        "Side": 14099.0,
        "Top": 24735.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 112200.0,
      "PilotBurstDPS": 4609.0,
      "TurretsBurstDPS": 2182.0,
      "TotalMissilesDmg": 40423.0
    },
    "Insurance": {
      "StandardClaimTime": 35.1,
      "ExpeditedClaimTime": 11.7,
      "ExpeditedCost": 17550.0
    },
    "Buy": {
      "Astro Armada, Area 18": 24938550.0
    }
  },
  {
    "ClassName": "ORIG_85X",
    "Name": "Origin 85X Limited",
    "Description": "Elegantly styled and meticulously constructed, the 85X is a versatile and comprehensive away-vessel that features precision control in and out of atmosphere. Utilizing much of the same thruster technology as the 300 series, it has the power of a racer with the reliability of a touring ship. Whether descending down to the planet surface or taking in the sights of your system, this runabout continues Origin’s proud tradition of turning heads.",
    "Career": "Exploration",
    "Role": "Luxury",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.47,
      "PersonalInventory": 1.47
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 18993.5,
    "ComponentsMass": 5862.0,
    "Dimensions": {
      "Length": 13.0,
      "Width": 10.0,
      "Height": 2.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 1600.0
        },
        "Parts": {
          "wing_left": 600.0,
          "wing_right": 600.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 6000.0,
          "thruster_main_right": 6000.0
        },
        "Retro": {
          "thruster_retro_left": 5500.0,
          "thruster_retro_right": 5500.0
        },
        "Maneuvering": {
          "thruster_rear_left_top": 5100.0,
          "thruster_rear_left_bottom": 5100.0,
          "thruster_rear_right_top": 5100.0,
          "thruster_rear_right_bottom": 5100.0,
          "thruster_rear_right_side": 5100.0,
          "thruster_rear_left_side": 5100.0,
          "thruster_front_left_bottom": 5100.0,
          "thruster_front_left_side": 5100.0,
          "thruster_front_left_top": 5100.0,
          "thruster_front_right_bottom": 5100.0,
          "thruster_front_right_side": 5100.0,
          "thruster_front_right_top": 5100.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 230.0,
      "MaxSpeed": 1250.0,
      "Pitch": 65.0,
      "Yaw": 65.0,
      "Roll": 215.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2892112.0,
        "Retro": 1179512.8,
        "Vtol": 0.0,
        "Maneuvering": 5224068.4
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 15.1,
        "Retro": 4.5,
        "Strafe": 10.5,
        "Up": 10.5,
        "Down": 5.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 550.0,
          "BoostSpeedBackward": 270.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.6,
        "Y_AccelMultiplicator": 1.6,
        "Z_AccelMultiplicator": 1.6
      }
    },
    "FuelManagement": {
      "FuelCapacity": 4500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1000000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 361.514,
        "Retro": 147.439,
        "Vtol": 0.0,
        "Maneuvering": 653.008
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5125.0,
        "SCMActive": 6098.0,
        "NAV": 12658.0
      },
      "Infrared": {
        "Start": 8150.0
      },
      "CrossSection": {
        "Front": 1479.0,
        "Side": 7279.0,
        "Top": 9495.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2240.0,
      "PilotBurstDPS": 1094.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 1.0125,
      "ExpeditedClaimTime": 0.0,
      "ExpeditedCost": 510.0
    },
    "Buy": {
      "New Deal, Lorville": 573300.0
    }
  },
  {
    "ClassName": "ORIG_890Jump",
    "Name": "Origin 890 Jump",
    "Description": "With an elegant, sleek exterior that belies its spacious interior, the 890 Jump is a true engineering marvel. Crafted to impress from every angle by combining a unique, innovative design with the finest materials and the most advanced technology. The result is a vessel that is in a class all of its own, a masterpiece worthy of the name Origin.",
    "Career": "Exploration",
    "Role": "Luxury",
    "Size": 6,
    "Cargo": {
      "CargoGrid": 388.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 7.65
    },
    "Crew": 1,
    "WeaponCrew": 8,
    "OperationsCrew": 0,
    "Mass": 43896159.0,
    "ComponentsMass": 426228.0,
    "Dimensions": {
      "Length": 210.0,
      "Width": 80.0,
      "Height": 45.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body_Front": 100000.0
        },
        "Parts": {
          "Front": 10000.0,
          "Nose": 10000.0,
          "MissileLauncher_hatchDoorA_TL": 200.0,
          "MissileLauncher_hatchDoorA_TR": 200.0,
          "MissileLauncher_hatchDoorB_TL": 200.0,
          "MissileLauncher_hatchDoorB_TR": 200.0,
          "Body": 10000.0,
          "Body_Top": 10000.0,
          "Glass_Left_Atrium": 200.0,
          "Glass_Rear": 200.0,
          "Glass_Right_Atrium": 200.0,
          "Glass_Top": 200.0,
          "Body_Front_Top": 10000.0,
          "Glass_Bridge": 200.0,
          "Glass_Dining": 200.0,
          "Glass_Left": 200.0,
          "Glass_Left_Bar": 200.0,
          "Glass_Left_Bridge": 200.0,
          "Glass_Right": 200.0,
          "Glass_Right_Bar": 200.0,
          "Glass_Right_Bridge": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_lower_left": 45000.0,
          "main_lower_right": 45000.0,
          "main_upper_left": 45000.0,
          "main_upper_right": 45000.0
        },
        "Retro": {
          "thruster_retro_left": 44000.0,
          "thruster_retro_right": 44000.0
        },
        "Vtol": {
          "thruster_vtol_front_left": 42500.0,
          "thruster_vtol_front_right": 42500.0,
          "thruster_vtol_nose": 42500.0
        },
        "Maneuvering": {
          "thruster_mav_mid_side_left": 42500.0,
          "thruster_mav_mid_side_right": 42500.0,
          "thruster_mav_mid_top_left": 42500.0,
          "thruster_mav_mid_top_right": 42500.0,
          "thruster_mav_front_side_left": 42500.0,
          "thruster_mav_front_side_right": 42500.0,
          "thruster_mav_front_top_left": 42500.0,
          "thruster_mav_front_top_right": 42500.0,
          "thruster_mav_mid_bottom_left": 42500.0,
          "thruster_mav_mid_bottom_right": 42500.0,
          "thruster_mav_rear_bottom_left": 42500.0,
          "thruster_mav_rear_bottom_right": 42500.0,
          "thruster_mav_rear_side_left": 42500.0,
          "thruster_mav_rear_side_right": 42500.0,
          "thruster_mav_rear_top_left": 42500.0,
          "thruster_mav_rear_top_right": 42500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 125.0,
      "MaxSpeed": 915.0,
      "Pitch": 16.0,
      "Yaw": 16.0,
      "Roll": 30.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 1420000000.0,
        "Retro": 655000000.0,
        "Vtol": 375000000.0,
        "Maneuvering": 2031000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 3.2,
        "Retro": 1.5,
        "Strafe": 1.0,
        "Up": 2.0,
        "Down": 1.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 9.0,
        "ScmMode": {
          "BoostSpeedForward": 300.0,
          "BoostSpeedBackward": 105.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 2.5,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.5,
          "Yaw": 1.5,
          "Roll": 2.0
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 4.0,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 1200000000.0,
      "FuelIntakeRate": 600.0,
      "QuantumFuelCapacity": 14600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 3.75,
        "Maneuvering": 20.0
      },
      "FuelUsagePerSecond": {
        "Main": 177500.0,
        "Retro": 81875.0,
        "Vtol": 46875.0,
        "Maneuvering": 253875.0
      },
      "IntakeToMainFuelRatio": 0.34,
      "TimeForIntakesToFillTank": 2000000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 22389.0,
        "SCMActive": 33518.0,
        "NAV": 54625.0
      },
      "Infrared": {
        "Start": 21592.0
      },
      "CrossSection": {
        "Front": 7746.0,
        "Side": 13506.0,
        "Top": 39724.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 10.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 908000.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 8617.0,
      "TotalMissilesDmg": 96329.0
    },
    "Insurance": {
      "StandardClaimTime": 67.5,
      "ExpeditedClaimTime": 22.5,
      "ExpeditedCost": 33750.0
    },
    "Buy": {
      "Astro Armada, Area 18": 65356200.0,
      "New Deal, Lorville": 65356200.0
    }
  },
  {
    "ClassName": "ORIG_m50",
    "Name": "Origin M50 Interceptor",
    "Description": "If you want to get from point A to point B as quickly as possible and with as much style as possible then Origin's M50 is for you. Featuring supercharged engines that counter a tiny weapons loadout, the M50 is a ship for going FAST.",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.43,
      "PersonalInventory": 0.0
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 9772.0,
    "ComponentsMass": 2235.0,
    "Dimensions": {
      "Length": 11.5,
      "Width": 11.0,
      "Height": 3.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 800.0
        },
        "Parts": {
          "PowerplantHousingRight": 200.0,
          "Tail": 840.0,
          "WingLeft": 200.0,
          "WingRight": 200.0,
          "PowerplantHousingLeft": 200.0,
          "Nose": 800.0,
          "Canopy": 80.0,
          "LadderHatch": 1.0,
          "WingFrontRight": 50.0,
          "WingFrontLeft": 50.0,
          "EngineCover": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_right_attach": 7250.0,
          "engine_left_attach": 7250.0
        },
        "Retro": {
          "thruster_intake_right_retro": 7150.0,
          "thruster_intake_left_retro": 7150.0
        },
        "Maneuvering": {
          "thruster_rear_right_bottom": 6000.0,
          "thruster_rear_right_side": 6000.0,
          "thruster_rear_left_bottom": 6000.0,
          "thruster_rear_left_side": 6000.0,
          "thruster_front_left_bottom": 6000.0,
          "thruster_front_left_side": 6000.0,
          "thruster_front_left_top": 6000.0,
          "thruster_front_right_bottom": 6000.0,
          "thruster_front_right_side": 6000.0,
          "thruster_front_right_top": 6000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 280.0,
      "MaxSpeed": 1450.0,
      "Pitch": 55.0,
      "Yaw": 55.0,
      "Roll": 200.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 1968000.0,
        "Retro": 383000.0,
        "Vtol": 0.0,
        "Maneuvering": 2383274.8
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 18.1,
        "Retro": 3.5,
        "Strafe": 7.0,
        "Up": 8.0,
        "Down": 4.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 620.0,
          "BoostSpeedBackward": 290.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 25.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 33.3,
        "X_AccelMultiplicator": 2.2,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 3000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1000000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 12.5
      },
      "FuelUsagePerSecond": {
        "Main": 246.0,
        "Retro": 47.875,
        "Vtol": 0.0,
        "Maneuvering": 297.909
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1799.0,
        "SCMActive": 2086.0,
        "NAV": 9332.0
      },
      "Infrared": {
        "Start": 5826.0
      },
      "CrossSection": {
        "Front": 1609.0,
        "Side": 5365.0,
        "Top": 5365.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2240.0,
      "PilotBurstDPS": 656.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 2280.0
    },
    "Insurance": {
      "StandardClaimTime": 6.075,
      "ExpeditedClaimTime": 2.025,
      "ExpeditedCost": 3040.0
    },
    "Buy": {
      "Astro Armada, Area 18": 1499400.0,
      "New Deal, Lorville": 1499400.0
    }
  },
  {
    "ClassName": "ORIG_X1",
    "Name": "Origin X1",
    "Description": "Welcome to the next level with the X1, Origin Jumpworks' high performance open-canopy vehicle. Built from lightweight polymers, the X1 takes speed and agility to the next level thanks to seamlessly integrated engine technology and joint vector thruster placement. Innovative design and high-quality engineering weave together to create a flight experience like no other.",
    "Career": "Personal Transport",
    "Role": "Transport",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.39,
      "PersonalInventory": 0.25
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 4730.0,
    "ComponentsMass": 693.0,
    "Dimensions": {
      "Length": 5.5,
      "Width": 1.25,
      "Height": 1.5
    },
    "IsSpaceship": false,
    "IsGravlev": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 3.0,
        "Infrared": 0.3,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 530.0
        },
        "Parts": {
          "door_body_top": 50.0,
          "door_body_left_bottom": 50.0,
          "door_body_left_top": 50.0,
          "door_body_leg_bottom_left": 50.0,
          "door_body_leg_top_left": 50.0,
          "door_body_right_bottom": 50.0,
          "door_body_right_top": 50.0,
          "door_body_leg_bottom_right": 50.0,
          "door_body_leg_top_right": 50.0,
          "nose": 450.0,
          "door_body_inner_right": 50.0,
          "foot_glass_right_top": 50.0,
          "door_nose_right": 50.0,
          "foot_glass_left_top": 50.0,
          "door_nose_left": 50.0,
          "tail": 340.0,
          "rear_glass": 50.0,
          "tail_wing_left": 200.0,
          "tail_component_door_left": 50.0,
          "tail_component_door_left_break": 50.0,
          "tail_wing_left_cap": 50.0,
          "tail_wing_left_break": 50.0,
          "tail_wing_right": 200.0,
          "tail_component_door_right": 50.0,
          "tail_component_door_right_break": 50.0,
          "tail_wing_right_break": 50.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 1000.0,
          "thruster_main_left": 1000.0
        },
        "Retro": {
          "thruster_retro_left": 2500.0,
          "thruster_retro_right": 2500.0
        },
        "Maneuvering": {
          "gravlev_front_right": 1000.0,
          "gravlev_front_left": 1000.0,
          "gravlev_rear_left": 1000.0,
          "gravlev_rear_right": 1000.0,
          "gravlev_center_left": 1000.0,
          "gravlev_center_right": 1000.0,
          "thruster_mav_front_bottom_right": 2150.0,
          "thruster_mav_front_bottom_right_side": 2150.0,
          "thruster_mav_front_top_right": 2150.0,
          "thruster_mav_front_top_right_side": 2150.0,
          "thruster_mav_front_bottom_left": 2150.0,
          "thruster_mav_front_bottom_left_side": 2150.0,
          "thruster_mav_front_top_left": 2150.0,
          "thruster_mav_front_top_left_side": 2150.0,
          "thruster_mav_rear_bottom_right": 2150.0,
          "thruster_mav_rear_bottom_right_side": 2150.0,
          "thruster_mav_rear_bottom_left": 2150.0,
          "thruster_mav_rear_bottom_left_side": 2150.0,
          "thruster_mav_rear_top_left": 2150.0,
          "thruster_mav_rear_top_left_side": 2150.0,
          "thruster_mav_rear_top_right": 2150.0,
          "thruster_mav_rear_top_right_side": 2150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 207.0,
      "HoverMaxSpeed": 207.0,
      "MaxSpeed": 569.0,
      "Pitch": 80.0,
      "Yaw": 80.0,
      "Roll": 135.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 121500.0,
        "Retro": 135000.0,
        "Vtol": 0.0,
        "Maneuvering": 305800.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.7,
        "Retro": 2.6,
        "Strafe": 1.3,
        "Up": 1.9,
        "Down": 1.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 287.0,
          "BoostSpeedBackward": 127.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.35,
            "Z": 1.2
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.35,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 15.0,
        "CapacitorRegenPerSec": 2.0,
        "CapacitorIdleCost": 2.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 2.0,
        "RegenerationTime": 7.5,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 900000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 27.5
      },
      "FuelUsagePerSecond": {
        "Main": 15.188,
        "Retro": 16.875,
        "Vtol": 0.0,
        "Maneuvering": 38.225
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 362.0,
        "SCMActive": 381.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 599.0
      },
      "CrossSection": {
        "Front": 333.0,
        "Side": 457.0,
        "Top": 560.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 304.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.15,
      "ExpeditedClaimTime": 0.05,
      "ExpeditedCost": 75.0
    },
    "New Ship": "Origin X1",
    "Buy": {
      "Astro Armada, Area 18": 105840.0,
      "New Deal, Lorville": 105840.0
    }
  },
  {
    "ClassName": "ORIG_X1_Force",
    "Name": "Origin X1 Force",
    "Description": "Built to endure tougher environments and look good doing it, the X1 Force is a modified version of the base X1 model featuring additional defensive elements to toughen up this speedy and agile open-canopy bike, allowing it to serve in a variety of roles, from exploring worlds to potential security infiltration ops.",
    "Career": "Personal Transport",
    "Role": "Transport",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.39,
      "PersonalInventory": 0.25
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 4730.0,
    "ComponentsMass": 728.0,
    "Dimensions": {
      "Length": 5.5,
      "Width": 1.25,
      "Height": 1.5
    },
    "IsSpaceship": false,
    "IsGravlev": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 3.0,
        "Infrared": 0.3,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 530.0
        },
        "Parts": {
          "door_body_top": 50.0,
          "door_body_left_bottom": 50.0,
          "door_body_left_top": 50.0,
          "door_body_leg_bottom_left": 50.0,
          "door_body_leg_top_left": 50.0,
          "door_body_right_bottom": 50.0,
          "door_body_right_top": 50.0,
          "door_body_leg_bottom_right": 50.0,
          "door_body_leg_top_right": 50.0,
          "nose": 450.0,
          "door_body_inner_right": 50.0,
          "foot_glass_right_top": 50.0,
          "door_nose_right": 50.0,
          "foot_glass_left_top": 50.0,
          "door_nose_left": 50.0,
          "tail": 340.0,
          "rear_glass": 50.0,
          "tail_wing_left": 200.0,
          "tail_component_door_left": 50.0,
          "tail_component_door_left_break": 50.0,
          "tail_wing_left_cap": 50.0,
          "tail_wing_left_break": 50.0,
          "tail_wing_right": 200.0,
          "tail_component_door_right": 50.0,
          "tail_component_door_right_break": 50.0,
          "tail_wing_right_break": 50.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right": 1000.0,
          "thruster_main_left": 1000.0
        },
        "Retro": {
          "thruster_retro_left": 2500.0,
          "thruster_retro_right": 2500.0
        },
        "Maneuvering": {
          "gravlev_front_right": 1000.0,
          "gravlev_front_left": 1000.0,
          "gravlev_rear_left": 1000.0,
          "gravlev_rear_right": 1000.0,
          "gravlev_center_left": 1000.0,
          "gravlev_center_right": 1000.0,
          "thruster_mav_front_bottom_right": 2150.0,
          "thruster_mav_front_bottom_right_side": 2150.0,
          "thruster_mav_front_top_right": 2150.0,
          "thruster_mav_front_top_right_side": 2150.0,
          "thruster_mav_front_bottom_left": 2150.0,
          "thruster_mav_front_bottom_left_side": 2150.0,
          "thruster_mav_front_top_left": 2150.0,
          "thruster_mav_front_top_left_side": 2150.0,
          "thruster_mav_rear_bottom_right": 2150.0,
          "thruster_mav_rear_bottom_right_side": 2150.0,
          "thruster_mav_rear_bottom_left": 2150.0,
          "thruster_mav_rear_bottom_left_side": 2150.0,
          "thruster_mav_rear_top_left": 2150.0,
          "thruster_mav_rear_top_left_side": 2150.0,
          "thruster_mav_rear_top_right": 2150.0,
          "thruster_mav_rear_top_right_side": 2150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 207.0,
      "HoverMaxSpeed": 207.0,
      "MaxSpeed": 569.0,
      "Pitch": 80.0,
      "Yaw": 80.0,
      "Roll": 135.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 121500.0,
        "Retro": 135000.0,
        "Vtol": 0.0,
        "Maneuvering": 305800.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 2.7,
        "Retro": 2.6,
        "Strafe": 1.3,
        "Up": 1.9,
        "Down": 1.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 287.0,
          "BoostSpeedBackward": 127.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.35,
            "Z": 1.2
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.35,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 15.0,
        "CapacitorRegenPerSec": 2.0,
        "CapacitorIdleCost": 2.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 2.0,
        "RegenerationTime": 7.5,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 900000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 27.5
      },
      "FuelUsagePerSecond": {
        "Main": 15.188,
        "Retro": 16.875,
        "Vtol": 0.0,
        "Maneuvering": 38.225
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 364.0,
        "SCMActive": 1733.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 599.0
      },
      "CrossSection": {
        "Front": 333.0,
        "Side": 457.0,
        "Top": 560.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 219.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.15,
      "ExpeditedClaimTime": 0.05,
      "ExpeditedCost": 75.0
    },
    "New Ship": "Origin X1 Force",
    "Buy": {
      "Astro Armada, Area 18": 132300.0,
      "New Deal, Lorville": 132300.0
    }
  },
  {
    "ClassName": "ORIG_X1_Velocity",
    "Name": "Origin X1 Velocity",
    "Description": "How do you make fast go faster? Origin Jumpworks' X1 Velocity dares to push the boundaries of speed by stripping down the base X1 to its core elements; eliminating the weapon mount and incorporating new Syntek composites to create a lighter chassis for overall weight loss.",
    "Career": "Personal Transport",
    "Role": "Racing",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.39,
      "PersonalInventory": 0.25
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 4730.0,
    "ComponentsMass": 573.0,
    "Dimensions": {
      "Length": 5.5,
      "Width": 1.25,
      "Height": 1.5
    },
    "IsSpaceship": false,
    "IsGravlev": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 3.0,
        "Infrared": 0.3,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 530.0
        },
        "Parts": {
          "door_body_top": 50.0,
          "door_body_left_bottom": 50.0,
          "door_body_left_top": 50.0,
          "door_body_leg_bottom_left": 50.0,
          "door_body_leg_top_left": 50.0,
          "door_body_right_bottom": 50.0,
          "door_body_right_top": 50.0,
          "door_body_leg_bottom_right": 50.0,
          "door_body_leg_top_right": 50.0,
          "nose": 450.0,
          "door_body_inner_right": 50.0,
          "foot_glass_right_top": 50.0,
          "door_nose_right": 50.0,
          "foot_glass_left_top": 50.0,
          "door_nose_left": 50.0,
          "tail": 340.0,
          "rear_glass": 50.0,
          "tail_wing_left": 200.0,
          "tail_component_door_left": 50.0,
          "tail_component_door_left_break": 50.0,
          "tail_wing_left_cap": 50.0,
          "tail_wing_left_break": 50.0,
          "tail_wing_right": 200.0,
          "tail_component_door_right": 50.0,
          "tail_component_door_right_break": 50.0,
          "tail_wing_right_break": 50.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_velocity": 1000.0
        },
        "Retro": {
          "thruster_retro_left": 2500.0,
          "thruster_retro_right": 2500.0
        },
        "Maneuvering": {
          "gravlev_front_right": 1000.0,
          "gravlev_front_left": 1000.0,
          "gravlev_rear_left": 1000.0,
          "gravlev_rear_right": 1000.0,
          "gravlev_center_left": 1000.0,
          "gravlev_center_right": 1000.0,
          "thruster_mav_front_bottom_right": 2150.0,
          "thruster_mav_front_bottom_right_side": 2150.0,
          "thruster_mav_front_top_right": 2150.0,
          "thruster_mav_front_top_right_side": 2150.0,
          "thruster_mav_front_bottom_left": 2150.0,
          "thruster_mav_front_bottom_left_side": 2150.0,
          "thruster_mav_front_top_left": 2150.0,
          "thruster_mav_front_top_left_side": 2150.0,
          "thruster_mav_rear_bottom_right": 2150.0,
          "thruster_mav_rear_bottom_right_side": 2150.0,
          "thruster_mav_rear_bottom_left": 2150.0,
          "thruster_mav_rear_bottom_left_side": 2150.0,
          "thruster_mav_rear_top_left": 2150.0,
          "thruster_mav_rear_top_left_side": 2150.0,
          "thruster_mav_rear_top_right": 2150.0,
          "thruster_mav_rear_top_right_side": 2150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 222.0,
      "HoverMaxSpeed": 222.0,
      "MaxSpeed": 611.0,
      "Pitch": 93.0,
      "Yaw": 93.0,
      "Roll": 140.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 133500.0,
        "Retro": 147000.0,
        "Vtol": 0.0,
        "Maneuvering": 329800.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 3.1,
        "Retro": 2.9,
        "Strafe": 1.5,
        "Up": 2.4,
        "Down": 2.4
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 302.0,
          "BoostSpeedBackward": 142.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 2.0,
            "Y": 2.3,
            "Z": 1.2
          },
          "NegativeAxis": {
            "X": 2.0,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 11.0,
        "CapacitorRegenPerSec": 4.0,
        "CapacitorIdleCost": 4.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 2.0,
        "RegenerationTime": 2.8,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 900000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 27.5
      },
      "FuelUsagePerSecond": {
        "Main": 16.688,
        "Retro": 18.375,
        "Vtol": 0.0,
        "Maneuvering": 41.225
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 361.0,
        "SCMActive": 379.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 596.0
      },
      "CrossSection": {
        "Front": 333.0,
        "Side": 457.0,
        "Top": 560.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.15,
      "ExpeditedClaimTime": 0.05,
      "ExpeditedCost": 75.0
    },
    "New Ship": "Origin X1 Velocity",
    "Buy": {
      "Astro Armada, Area 18": 119070.0,
      "New Deal, Lorville": 119070.0
    }
  },
  {
    "ClassName": "RSI_Aurora_CL",
    "Name": "RSI Aurora CL",
    "Description": "Customized for mercantile and trading excursions, the Aurora Clipper is the perfect vessel for aspiring entrepreneurs and seasoned traders alike. Swapping a smaller power plant and armor capabilities for an expanded cargo capacity, the Clipper ups the ante for personal merchant craft.",
    "Career": "Transporter",
    "Role": "Light Freight",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 6.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.93
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 24422.0,
    "ComponentsMass": 4300.0,
    "Dimensions": {
      "Length": 18.0,
      "Width": 8.0,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 1940.0,
          "Body": 1880.0
        },
        "Parts": {
          "Wing_Bottom_Left": 480.0,
          "Wing_Top_Left": 480.0,
          "Wing_Bottom_Right": 480.0,
          "Wing_Top_Right": 480.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "Main_Thruster": 8750.0
        },
        "Retro": {
          "Retro_Thruster_Left": 8000.0,
          "Retro_Thruster_Right": 8000.0
        },
        "Maneuvering": {
          "Mav_Thruster_FT": 7150.0,
          "Mav_Thruster_FB": 7150.0,
          "Mav_Thruster_FL": 7150.0,
          "Mav_Thruster_FR": 7150.0,
          "Mav_Thruster_RT": 7150.0,
          "Mav_Thruster_RL": 7150.0,
          "Mav_Thruster_RR": 7150.0,
          "Mav_Thruster_RB": 7150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1200.0,
      "Pitch": 46.0,
      "Yaw": 46.0,
      "Roll": 140.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2933877.0,
        "Retro": 933685.6,
        "Vtol": 0.0,
        "Maneuvering": 1777455.2
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.9,
        "Retro": 3.4,
        "Strafe": 4.9,
        "Up": 5.9,
        "Down": 4.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 450.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.2,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 4500000.0,
      "FuelIntakeRate": 5.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 366.735,
        "Retro": 116.711,
        "Vtol": 0.0,
        "Maneuvering": 222.182
      },
      "IntakeToMainFuelRatio": 1.36,
      "TimeForIntakesToFillTank": 900000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3831.0,
        "SCMActive": 4579.0,
        "NAV": 11365.0
      },
      "Infrared": {
        "Start": 4631.0
      },
      "CrossSection": {
        "Front": 1515.0,
        "Side": 3367.0,
        "Top": 6888.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3700.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 2312.0
    },
    "Insurance": {
      "StandardClaimTime": 2.43,
      "ExpeditedClaimTime": 0.81,
      "ExpeditedCost": 1408.0
    },
    "Buy": {
      "New Deal, Lorville": 1020600.0
    }
  },
  {
    "ClassName": "RSI_Aurora_ES",
    "Name": "RSI Aurora ES",
    "Description": "The Aurora is the modern day descendant of the Roberts Space Industries X-7 spacecraft which tested the very first jump engines. Utilitarian to a T, the Aurora is the perfect beginner's ship: what it lacks in style it makes up for in ample room for upgrade modules.",
    "Career": "Multi-Role",
    "Role": "Starter / Pathfinder",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 3.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.93
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 24486.0,
    "ComponentsMass": 3770.0,
    "Dimensions": {
      "Length": 18.0,
      "Width": 8.0,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 1940.0,
          "Body": 1880.0
        },
        "Parts": {
          "Wing_Bottom_Left": 480.0,
          "Wing_Top_Left": 480.0,
          "Wing_Bottom_Right": 480.0,
          "Wing_Top_Right": 480.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "Main_Thruster": 8750.0
        },
        "Retro": {
          "Retro_Thruster_Left": 8000.0,
          "Retro_Thruster_Right": 8000.0
        },
        "Maneuvering": {
          "Mav_Thruster_FT": 7150.0,
          "Mav_Thruster_FB": 7150.0,
          "Mav_Thruster_FL": 7150.0,
          "Mav_Thruster_FR": 7150.0,
          "Mav_Thruster_RT": 7150.0,
          "Mav_Thruster_RL": 7150.0,
          "Mav_Thruster_RR": 7150.0,
          "Mav_Thruster_RB": 7150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1200.0,
      "Pitch": 46.0,
      "Yaw": 46.0,
      "Roll": 140.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2938602.0,
        "Retro": 936461.4,
        "Vtol": 0.0,
        "Maneuvering": 1780561.6
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.9,
        "Retro": 3.4,
        "Strafe": 4.9,
        "Up": 5.9,
        "Down": 4.9
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 450.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.2,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 4500000.0,
      "FuelIntakeRate": 5.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 367.325,
        "Retro": 117.058,
        "Vtol": 0.0,
        "Maneuvering": 222.57
      },
      "IntakeToMainFuelRatio": 1.36,
      "TimeForIntakesToFillTank": 900000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3831.0,
        "SCMActive": 4579.0,
        "NAV": 11365.0
      },
      "Infrared": {
        "Start": 4631.0
      },
      "CrossSection": {
        "Front": 1980.0,
        "Side": 4400.0,
        "Top": 9000.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 2800.0,
      "PilotBurstDPS": 405.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 2312.0
    },
    "Insurance": {
      "StandardClaimTime": 2.16,
      "ExpeditedClaimTime": 0.72,
      "ExpeditedCost": 1298.0
    },
    "Buy": {
      "New Deal, Lorville": 423360.0
    }
  },
  {
    "ClassName": "RSI_Aurora_LN",
    "Name": "RSI Aurora LN",
    "Description": "With a more robust shield generator and a pair of additional weapon hard points, the Legionnaire is a dedicated combat fighter, built to handle any obstacle the universe can throw at you.",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 3.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.71
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 26714.0,
    "ComponentsMass": 4784.0,
    "Dimensions": {
      "Length": 18.0,
      "Width": 8.0,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 1940.0,
          "Body": 1880.0
        },
        "Parts": {
          "Wing_Bottom_Left": 480.0,
          "Wing_Top_Left": 480.0,
          "Wing_Bottom_Right": 480.0,
          "Wing_Top_Right": 480.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "Main_Thruster": 8750.0
        },
        "Retro": {
          "Retro_Thruster_Left": 8000.0,
          "Retro_Thruster_Right": 8000.0
        },
        "Maneuvering": {
          "Mav_Thruster_FT": 7150.0,
          "Mav_Thruster_FB": 7150.0,
          "Mav_Thruster_FL": 7150.0,
          "Mav_Thruster_FR": 7150.0,
          "Mav_Thruster_RT": 7150.0,
          "Mav_Thruster_RL": 7150.0,
          "Mav_Thruster_RR": 7150.0,
          "Mav_Thruster_RB": 7150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1200.0,
      "Pitch": 46.0,
      "Yaw": 46.0,
      "Roll": 140.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 3269697.0,
        "Retro": 1040285.8,
        "Vtol": 0.0,
        "Maneuvering": 1981247.2
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.2,
        "Retro": 3.5,
        "Strafe": 5.0,
        "Up": 6.1,
        "Down": 5.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 450.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.2,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 4500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 408.712,
        "Retro": 130.036,
        "Vtol": 0.0,
        "Maneuvering": 247.656
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3341.0,
        "SCMActive": 3989.0,
        "NAV": 10875.0
      },
      "Infrared": {
        "Start": 3871.0
      },
      "CrossSection": {
        "Front": 1349.0,
        "Side": 2998.0,
        "Top": 6133.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3200.0,
      "PilotBurstDPS": 875.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9602.0
    },
    "Insurance": {
      "StandardClaimTime": 2.92,
      "ExpeditedClaimTime": 0.97,
      "ExpeditedCost": 2005.0
    },
    "Buy": {
      "New Deal, Lorville": 907200.0
    }
  },
  {
    "ClassName": "RSI_Aurora_LX",
    "Name": "RSI Aurora LX",
    "Description": "Be proud of your roots with the brand-new Aurora Deluxe, built for the discerning pilot who never forgets where he or she came from. The LX features patent leather interior to guarantee comfort for those long stretches in the deep black.",
    "Career": "Exploration",
    "Role": "Pathfinder",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 3.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 1.01
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 24736.0,
    "ComponentsMass": 3597.0,
    "Dimensions": {
      "Length": 18.0,
      "Width": 8.0,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 1940.0,
          "Body": 1880.0
        },
        "Parts": {
          "Wing_Bottom_Left": 480.0,
          "Wing_Top_Left": 480.0,
          "Wing_Bottom_Right": 480.0,
          "Wing_Top_Right": 480.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "Main_Thruster": 8750.0
        },
        "Retro": {
          "Retro_Thruster_Left": 8000.0,
          "Retro_Thruster_Right": 8000.0
        },
        "Maneuvering": {
          "Mav_Thruster_FT": 7150.0,
          "Mav_Thruster_FB": 7150.0,
          "Mav_Thruster_FL": 7150.0,
          "Mav_Thruster_FR": 7150.0,
          "Mav_Thruster_RT": 7150.0,
          "Mav_Thruster_RL": 7150.0,
          "Mav_Thruster_RR": 7150.0,
          "Mav_Thruster_RB": 7150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1200.0,
      "Pitch": 46.0,
      "Yaw": 46.0,
      "Roll": 140.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 3517894.0,
        "Retro": 1218646.6,
        "Vtol": 0.0,
        "Maneuvering": 1322561.6
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 12.9,
        "Retro": 4.4,
        "Strafe": 3.6,
        "Up": 3.6,
        "Down": 1.8
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 450.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.2,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 4500000.0,
      "FuelIntakeRate": 5.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 439.737,
        "Retro": 152.331,
        "Vtol": 0.0,
        "Maneuvering": 165.32
      },
      "IntakeToMainFuelRatio": 1.14,
      "TimeForIntakesToFillTank": 900000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3838.0,
        "SCMActive": 4579.0,
        "NAV": 11371.0
      },
      "Infrared": {
        "Start": 4631.0
      },
      "CrossSection": {
        "Front": 1178.0,
        "Side": 2618.0,
        "Top": 5355.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4480.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 4115.0
    },
    "Insurance": {
      "StandardClaimTime": 2.7,
      "ExpeditedClaimTime": 0.9,
      "ExpeditedCost": 1513.0
    },
    "Buy": {
      "New Deal, Lorville": 687960.0
    }
  },
  {
    "ClassName": "RSI_Aurora_MR",
    "Name": "RSI Aurora MR",
    "Description": "Perhaps you're looking for something that offers carrying capacity but has combat capabilities too? The Aurora Marque comes with a pair of Behring-quality lasers and a high quality gun cooler system.",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 3.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.71
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 25893.0,
    "ComponentsMass": 4362.0,
    "Dimensions": {
      "Length": 18.0,
      "Width": 8.0,
      "Height": 4.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 1940.0,
          "Body": 1880.0
        },
        "Parts": {
          "Wing_Bottom_Left": 480.0,
          "Wing_Top_Left": 480.0,
          "Wing_Bottom_Right": 480.0,
          "Wing_Top_Right": 480.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "Main_Thruster": 8750.0
        },
        "Retro": {
          "Retro_Thruster_Left": 8000.0,
          "Retro_Thruster_Right": 8000.0
        },
        "Maneuvering": {
          "Mav_Thruster_FT": 7150.0,
          "Mav_Thruster_FB": 7150.0,
          "Mav_Thruster_FL": 7150.0,
          "Mav_Thruster_FR": 7150.0,
          "Mav_Thruster_RT": 7150.0,
          "Mav_Thruster_RL": 7150.0,
          "Mav_Thruster_RR": 7150.0,
          "Mav_Thruster_RB": 7150.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1200.0,
      "Pitch": 46.0,
      "Yaw": 46.0,
      "Roll": 140.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 3098507.0,
        "Retro": 986840.8,
        "Vtol": 0.0,
        "Maneuvering": 1879094.4
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.0,
        "Retro": 3.5,
        "Strafe": 5.0,
        "Up": 6.0,
        "Down": 5.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 450.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.2,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 4500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 387.313,
        "Retro": 123.355,
        "Vtol": 0.0,
        "Maneuvering": 234.886
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3831.0,
        "SCMActive": 4579.0,
        "NAV": 11365.0
      },
      "Infrared": {
        "Start": 4631.0
      },
      "CrossSection": {
        "Front": 1515.0,
        "Side": 3367.0,
        "Top": 6888.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3700.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 2280.0
    },
    "Insurance": {
      "StandardClaimTime": 2.92,
      "ExpeditedClaimTime": 0.97,
      "ExpeditedCost": 1631.0
    },
    "Buy": {
      "New Deal, Lorville": 680400.0
    }
  },
  {
    "ClassName": "RSI_Constellation_Andromeda",
    "Name": "RSI Constellation Andromeda",
    "Description": "The Constellation Andromeda is a dependable multi-crew freighter that appeals to merchants across the empire thanks to its versatility. One of the most popular ships that RSI produces, the iconic Andromeda features a well-appointed cargo bay, a snub-fighter docking port, and a signature wrap-around bridge.",
    "Career": "Multi-Role",
    "Role": "Medium Freight / Gun Ship",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 96.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 5.25,
      "PersonalInventory": 5.08
    },
    "Crew": 1,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 386857.0,
    "ComponentsMass": 55496.0,
    "Dimensions": {
      "Length": 61.0,
      "Width": 26.0,
      "Height": 14.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "neck": 20000.0,
          "nose": 20000.0,
          "body": 20000.0,
          "tail": 20000.0
        },
        "Parts": {
          "nose_TurretHousings": 500.0,
          "wing_left": 15000.0,
          "turbine_cover_wingl_bot_front_out": 20.0,
          "turbine_cover_wingl_bot_rear_out": 20.0,
          "turbine_cover_wingl_bot_front_in": 20.0,
          "turbine_cover_wingl_bot_rear_in": 20.0,
          "turbine_cover_wingl_top_front_out": 20.0,
          "turbine_cover_wingl_top_rear_out": 20.0,
          "turbine_cover_wingl_top_front_in": 20.0,
          "turbine_cover_wingl_top_rear_in": 20.0,
          "wing_right": 15000.0,
          "turbine_cover_wingr_top_rear_in": 20.0,
          "turbine_cover_wingr_top_front_in": 20.0,
          "turbine_cover_wingr_bot_rear_in": 20.0,
          "turbine_cover_wingr_bot_front_out": 20.0,
          "turbine_cover_wingr_top_rear_out": 20.0,
          "turbine_cover_wingr_top_front_out": 20.0,
          "turbine_cover_wingr_bot_front_in": 20.0,
          "turbine_cover_wingr_bot_rear_out": 20.0,
          "nose_turret_door_bottom_left": 1.0,
          "nose_turret_door_bottom_right": 1.0,
          "nose_turret_door_top_left": 1.0,
          "nose_turret_door_top_right": 1.0,
          "hardpoint_lightgroup": 200.0,
          "misslerack_arm_body_left_arm": 1750.0,
          "misslerack_arm_body_right_arm": 1750.0,
          "misslerack_arm_tail_left_arm": 1750.0,
          "nacelle_tower_left": 1000.0,
          "nacelle_left": 15000.0,
          "nacelle_tower_right": 1000.0,
          "nacelle_right": 15000.0,
          "misslerack_arm_tail_right_arm": 1750.0,
          "nacelle_bottom_right": 15000.0,
          "turbine_cover_naceller_bot_front_in": 20.0,
          "turbine_cover_naceller_bot_rear_in": 20.0,
          "turbine_cover_naceller_bot_front_out": 20.0,
          "turbine_cover_naceller_bot_rear_out": 20.0,
          "turbine_cover_naceller_top_front_in": 20.0,
          "turbine_cover_naceller_top_rear_in": 20.0,
          "turbine_cover_naceller_top_front_out": 20.0,
          "turbine_cover_naceller_top_rear_out": 20.0,
          "nacelle_bottom_left": 15000.0,
          "turbine_cover_nacellel_bot_front_out": 20.0,
          "turbine_cover_nacellel_bot_rear_out": 20.0,
          "turbine_cover_nacellel_bot_front_in": 20.0,
          "turbine_cover_nacellel_bot_rear_in": 20.0,
          "turbine_cover_nacellel_top_front_out": 20.0,
          "turbine_cover_nacellel_top_rear_out": 20.0,
          "turbine_cover_nacellel_top_front_in": 20.0,
          "turbine_cover_nacellel_top_rear_in": 20.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_top_left": 24000.0,
          "engine_top_right": 24000.0,
          "engine_bottom_right": 24000.0,
          "engine_bottom_left": 24000.0
        },
        "Retro": {
          "retro_top_left": 50000.0,
          "retro_top_right": 50000.0,
          "retro_bottom_right": 50000.0,
          "retro_bottom_left": 50000.0
        },
        "Vtol": {
          "thruster_vtol_front_left_01": 50000.0,
          "thruster_vtol_front_left_02": 50000.0,
          "thruster_vtol_front_right_01": 50000.0,
          "thruster_vtol_front_right_02": 50000.0,
          "thruster_vtol_rear_right_01": 50000.0,
          "thruster_vtol_rear_right_02": 50000.0,
          "thruster_vtol_rear_left_01": 50000.0,
          "thruster_vtol_rear_left_02": 50000.0
        },
        "Maneuvering": {
          "thruster_bottom_front_right": 50000.0,
          "thruster_top_front_right": 50000.0,
          "thruster_top_front_left": 50000.0,
          "thruster_bottom_front_left": 50000.0,
          "thruster_center_front_left": 50000.0,
          "thruster_center_front_right": 50000.0,
          "thruster_center_back_right": 50000.0,
          "thruster_center_back_left": 50000.0,
          "thruster_top_back_left": 50000.0,
          "thruster_top_back_right": 50000.0,
          "thruster_bottom_back_right": 50000.0,
          "thruster_bottom_back_left": 50000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1000.0,
      "Pitch": 30.0,
      "Yaw": 30.0,
      "Roll": 60.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 22280000.0,
        "Retro": 11160000.0,
        "Vtol": 4880000.0,
        "Maneuvering": 13260000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.2,
        "Retro": 2.6,
        "Strafe": 2.6,
        "Up": 3.1,
        "Down": 2.6
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 205.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.5,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 66000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 4099999.9999999995,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 5.0,
        "Vtol": 10.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 2785.0,
        "Retro": 1395.0,
        "Vtol": 610.0,
        "Maneuvering": 1657.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 6824.0,
        "SCMActive": 8036.0,
        "NAV": 22304.0
      },
      "Infrared": {
        "Start": 17457.0
      },
      "CrossSection": {
        "Front": 3125.0,
        "Side": 10505.0,
        "Top": 23935.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 48800.0,
      "PilotBurstDPS": 4910.0,
      "TurretsBurstDPS": 2182.0,
      "TotalMissilesDmg": 81305.0
    },
    "Insurance": {
      "StandardClaimTime": 13.5,
      "ExpeditedClaimTime": 4.5,
      "ExpeditedCost": 6750.0
    },
    "Buy": {
      "New Deal, Lorville": 10160640.0
    }
  },
  {
    "ClassName": "RSI_Constellation_Aquila",
    "Name": "RSI Constellation Aquila",
    "Description": "Designed by RSI to traverse distant frontiers, the Constellation Aquila features a redesigned cockpit for maximum visibility, advanced sensors, and a P-52 snub craft and Ursa rover for planetary exploration. Discover for yourself why explorers the ‘verse over choose to captain the Aquila.",
    "Career": "Exploration",
    "Role": "Expedition",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 96.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 6,
      "PersonalInventory": 5.6
    },
    "Crew": 1,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 406543.0,
    "ComponentsMass": 53298.0,
    "Dimensions": {
      "Length": 61.0,
      "Width": 26.0,
      "Height": 14.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "neck": 20000.0,
          "nose": 20000.0,
          "body": 20000.0,
          "tail": 20000.0
        },
        "Parts": {
          "nose_turret_housings": 500.0,
          "wing_left": 15000.0,
          "turbine_cover_wingl_bot_front_out": 20.0,
          "turbine_cover_wingl_bot_rear_out": 20.0,
          "turbine_cover_wingl_bot_front_in": 20.0,
          "turbine_cover_wingl_bot_rear_in": 20.0,
          "turbine_cover_wingl_top_front_out": 20.0,
          "turbine_cover_wingl_top_rear_out": 20.0,
          "turbine_cover_wingl_top_front_in": 20.0,
          "turbine_cover_wingl_top_rear_in": 20.0,
          "wing_right": 15000.0,
          "turbine_cover_wingr_top_rear_in": 20.0,
          "turbine_cover_wingr_top_front_in": 20.0,
          "turbine_cover_wingr_bot_rear_in": 20.0,
          "turbine_cover_wingr_bot_front_out": 20.0,
          "turbine_cover_wingr_top_rear_out": 20.0,
          "turbine_cover_wingr_top_front_out": 20.0,
          "turbine_cover_wingr_bot_front_in": 20.0,
          "turbine_cover_wingr_bot_rear_out": 20.0,
          "nose_turret_door_bottom_left": 1.0,
          "nose_turret_door_bottom_right": 1.0,
          "nose_turret_door_top_left": 1.0,
          "nose_turret_door_top_right": 1.0,
          "hardpoint_lightgroup": 200.0,
          "misslerack_arm_body_left_arm": 1750.0,
          "misslerack_arm_body_right_arm": 1750.0,
          "misslerack_arm_tail_left_arm": 1750.0,
          "nacelle_tower_left": 1000.0,
          "nacelle_left": 15000.0,
          "nacelle_tower_right": 1000.0,
          "nacelle_right": 15000.0,
          "misslerack_arm_tail_right_arm": 1750.0,
          "nacelle_bottom_right": 15000.0,
          "turbine_cover_naceller_bot_front_in": 20.0,
          "turbine_cover_naceller_bot_rear_in": 20.0,
          "turbine_cover_naceller_bot_front_out": 20.0,
          "turbine_cover_naceller_bot_rear_out": 20.0,
          "turbine_cover_naceller_top_front_in": 20.0,
          "turbine_cover_naceller_top_rear_in": 20.0,
          "turbine_cover_naceller_top_front_out": 20.0,
          "turbine_cover_naceller_top_rear_out": 20.0,
          "nacelle_bottom_left": 15000.0,
          "turbine_cover_nacellel_bot_front_out": 20.0,
          "turbine_cover_nacellel_bot_rear_out": 20.0,
          "turbine_cover_nacellel_bot_front_in": 20.0,
          "turbine_cover_nacellel_bot_rear_in": 20.0,
          "turbine_cover_nacellel_top_front_out": 20.0,
          "turbine_cover_nacellel_top_rear_out": 20.0,
          "turbine_cover_nacellel_top_front_in": 20.0,
          "turbine_cover_nacellel_top_rear_in": 20.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_top_left": 24000.0,
          "engine_top_right": 24000.0,
          "engine_bottom_right": 24000.0,
          "engine_bottom_left": 24000.0
        },
        "Retro": {
          "retro_top_left": 50000.0,
          "retro_top_right": 50000.0,
          "retro_bottom_right": 50000.0,
          "retro_bottom_left": 50000.0
        },
        "Vtol": {
          "thruster_vtol_front_left_01": 50000.0,
          "thruster_vtol_front_left_02": 50000.0,
          "thruster_vtol_front_right_01": 50000.0,
          "thruster_vtol_front_right_02": 50000.0,
          "thruster_vtol_rear_right_01": 50000.0,
          "thruster_vtol_rear_right_02": 50000.0,
          "thruster_vtol_rear_left_01": 50000.0,
          "thruster_vtol_rear_left_02": 50000.0
        },
        "Maneuvering": {
          "thruster_bottom_front_right": 50000.0,
          "thruster_top_front_right": 50000.0,
          "thruster_top_front_left": 50000.0,
          "thruster_bottom_front_left": 50000.0,
          "thruster_center_front_left": 50000.0,
          "thruster_center_front_right": 50000.0,
          "thruster_center_back_right": 50000.0,
          "thruster_center_back_left": 50000.0,
          "thruster_top_back_left": 50000.0,
          "thruster_top_back_right": 50000.0,
          "thruster_bottom_back_right": 50000.0,
          "thruster_bottom_back_left": 50000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 146.0,
      "MaxSpeed": 988.0,
      "Pitch": 30.0,
      "Yaw": 30.0,
      "Roll": 60.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 22280000.0,
        "Retro": 11160000.0,
        "Vtol": 4880000.0,
        "Maneuvering": 13260000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 4.9,
        "Retro": 2.5,
        "Strafe": 2.5,
        "Up": 2.9,
        "Down": 2.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 205.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.5,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 104500000.0,
      "FuelIntakeRate": 100.0,
      "QuantumFuelCapacity": 5600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 5.0,
        "Vtol": 10.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 2785.0,
        "Retro": 1395.0,
        "Vtol": 610.0,
        "Maneuvering": 1657.5
      },
      "IntakeToMainFuelRatio": 3.59,
      "TimeForIntakesToFillTank": 1045000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 6524.0,
        "SCMActive": 7736.0,
        "NAV": 22005.0
      },
      "Infrared": {
        "Start": 16657.0
      },
      "CrossSection": {
        "Front": 2999.0,
        "Side": 10083.0,
        "Top": 22973.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 48800.0,
      "PilotBurstDPS": 6145.0,
      "TurretsBurstDPS": 1091.0,
      "TotalMissilesDmg": 49381.0
    },
    "Insurance": {
      "StandardClaimTime": 16.2,
      "ExpeditedClaimTime": 5.4,
      "ExpeditedCost": 9171.0
    },
    "Buy": {
      "New Deal, Lorville": 12186720.0
    }
  },
  {
    "ClassName": "RSI_Constellation_Phoenix",
    "Name": "RSI Constellation Phoenix",
    "Description": "A dedicated luxury spacecraft for the discerning star captain. The Constellation Phoenix can be operated as an organization command ship and features a luxurious redesigned interior. Includes a hidden sensor-dampened area for your most precious cargo. The Phoenix comes with a Lynx rover and a Kruger P-72 Archimedes Fighter.",
    "Career": "Multi-Role",
    "Role": "Luxury",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 80.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 5.25,
      "PersonalInventory": 5.43
    },
    "Crew": 1,
    "WeaponCrew": 2,
    "OperationsCrew": 0,
    "Mass": 383801.0,
    "ComponentsMass": 53688.0,
    "Dimensions": {
      "Length": 61.0,
      "Width": 26.0,
      "Height": 14.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "neck": 20000.0,
          "nose": 20000.0,
          "body": 20000.0,
          "tail": 20000.0
        },
        "Parts": {
          "wing_right": 15000.0,
          "turbine_cover_wingr_top_rear_in": 20.0,
          "turbine_cover_wingr_top_front_in": 20.0,
          "turbine_cover_wingr_bot_rear_in": 20.0,
          "turbine_cover_wingr_bot_front_out": 20.0,
          "turbine_cover_wingr_top_rear_out": 20.0,
          "turbine_cover_wingr_top_front_out": 20.0,
          "turbine_cover_wingr_bot_front_in": 20.0,
          "turbine_cover_wingr_bot_rear_out": 20.0,
          "wing_left": 15000.0,
          "turbine_cover_wingl_bot_front_out": 20.0,
          "turbine_cover_wingl_bot_rear_out": 20.0,
          "turbine_cover_wingl_bot_front_in": 20.0,
          "turbine_cover_wingl_bot_rear_in": 20.0,
          "turbine_cover_wingl_top_front_out": 20.0,
          "turbine_cover_wingl_top_rear_out": 20.0,
          "turbine_cover_wingl_top_front_in": 20.0,
          "turbine_cover_wingl_top_rear_in": 20.0,
          "nose_TurretHousings": 1.0,
          "nose_turret_door_bottom_left": 1.0,
          "nose_turret_door_bottom_right": 1.0,
          "nose_turret_door_top_left": 1.0,
          "nose_turret_door_top_right": 1.0,
          "misslerack_arm_body_left_arm": 1750.0,
          "misslerack_arm_body_right_arm": 1750.0,
          "nacelle_bottom_right": 15000.0,
          "turbine_cover_naceller_bot_front_in": 20.0,
          "turbine_cover_naceller_bot_rear_in": 20.0,
          "turbine_cover_naceller_bot_front_out": 20.0,
          "turbine_cover_naceller_bot_rear_out": 20.0,
          "turbine_cover_naceller_top_front_in": 20.0,
          "turbine_cover_naceller_top_rear_in": 20.0,
          "turbine_cover_naceller_top_front_out": 20.0,
          "turbine_cover_naceller_top_rear_out": 20.0,
          "nacelle_bottom_left": 15000.0,
          "turbine_cover_nacellel_bot_front_out": 20.0,
          "turbine_cover_nacellel_bot_rear_out": 20.0,
          "turbine_cover_nacellel_bot_front_in": 20.0,
          "turbine_cover_nacellel_bot_rear_in": 20.0,
          "turbine_cover_nacellel_top_front_out": 20.0,
          "turbine_cover_nacellel_top_rear_out": 20.0,
          "turbine_cover_nacellel_top_front_in": 20.0,
          "turbine_cover_nacellel_top_rear_in": 20.0,
          "misslerack_arm_tail_left_arm": 1750.0,
          "misslerack_arm_tail_right_arm": 1750.0,
          "nacelle_tower_left": 1000.0,
          "nacelle_left": 5500.0,
          "nacelle_tower_right": 1000.0,
          "nacelle_right": 5500.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_bottom_right": 24000.0,
          "engine_bottom_left": 24000.0,
          "engine_top_left": 24000.0,
          "engine_top_right": 24000.0
        },
        "Retro": {
          "retro_bottom_right": 50000.0,
          "retro_bottom_left": 50000.0,
          "retro_top_left": 50000.0,
          "retro_top_right": 50000.0
        },
        "Vtol": {
          "thruster_vtol_front_right_01": 50000.0,
          "thruster_vtol_front_right_02": 50000.0,
          "thruster_vtol_front_left_01": 50000.0,
          "thruster_vtol_front_left_02": 50000.0,
          "thruster_vtol_rear_right_01": 50000.0,
          "thruster_vtol_rear_right_02": 50000.0,
          "thruster_vtol_rear_left_01": 50000.0,
          "thruster_vtol_rear_left_02": 50000.0
        },
        "Maneuvering": {
          "thruster_bottom_front_left": 50000.0,
          "thruster_bottom_front_right": 50000.0,
          "thruster_top_front_left": 50000.0,
          "thruster_top_front_right": 50000.0,
          "thruster_center_front_right": 50000.0,
          "thruster_center_front_left": 50000.0,
          "thruster_bottom_back_right": 50000.0,
          "thruster_bottom_back_left": 50000.0,
          "thruster_center_back_right": 50000.0,
          "thruster_center_back_left": 50000.0,
          "thruster_top_back_left": 50000.0,
          "thruster_top_back_right": 50000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1000.0,
      "Pitch": 30.0,
      "Yaw": 30.0,
      "Roll": 60.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 22280000.0,
        "Retro": 11160000.0,
        "Vtol": 4880000.0,
        "Maneuvering": 13260000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.2,
        "Retro": 2.6,
        "Strafe": 2.6,
        "Up": 3.1,
        "Down": 2.6
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 205.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.5,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 66000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 4099999.9999999995,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 5.0,
        "Vtol": 10.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 2785.0,
        "Retro": 1395.0,
        "Vtol": 610.0,
        "Maneuvering": 1657.5
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 6501.0,
        "SCMActive": 7713.0,
        "NAV": 21981.0
      },
      "Infrared": {
        "Start": 17457.0
      },
      "CrossSection": {
        "Front": 3094.0,
        "Side": 10400.0,
        "Top": 23696.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 48800.0,
      "PilotBurstDPS": 4922.0,
      "TurretsBurstDPS": 2515.0,
      "TotalMissilesDmg": 31924.0
    },
    "Insurance": {
      "StandardClaimTime": 24.3,
      "ExpeditedClaimTime": 8.1,
      "ExpeditedCost": 12079.0
    },
    "Buy": {
      "New Deal, Lorville": 14817600.0
    }
  },
  {
    "ClassName": "RSI_Constellation_Taurus",
    "Name": "RSI Constellation Taurus",
    "Description": "Paired down to fully focus on hauling, the Taurus provides the most cargo space of any ship in RSI’s Constellation line-up. What it loses in versatility it more than makes up for in potential profits thanks to its tractor beams, a cargo release system for quick unloading, and a security hold reinforced with tech plating.",
    "Career": "Transporter",
    "Role": "Medium Freight",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 174.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 5.25,
      "PersonalInventory": 5.43
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 1,
    "Mass": 383801.0,
    "ComponentsMass": 55508.0,
    "Dimensions": {
      "Length": 69.0,
      "Width": 26.0,
      "Height": 14.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "neck": 20000.0,
          "nose": 20000.0,
          "body": 10000.0,
          "tail": 20000.0
        },
        "Parts": {
          "nose_TurretHousings": 500.0,
          "nose_turret_door_bottom_left": 100.0,
          "nose_turret_door_bottom_right": 100.0,
          "nose_turret_door_top_left": 100.0,
          "nose_turret_door_top_right": 100.0,
          "wing_left": 15000.0,
          "turbine_cover_wingl_bot_front_out": 20.0,
          "turbine_cover_wingl_bot_rear_out": 20.0,
          "turbine_cover_wingl_bot_front_in": 20.0,
          "turbine_cover_wingl_bot_rear_in": 20.0,
          "turbine_cover_wingl_top_front_out": 20.0,
          "turbine_cover_wingl_top_rear_out": 20.0,
          "turbine_cover_wingl_top_front_in": 20.0,
          "turbine_cover_wingl_top_rear_in": 20.0,
          "wing_right": 15000.0,
          "turbine_cover_wingr_top_rear_in": 20.0,
          "turbine_cover_wingr_top_front_in": 20.0,
          "turbine_cover_wingr_bot_rear_in": 20.0,
          "turbine_cover_wingr_bot_front_out": 20.0,
          "turbine_cover_wingr_top_rear_out": 20.0,
          "turbine_cover_wingr_top_front_out": 20.0,
          "turbine_cover_wingr_bot_front_in": 20.0,
          "turbine_cover_wingr_bot_rear_out": 20.0,
          "bottom_nacelle_rail": 1000.0,
          "Hatch_Rear": 1000.0,
          "nacelle_tower_right": 1000.0,
          "nacelle_right": 5500.0,
          "nacelle_tower_left": 1000.0,
          "nacelle_left": 5500.0,
          "nacelle_bottom_right": 6500.0,
          "turbine_cover_naceller_bot_front_in": 20.0,
          "turbine_cover_naceller_bot_rear_in": 20.0,
          "turbine_cover_naceller_bot_front_out": 20.0,
          "turbine_cover_naceller_bot_rear_out": 20.0,
          "turbine_cover_naceller_top_front_in": 20.0,
          "turbine_cover_naceller_top_rear_in": 20.0,
          "turbine_cover_naceller_top_front_out": 20.0,
          "turbine_cover_naceller_top_rear_out": 20.0,
          "nacelle_bottom_left": 6500.0,
          "turbine_cover_nacellel_bot_front_out": 20.0,
          "turbine_cover_nacellel_bot_rear_out": 20.0,
          "turbine_cover_nacellel_bot_front_in": 20.0,
          "turbine_cover_nacellel_bot_rear_in": 20.0,
          "turbine_cover_nacellel_top_front_out": 20.0,
          "turbine_cover_nacellel_top_rear_out": 20.0,
          "turbine_cover_nacellel_top_front_in": 20.0,
          "turbine_cover_nacellel_top_rear_in": 20.0,
          "hardpoint_lightgroup": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_top_right": 24000.0,
          "engine_top_left": 24000.0,
          "engine_bottom_right": 24000.0,
          "engine_bottom_left": 24000.0
        },
        "Retro": {
          "retro_top_right": 50000.0,
          "retro_top_left": 50000.0,
          "retro_bottom_right": 50000.0,
          "retro_bottom_left": 50000.0
        },
        "Vtol": {
          "thruster_vtol_front_left_01": 50000.0,
          "thruster_vtol_front_left_02": 50000.0,
          "thruster_vtol_front_right_01": 50000.0,
          "thruster_vtol_front_right_02": 50000.0,
          "thruster_vtol_rear_right_01": 50000.0,
          "thruster_vtol_rear_right_02": 50000.0,
          "thruster_vtol_rear_left_01": 50000.0,
          "thruster_vtol_rear_left_02": 50000.0
        },
        "Maneuvering": {
          "thruster_bottom_front_right": 50000.0,
          "thruster_top_front_right": 50000.0,
          "thruster_top_front_left": 50000.0,
          "thruster_bottom_front_left": 50000.0,
          "thruster_center_front_left": 50000.0,
          "thruster_center_front_right": 50000.0,
          "thruster_center_back_right": 50000.0,
          "thruster_center_back_left": 50000.0,
          "thruster_top_back_right": 50000.0,
          "thruster_top_back_left": 50000.0,
          "thruster_bottom_back_right": 50000.0,
          "thruster_bottom_back_left": 50000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1000.0,
      "Pitch": 30.0,
      "Yaw": 30.0,
      "Roll": 60.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 22280000.0,
        "Retro": 11160000.0,
        "Vtol": 4880000.0,
        "Maneuvering": 13260000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 5.2,
        "Retro": 2.6,
        "Strafe": 2.6,
        "Up": 3.1,
        "Down": 2.6
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 205.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.5,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.5,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 66000000.0,
      "FuelIntakeRate": 100.0,
      "QuantumFuelCapacity": 4099999.9999999995,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 5.0,
        "Vtol": 10.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 2785.0,
        "Retro": 1395.0,
        "Vtol": 610.0,
        "Maneuvering": 1657.5
      },
      "IntakeToMainFuelRatio": 3.59,
      "TimeForIntakesToFillTank": 660000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 17724.0,
        "SCMActive": 21176.0,
        "NAV": 33204.0
      },
      "Infrared": {
        "Start": 22737.0
      },
      "CrossSection": {
        "Front": 4903.0,
        "Side": 16484.0,
        "Top": 37558.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 8.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 56100.0,
      "PilotBurstDPS": 4910.0,
      "TurretsBurstDPS": 1091.0,
      "TotalMissilesDmg": 49381.0
    },
    "Insurance": {
      "StandardClaimTime": 17.1,
      "ExpeditedClaimTime": 5.7,
      "ExpeditedCost": 9531.0
    },
    "Buy": {
      "New Deal, Lorville": 8043840.0
    }
  },
  {
    "ClassName": "RSI_Lynx",
    "Name": "RSI Lynx",
    "Description": "RSI designed the Lynx Rover to be a vehicle capable of exploring a wide variety of terrains while still delivering a top-rated and finely tuned driving experience.",
    "Career": "Ground",
    "Role": "Transporter",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 2.1,
      "PersonalInventory": 2.46
    },
    "Crew": 2,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 11963.7,
    "ComponentsMass": 399.0,
    "Dimensions": {
      "Length": 7.75,
      "Width": 5.7,
      "Height": 3.15
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.96,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 11000.0
        },
        "Parts": {
          "wheel1": 1500.0,
          "wheel1_mudguard": 150.0,
          "wheel2": 1500.0,
          "wheel2_mudguard": 150.0,
          "wheel3": 1500.0,
          "wheel3_mudguard": 150.0,
          "wheel4": 1500.0,
          "wheel4_mudguard": 150.0,
          "wheel5": 1500.0,
          "wheel5_mudguard": 150.0,
          "wheel6": 1500.0,
          "wheel6_mudguard": 150.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 200.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 175.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1517.0,
        "SCMActive": 1966.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1155.0
      },
      "CrossSection": {
        "Front": 499.0,
        "Side": 1145.0,
        "Top": 1806.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 608.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 2.7,
      "ExpeditedClaimTime": 0.9,
      "ExpeditedCost": 1080.0
    },
    "New Vehicle": "RSI Lynx",
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "New Deal - Teasa Spaceport - Lorville": 136080.0
    }
  },
  {
    "ClassName": "RSI_Mantis",
    "Name": "RSI Mantis",
    "Description": "Stop ships dead in their tracks with RSI’s premier Quantum Enforcement ship. The Mantis features a tailor-made Quantum Enforcement Device from Wei-Tek, capable of ripping ships out of QT with its Quantum Snare and preventing hasty escapes with its Quantum Dampener.",
    "Career": "Combat",
    "Role": "Interdiction",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 0.71
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 224923.0,
    "ComponentsMass": 5728.0,
    "Dimensions": {
      "Length": 30.0,
      "Width": 17.0,
      "Height": 8.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 0.95,
        "Distortion": 0.95
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body_main": 2626.0
        },
        "Parts": {
          "nose_wingmount_left": 650.0,
          "bottom_hull": 2600.0,
          "nose_wingmount_right": 150.0,
          "rear_frame_interdiction": 200.0,
          "tail": 2500.0,
          "top_cover_mid": 50.0,
          "interdiction_top_cover_right": 50.0,
          "interdiction_top_cover_left": 50.0,
          "interdiction_bottom_cover_left": 50.0,
          "interdiction_bottom_cover_right": 50.0,
          "wing_left": 1800.0,
          "tail_wing_left": 4000.0,
          "engines_base_left": 2800.0,
          "engine_left": 2800.0,
          "wing_right": 1800.0,
          "tail_wing_right": 4000.0,
          "engines_base_right": 2800.0,
          "engine_right": 2800.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_left": 7500.0,
          "thruster_main_right": 7500.0
        },
        "Retro": {
          "thruster_retro_left": 6950.0,
          "thruster_retro_right": 6950.0
        },
        "Maneuvering": {
          "thruster_mav_left_front_top": 6500.0,
          "thruster_mav_right_front_top": 6500.0,
          "thruster_mav_left_rear_top": 6500.0,
          "thruster_mav_left_rear_bot": 6500.0,
          "thruster_mav_left_front_bot": 6500.0,
          "thruster_mav_right_rear_top": 6500.0,
          "thruster_mav_right_rear_bot": 6500.0,
          "thruster_mav_right_front_bot": 6500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 236.0,
      "MaxSpeed": 1393.0,
      "Pitch": 50.0,
      "Yaw": 42.0,
      "Roll": 160.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 33580000.0,
        "Retro": 7940000.0,
        "Vtol": 0.0,
        "Maneuvering": 20320000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 15.0,
        "Retro": 3.5,
        "Strafe": 4.5,
        "Up": 6.0,
        "Down": 3.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 605.0,
          "BoostSpeedBackward": 257.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.4,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.67,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.4,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.8,
        "Y_AccelMultiplicator": 1.8,
        "Z_AccelMultiplicator": 1.8
      }
    },
    "FuelManagement": {
      "FuelCapacity": 31612500.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 4197.5,
        "Retro": 992.5,
        "Vtol": 0.0,
        "Maneuvering": 2540.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 8723.0,
        "SCMActive": 13246.0,
        "NAV": 16256.0
      },
      "Infrared": {
        "Start": 7175.0
      },
      "CrossSection": {
        "Front": 3126.0,
        "Side": 6773.0,
        "Top": 12157.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 923.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 9558.0
    },
    "Insurance": {
      "StandardClaimTime": 6.48,
      "ExpeditedClaimTime": 2.16,
      "ExpeditedCost": 3374.0
    },
    "Buy": {
      "New Deal, Lorville": 3402000.0
    }
  },
  {
    "ClassName": "RSI_Polaris",
    "Name": "RSI Polaris",
    "Description": "The Polaris is a nimble corvette-class capital ship that packs a powerful punch with a full armament of turrets and torpedoes. Intended for use as both a naval patrol ship and to serve as the flagship of militia operations, Polaris has the capacity to perform search and rescue operations, light strike missions and general security patrols. The Polaris includes the facilities to repair, rearm and refuel a single fighter, light bomber or support ship.",
    "Career": "Militia / Patrol",
    "Role": "Capital Ship",
    "Size": 6,
    "Cargo": {
      "CargoGrid": 576.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 25.6,
      "PersonalInventory": 432.0
    },
    "Crew": 12,
    "WeaponCrew": 9,
    "OperationsCrew": 0,
    "Mass": 10427000.0,
    "ComponentsMass": 662072.0,
    "Dimensions": {
      "Length": 166.0,
      "Width": 82.0,
      "Height": 46.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.8,
        "Infrared": 0.8,
        "CrossSection": 0.8
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "M_Body": 918000.0
        },
        "Parts": {
          "Mesh_DET_Rear_Aileron_Tip_Top_Left": 1000.0,
          "Mesh_DET_Rear_Aileron_Fin_Top_Left": 500.0,
          "Mesh_DET_Rear_Aileron_Tip_Bot_Left": 1000.0,
          "Mesh_DET_Rear_Aileron_Fin_Bot_Left": 500.0,
          "Mesh_DET_Rear_Aileron_Tip_Top_Right": 1000.0,
          "Mesh_DET_Rear_Aileron_Fin_Top_Right": 500.0,
          "Mesh_DET_Rear_Aileron_Tip_Bot_Right": 1000.0,
          "Mesh_DET_Rear_Aileron_Fin_Bot_Right": 500.0,
          "M_DET_Body_Underside_Plate": 10000.0,
          "M_DET_Body_AirbrakePanel_Top_Right": 1000.0,
          "M_DET_Body_AirbrakePanel_Top_Left": 1000.0,
          "M_DET_Body_AirbrakePanel_Bot_Right": 10000.0,
          "M_DET_Body_AirbrakePanel_Bot_Left": 10000.0,
          "Mesh_DET_Airbrake_Tip_Bot_Left": 1000.0,
          "Mesh_DET_Airbrake_Tip_Bot_Right": 1000.0,
          "Mesh_DET_Airbrake_Tip_Top_Left": 1000.0,
          "Mesh_DET_Airbrake_Tip_Top_Right": 1000.0,
          "Body_LG_Front_Hatch_rear_L_left": 200.0,
          "Body_LG_Front_Hatch_rear_L_right": 200.0,
          "Body_LG_Front_Hatch_rear_R_left": 200.0,
          "M_DET_Turret_Hatch_Bottom_Left": 5000.0,
          "M_DET_Turret_Hatch_Bottom_Right": 5000.0,
          "M_DET_Turret_Hatch_Top_Left": 5000.0,
          "M_DET_Turret_Hatch_Top_Right": 5000.0,
          "M_DET_Turret_Hatch_Slide_Bottom_Left": 2500.0,
          "M_DET_Turret_Hatch_Slide_Bottom_Right": 2500.0,
          "M_DET_Turret_Hatch_Slide_Top_Left": 3000.0,
          "M_DET_Turret_Hatch_Slide_Top_Right": 3000.0,
          "M_DET_Body_Side_Panel_Left": 1000.0,
          "M_DET_Body_Side_Panel_Right": 1000.0,
          "M_Neck_Rear": 720000.0,
          "M_DET_Neck_Rear_Vent_Right": 2500.0,
          "M_DET_Neck_Rear_Vent_Left": 2500.0,
          "M_Neck_Front": 440000.0,
          "M_DET_Nose_Top_Cover_Panel": 2500.0,
          "M_DET_Nose_Side_Detail_Right": 5000.0,
          "M_DET_Nose_Side_Detail_Left": 5000.0,
          "M_DET_Neck_Front_Topside_Cover_Right": 1000.0,
          "M_DET_Neck_Front_Topside_Cover_Left": 1000.0,
          "M_DET_Neck_Front_Side_Plate_Right": 1000.0,
          "M_DET_Neck_Front_Side_Plate_Left": 1000.0,
          "M_DET_Neck_Front_Hatch_Static": 1000.0,
          "M_DET_EscPod_04_Right": 500.0,
          "M_DET_EscPod_04_Left": 500.0,
          "M_DET_EscPod_03_Right": 500.0,
          "M_DET_EscPod_03_Left": 500.0,
          "M_DET_EscPod_02_Right": 500.0,
          "M_DET_EscPod_02_Left": 500.0,
          "M_DET_EscPod_01_Right": 500.0,
          "M_DET_EscPod_01_Left": 500.0,
          "M_DET_Neck_Front_Aileron_Tip_Right": 1000.0,
          "M_DET_Neck_Front_Aileron_Rotator_Right": 500.0,
          "M_DET_Neck_Front_Aileron_Tip_Left": 1000.0,
          "M_DET_Neck_Front_Aileron_Rotator_Left": 500.0,
          "M_Nose": 220000.0,
          "M_Rear": 1200000.0,
          "M_DET_Rear_Mesh_Thruster_Base_Top_Right": 45000.0,
          "M_DET_Rear_Mesh_Thruster_Cap_Top_Right": 10000.0,
          "M_DET_Rear_Mesh_Thruster_Fin_Tip_Top_Right": 1000.0,
          "M_DET_Rear_Mesh_Thruster_Base_Top_Left": 45000.0,
          "Rear_DET_Mesh_Thruster_Cap_Top_Left": 10000.0,
          "M_DET_Rear_Mesh_Thruster_Fin_Tip_Top_Left": 1000.0,
          "M_DET_Rear_Mesh_Thruster_Base_Bot_Right": 45000.0,
          "M_DET_Rear_Mesh_Thruster_Cap_Bot_Right": 10000.0,
          "M_DET_Rear_Mesh_Thruster_Fin_Tip_Bot_Right": 1000.0,
          "M_DET_Rear_Mesh_Thruster_Base_Bot_Left": 45000.0,
          "M_DET_Rear_Mesh_Thruster_Cap_Bot_Left": 10000.0,
          "M_DET_Rear_Mesh_Thruster_Fin_Tip_Bot_Left": 1000.0,
          "M_DET_Mesh_Thruster_Housing_Middle_Left": 60000.0,
          "M_DET_Mesh_Thruster_Housing_Middle_Right": 60000.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_right_top": 10000.0,
          "thruster_main_left_top": 10000.0,
          "thruster_main_right_bottom": 10000.0,
          "thruster_main_left_bottom": 10000.0,
          "thruster_main_left_centre": 25000.0,
          "thruster_main_right_centre": 25000.0
        },
        "Retro": {
          "retro_top_right": 25000.0,
          "retro_top_left": 25000.0,
          "retro_bottom_right": 15000.0,
          "retro_bottom_left": 15000.0,
          "thruster_rear_retro_right_top": 35000.0,
          "thruster_retro_rear_left_top": 35000.0,
          "thruster_retro_rear_right_bottom": 35000.0,
          "thruster_retro_rear_left_bottom": 35000.0,
          "thruster_retro_rear_middle_left": 25000.0,
          "thruster_retro_rear_middle_right": 25000.0
        },
        "Vtol": {
          "vtol_left": 3000.0,
          "vtol_right": 3000.0,
          "vtol_front": 3000.0
        },
        "Maneuvering": {
          "mav_mid_left_top": 3000.0,
          "mav_mid_left_side": 3000.0,
          "mav_mid_left_bottom": 3000.0,
          "mav_mid_right_top": 3000.0,
          "mav_mid_right_side": 3000.0,
          "mav_mid_right_bottom": 3000.0,
          "mav_front_right_top": 3000.0,
          "mav_front_right_side": 3000.0,
          "mav_front_right_bottom": 3000.0,
          "mav_front_left_top": 3000.0,
          "mav_front_left_side": 3000.0,
          "mav_front_left_bottom": 3000.0,
          "mav_rear_left_top": 3000.0,
          "mav_rear_left_side": 3000.0,
          "mav_rear_left_bottom": 3000.0,
          "mav_rear_right_top": 3000.0,
          "mav_rear_right_side": 3000.0,
          "mav_rear_right_bottom": 3000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 145.0,
      "MaxSpeed": 940.0,
      "Pitch": 15.0,
      "Yaw": 15.0,
      "Roll": 25.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 328455840.0,
        "Retro": 164737754.0,
        "Vtol": 27000000.0,
        "Maneuvering": 336106080.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 3.0,
        "Retro": 1.5,
        "Strafe": 1.5,
        "Up": 2.2,
        "Down": 1.7
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 7.0,
        "ScmMode": {
          "BoostSpeedForward": 250.0,
          "BoostSpeedBackward": 155.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 1.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.2,
            "Y": 1.6,
            "Z": 1.4
          },
          "NegativeAxis": {
            "X": 1.2,
            "Y": 1.2,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.3,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.3,
          "Yaw": 1.2,
          "Roll": 1.4
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.3,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 1100000000.0,
      "FuelIntakeRate": 15.0,
      "QuantumFuelCapacity": 12600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 7.5,
        "Retro": 12.5,
        "Vtol": 3.75,
        "Maneuvering": 22.5
      },
      "FuelUsagePerSecond": {
        "Main": 41056.98,
        "Retro": 20592.219,
        "Vtol": 3375.0,
        "Maneuvering": 42013.26
      },
      "IntakeToMainFuelRatio": 0.04,
      "TimeForIntakesToFillTank": 73333333.33
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 7579.0,
        "SCMActive": 11513.0,
        "NAV": 19940.0
      },
      "Infrared": {
        "Start": 21871.0
      },
      "CrossSection": {
        "Front": 0.0,
        "Side": 0.0,
        "Top": 0.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 10.0
      },
      "Modifiers": {
        "PowerRatioMultiplier": 2.3,
        "MaxAmmoLoadMultiplier": 1.0,
        "MaxRegenPerSecMultiplier": 1.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 908000.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 19438.0,
      "TotalMissilesDmg": 21068967.0
    },
    "Insurance": {
      "StandardClaimTime": 75.83,
      "ExpeditedClaimTime": 18.96,
      "ExpeditedCost": 44030.0
    },
    "New Ship": "RSI Polaris",
    "Dimensions2": {
      "Length": 166.0,
      "Width": 82.0,
      "Height": 35.0
    }
  },
  {
    "ClassName": "RSI_Scorpius",
    "Name": "RSI Scorpius",
    "Description": "With an adaptable bi-wing configuration and revolutionary rail-mounted remote turret, the Scorpius offers unprecedented fire coverage, allowing for both defensive and assault-minded applications.",
    "Career": "Combat",
    "Role": "Heavy Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 3.0,
      "PersonalInventory": 1.29
    },
    "Crew": 2,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 91461.54,
    "ComponentsMass": 12446.0,
    "Dimensions": {
      "Length": 24.0,
      "Width": 32.0,
      "Height": 13.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 6500.0
        },
        "Parts": {
          "Tail": 6500.0,
          "Wing_Mechanism_Top_Right": 3500.0,
          "Wing_Rotator_Top_Right": 2200.0,
          "Wing_Rotator_Top_Tip_Right": 1500.0,
          "Wing_Retractor_Top_Right": 300.0,
          "Wing_Mechanism_Bottom_Right": 3500.0,
          "Wing_Retractor_Bottom_Right": 300.0,
          "Wing_Rotator_Bottom_Right": 2200.0,
          "Wing_Rotator_Bottom_Tip_Right": 1500.0,
          "Wing_Mechanism_Bottom_Left": 3500.0,
          "Wing_Retractor_Bottom_Left": 300.0,
          "Wing_Rotator_Bottom_Left": 2200.0,
          "Wing_Rotator_Bottom_Tip_Left": 1500.0,
          "Wing_Mechanism_Top_Left": 3500.0,
          "Wing_Retractor_Top_Left": 300.0,
          "Wing_Rotator_Top_Left": 2200.0,
          "Wing_Rotator_Top_Tip_Left": 1500.0,
          "debris_turret": 500.0,
          "Canopy_Front": 80.0,
          "Canopy_Rear": 80.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_top_right": 8000.0,
          "thruster_main_bottom_right": 8000.0,
          "thruster_main_bottom_left": 8000.0,
          "thruster_main_top_left": 8000.0
        },
        "Retro": {
          "thruster_retro_right": 7000.0,
          "thruster_retro_left": 7000.0
        },
        "Maneuvering": {
          "thruster_rear_top_right": 5500.0,
          "thruster_rear_bottom_right": 5500.0,
          "thruster_rear_bottom_left": 5500.0,
          "thruster_rear_top_left": 5500.0,
          "thruster_front_top_right": 5500.0,
          "thruster_front_top_left": 5500.0,
          "thruster_front_bottom_right": 5500.0,
          "thruster_front_bottom_left": 5500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 230.0,
      "MaxSpeed": 1385.0,
      "Pitch": 40.0,
      "Yaw": 30.0,
      "Roll": 145.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 15200000.0,
        "Retro": 4000000.0,
        "Vtol": 0.0,
        "Maneuvering": 10000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 14.7,
        "Retro": 3.8,
        "Strafe": 5.0,
        "Up": 4.8,
        "Down": 3.4,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 590.0,
          "BoostSpeedBackward": 235.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.6,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.1,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 13500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 1900.0,
        "Retro": 500.0,
        "Vtol": 0.0,
        "Maneuvering": 1250.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5837.0,
        "SCMActive": 7478.0,
        "NAV": 13370.0
      },
      "Infrared": {
        "Start": 8166.0
      },
      "CrossSection": {
        "Front": 2990.0,
        "Side": 6645.0,
        "Top": 13591.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4740.0,
      "PilotBurstDPS": 2182.0,
      "TurretsBurstDPS": 2182.0,
      "TotalMissilesDmg": 26724.0
    },
    "Insurance": {
      "StandardClaimTime": 7.59375,
      "ExpeditedClaimTime": 2.53125,
      "ExpeditedCost": 3800.0
    },
    "Dimensions2": {
      "Length": 30.0,
      "Width": 13.2,
      "Height": 6.1
    },
    "Buy": {
      "New Deal, Lorville": 5443200.0
    }
  },
  {
    "ClassName": "RSI_Scorpius_Antares",
    "Name": "RSI Scorpius Antares",
    "Description": "RSI has updated the signature Scorpius adaptable bi-wing configuration and added a bespoke Quantum Dampener and EMP Device exclusively designed by their in-house team to create the powerful Scorpius Antares. Built with stopping power in mind, the Scorpius Antares is engineered to bring any chase to a quick finish.",
    "Career": "Combat",
    "Role": "Heavy Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 3.0,
      "PersonalInventory": 1.29
    },
    "Crew": 2,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 91461.54,
    "ComponentsMass": 15596.0,
    "Dimensions": {
      "Length": 24.0,
      "Width": 32.0,
      "Height": 13.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 6500.0
        },
        "Parts": {
          "Tail": 6500.0,
          "Wing_Mechanism_Top_Right": 3500.0,
          "Wing_Rotator_Top_Right": 2200.0,
          "Wing_Rotator_Top_Tip_Right": 1500.0,
          "Wing_Retractor_Top_Right": 300.0,
          "Wing_Mechanism_Bottom_Right": 3500.0,
          "Wing_Retractor_Bottom_Right": 300.0,
          "Wing_Rotator_Bottom_Right": 2200.0,
          "Wing_Rotator_Bottom_Tip_Right": 1500.0,
          "Wing_Mechanism_Bottom_Left": 3500.0,
          "Wing_Retractor_Bottom_Left": 300.0,
          "Wing_Rotator_Bottom_Left": 2200.0,
          "Wing_Rotator_Bottom_Tip_Left": 1500.0,
          "Wing_Mechanism_Top_Left": 3500.0,
          "Wing_Retractor_Top_Left": 300.0,
          "Wing_Rotator_Top_Left": 2200.0,
          "Wing_Rotator_Top_Tip_Left": 1500.0,
          "debris_turret": 500.0,
          "Canopy_Front": 80.0,
          "Canopy_Rear": 80.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_top_right": 8000.0,
          "thruster_main_bottom_right": 8000.0,
          "thruster_main_bottom_left": 8000.0,
          "thruster_main_top_left": 8000.0
        },
        "Retro": {
          "thruster_retro_right": 7000.0,
          "thruster_retro_left": 7000.0
        },
        "Maneuvering": {
          "thruster_rear_top_right": 5500.0,
          "thruster_rear_bottom_right": 5500.0,
          "thruster_rear_bottom_left": 5500.0,
          "thruster_rear_top_left": 5500.0,
          "thruster_front_top_right": 5500.0,
          "thruster_front_top_left": 5500.0,
          "thruster_front_bottom_right": 5500.0,
          "thruster_front_bottom_left": 5500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 230.0,
      "MaxSpeed": 1385.0,
      "Pitch": 40.0,
      "Yaw": 30.0,
      "Roll": 145.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 15200000.0,
        "Retro": 4000000.0,
        "Vtol": 0.0,
        "Maneuvering": 10000000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 14.3,
        "Retro": 3.7,
        "Strafe": 4.8,
        "Up": 4.7,
        "Down": 3.3,
        "CheckDate": "2025-03-08"
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 590.0,
          "BoostSpeedBackward": 235.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.65,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.4
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 0.75,
        "CapacitorRegenDelay": 0.6,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.1,
        "Y_AccelMultiplicator": 1.2,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 13500000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 1900.0,
        "Retro": 500.0,
        "Vtol": 0.0,
        "Maneuvering": 1250.0
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 9933.0,
        "SCMActive": 15613.0,
        "NAV": 17466.0
      },
      "Infrared": {
        "Start": 7881.0
      },
      "CrossSection": {
        "Front": 2991.0,
        "Side": 6647.0,
        "Top": 13597.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4740.0,
      "PilotBurstDPS": 2182.0,
      "TurretsBurstDPS": 0.0,
      "TotalEMPDmg": 3300.0,
      "TotalMissilesDmg": 26724.0
    },
    "Insurance": {
      "StandardClaimTime": 7.59375,
      "ExpeditedClaimTime": 2.53125,
      "ExpeditedCost": 3800.0
    },
    "Dimensions2": {
      "Length": 30.0,
      "Width": 13.2,
      "Height": 6.1
    },
    "Buy": {
      "New Deal, Lorville": 5528517.0
    }
  },
  {
    "ClassName": "RSI_Ursa_Medivac",
    "Name": "RSI Ursa Medivac",
    "Description": "Even in the most remote of planetside destinations, there are people who could use a helping hand. Designed by RSI to cross even the most rugged terrain, the Ursa Medivac features a Tier 3 Medical Bed ideal for offering aid wherever its needed most.",
    "Career": "Ground",
    "Role": "Support",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 2.4,
      "PersonalInventory": 2.46
    },
    "Crew": 2,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 14258.7,
    "ComponentsMass": 399.0,
    "Dimensions": {
      "Length": 7.75,
      "Width": 5.7,
      "Height": 3.15
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 1.0,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 14500.0
        },
        "Parts": {
          "wheel1": 1500.0,
          "wheel1_center": 150.0,
          "wheel1_mudguard": 150.0,
          "wheel2": 1500.0,
          "wheel2_center": 150.0,
          "wheel2_mudguard": 150.0,
          "wheel3": 1500.0,
          "wheel3_mudguard": 150.0,
          "wheel4": 1500.0,
          "wheel4_mudguard": 150.0,
          "wheel5": 1500.0,
          "wheel5_mudguard": 150.0,
          "wheel6": 1500.0,
          "wheel6_mudguard": 150.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 200.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 175.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 17.0,
        "SCMActive": 466.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1867.0
      },
      "CrossSection": {
        "Front": 1787.0,
        "Side": 1520.0,
        "Top": 593.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 2.53,
      "ExpeditedClaimTime": 0.84,
      "ExpeditedCost": 1015.0
    },
    "New Vehicle": "RSI Ursa Medivac",
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "New Deal, Lorville": 137200.0
    }
  },
  {
    "ClassName": "RSI_Ursa_Rover",
    "Name": "RSI Ursa",
    "Description": "Built by RSI specifically for the planetside explorer, the Ursa Rover offers civilians military-grade all-terrain capabilities and stands as the rugged standard in ground-based scouting, mapping and discovery applications.",
    "Career": "Ground",
    "Role": "Ground",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.2,
      "PersonalInventory": 2.46
    },
    "Crew": 2,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 13563.7,
    "ComponentsMass": 399.0,
    "Dimensions": {
      "Length": 7.75,
      "Width": 5.7,
      "Height": 3.15
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 1.0,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Body": 13000.0
        },
        "Parts": {
          "wheel1": 1500.0,
          "wheel1_center": 150.0,
          "wheel1_mudguard": 150.0,
          "wheel2": 1500.0,
          "wheel2_center": 150.0,
          "wheel2_mudguard": 150.0,
          "wheel3": 1500.0,
          "wheel3_mudguard": 150.0,
          "wheel4": 1500.0,
          "wheel4_mudguard": 150.0,
          "wheel5": 1500.0,
          "wheel5_mudguard": 150.0,
          "wheel6": 1500.0,
          "wheel6_mudguard": 150.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 200.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 175.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 17.0,
        "SCMActive": 466.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1867.0
      },
      "CrossSection": {
        "Front": 1787.0,
        "Side": 1520.0,
        "Top": 593.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 2.53,
      "ExpeditedClaimTime": 0.84,
      "ExpeditedCost": 1015.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "New Deal, Lorville": 120186.0
    }
  },
  {
    "ClassName": "RSI_Zeus_CL",
    "Name": "RSI Zeus CL",
    "Description": "Ready to ferry a whole new generation of travelers across the universe, Roberts Space Industries is proud to introduce a starship eight centuries in the making - the all-new Zeus Mk II spacecraft. Paying homage to the classic design that launched Humanity to the stars in 2140, the Zeus Mk II has been updated to exceed modern standards while retaining the heart of this beloved spacefaring icon.  With a focus on commerce, the Zeus Mk II CL edition features additional cargo space and a tractor beam ideal for handling large volumes of cargo.",
    "Career": "Transporter",
    "Role": "Medium Freight",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 128.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 3.6,
      "PersonalInventory": 3.68
    },
    "Crew": 3,
    "WeaponCrew": 1,
    "OperationsCrew": 1,
    "Mass": 276600.0,
    "ComponentsMass": 27657.6,
    "Dimensions": {
      "Length": 45.7,
      "Width": 34.3,
      "Height": 7.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 15000.0
        },
        "Parts": {
          "nose": 9000.0,
          "bar_left_debris": 800.0,
          "wing_top_left_debris": 2000.0,
          "wing_top_right_debris": 2000.0,
          "wing_bottom_left_debris": 1200.0,
          "wing_bottom_right_debris": 1200.0,
          "bar_right_debris": 800.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_bottom_left": 14350.0,
          "thruster_main_bottom_right": 14350.0,
          "thruster_main_top_left": 14350.0,
          "thruster_main_top_right": 14350.0
        },
        "Retro": {
          "thruster_retro_left": 15250.0,
          "thruster_retro_right": 15250.0
        },
        "Vtol": {
          "thruster_rear_right_vtol": 16500.0,
          "thruster_rear_left_vtol": 16500.0,
          "thruster_front_vtol": 16500.0
        },
        "Maneuvering": {
          "thruster_rear_top_left_cl": 14350.0,
          "thruster_rear_top_right_cl": 14350.0,
          "thruster_rear_side_left": 14350.0,
          "thruster_rear_side_right": 14350.0,
          "thruster_front_bottom_left": 14350.0,
          "thruster_front_bottom_right": 14350.0,
          "thruster_front_side_left": 14350.0,
          "thruster_front_side_right": 14350.0,
          "thruster_front_top_left": 14350.0,
          "thruster_front_top_right": 14350.0,
          "thruster_rear_bottom_left": 14350.0,
          "thruster_rear_bottom_right": 14350.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1000.0,
      "Pitch": 31.0,
      "Yaw": 31.0,
      "Roll": 105.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 23400000.0,
        "Retro": 7800000.0,
        "Vtol": 5400000.0,
        "Maneuvering": 30400000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 7.9,
        "Retro": 2.5,
        "Strafe": 3.5,
        "Up": 2.7,
        "Down": 3.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 210.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.7,
        "RampDown": 0.5,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.25,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 66500000.0,
      "FuelIntakeRate": 30.0,
      "QuantumFuelCapacity": 1800000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 3.75,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 2925.0,
        "Retro": 975.0,
        "Vtol": 675.0,
        "Maneuvering": 3800.0
      },
      "IntakeToMainFuelRatio": 1.03,
      "TimeForIntakesToFillTank": 2216666.67
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 10190.0,
        "SCMActive": 13845.0,
        "NAV": 25670.0
      },
      "Infrared": {
        "Start": 13386.0
      },
      "CrossSection": {
        "Front": 2000.0,
        "Side": 8000.0,
        "Top": 10000.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 15300.0,
      "PilotBurstDPS": 1639.0,
      "TurretsBurstDPS": 1091.0,
      "TotalMissilesDmg": 19204.0
    },
    "Insurance": {
      "StandardClaimTime": 10.67,
      "ExpeditedClaimTime": 2.67,
      "ExpeditedCost": 4900.0
    },
    "New Ship": "RSI Zeus CL",
    "Dimensions2": {
      "Length": 45.7,
      "Width": 26.3,
      "Height": 7.0
    },
    "Buy": {
      "New Deal - Teasa Spaceport - Lorville": 6804000.0
    }
  },
  {
    "ClassName": "RSI_Zeus_ES",
    "Name": "RSI Zeus ES",
    "Description": "Ready to ferry a whole new generation of travelers across the universe, Roberts Space Industries is proud to introduce a starship eight centuries in the making - the all-new Zeus Mk II spacecraft. Paying homage to the classic design that launched Humanity to the stars in 2140, the Zeus Mk II has been updated to exceed modern standards while retaining the heart of this beloved spacefaring icon.  With a focus on exploration, the Zeus Mk II ES edition features a robust radar package for finding new discoveries, and enhanced weaponry and shielding to help bring them back home.",
    "Career": "Exploration",
    "Role": "Expedition",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 32.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 4.05,
      "PersonalInventory": 3.81
    },
    "Crew": 3,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 276600.0,
    "ComponentsMass": 21779.6,
    "Dimensions": {
      "Length": 45.7,
      "Width": 34.3,
      "Height": 7.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.47,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.1,
        "Infrared": 1.1,
        "CrossSection": 1.1
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 15000.0
        },
        "Parts": {
          "nose": 9000.0,
          "bar_left_debris": 800.0,
          "wing_top_left_debris": 2000.0,
          "wing_top_right_debris": 2000.0,
          "wing_bottom_left_debris": 1200.0,
          "wing_bottom_right_debris": 1200.0,
          "bar_right_debris": 800.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "thruster_main_bottom_left": 14350.0,
          "thruster_main_bottom_right": 14350.0,
          "thruster_main_top_left": 14350.0,
          "thruster_main_top_right": 14350.0
        },
        "Retro": {
          "thruster_retro_left": 15250.0,
          "thruster_retro_right": 15250.0
        },
        "Vtol": {
          "thruster_rear_right_vtol": 16500.0,
          "thruster_rear_left_vtol": 16500.0,
          "thruster_front_vtol": 16500.0
        },
        "Maneuvering": {
          "thruster_rear_top_left": 14350.0,
          "thruster_rear_top_right": 14350.0,
          "thruster_rear_side_left": 14350.0,
          "thruster_rear_side_right": 14350.0,
          "thruster_front_bottom_left": 14350.0,
          "thruster_front_bottom_right": 14350.0,
          "thruster_front_side_left": 14350.0,
          "thruster_front_side_right": 14350.0,
          "thruster_front_top_left": 14350.0,
          "thruster_front_top_right": 14350.0,
          "thruster_rear_bottom_left": 14350.0,
          "thruster_rear_bottom_right": 14350.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 200.0,
      "MaxSpeed": 1050.0,
      "Pitch": 32.5,
      "Yaw": 32.5,
      "Roll": 110.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 25060000.0,
        "Retro": 7800000.0,
        "Vtol": 3600000.0,
        "Maneuvering": 32400000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 8.3,
        "Retro": 2.5,
        "Strafe": 3.5,
        "Up": 3.0,
        "Down": 3.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 6.0,
        "ScmMode": {
          "BoostSpeedForward": 400.0,
          "BoostSpeedBackward": 210.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.7,
        "RampDown": 0.5,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.3,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.25,
            "Z": 1.3
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.9,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 93100000.0,
      "FuelIntakeRate": 30.0,
      "QuantumFuelCapacity": 2600000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 3.75,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 3132.5,
        "Retro": 975.0,
        "Vtol": 450.0,
        "Maneuvering": 4050.0
      },
      "IntakeToMainFuelRatio": 0.96,
      "TimeForIntakesToFillTank": 3103333.33
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 14563.0,
        "SCMActive": 19924.0,
        "NAV": 31610.0
      },
      "Infrared": {
        "Start": 15094.0
      },
      "CrossSection": {
        "Front": 2200.0,
        "Side": 8800.0,
        "Top": 11000.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 17720.0,
      "PilotBurstDPS": 1639.0,
      "TurretsBurstDPS": 1091.0,
      "TotalMissilesDmg": 19204.0
    },
    "Insurance": {
      "StandardClaimTime": 8.67,
      "ExpeditedClaimTime": 2.17,
      "ExpeditedCost": 3710.0
    },
    "New Ship": "RSI Zeus ES",
    "Dimensions2": {
      "Length": 45.7,
      "Width": 26.3,
      "Height": 7.0
    },
    "Buy": {
      "New Deal - Teasa Spaceport - Lorville": 4422600.0
    }
  },
  {
    "ClassName": "TMBL_Cyclone",
    "Name": "Tumbril Cyclone",
    "Description": "With a potent combination of speed, maneuverability, and rugged durability, the Cyclone is a perfect choice for local deliveries and transport between planetside homesteads and outposts.",
    "Career": "Ground",
    "Role": "Transporter",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.8,
      "PersonalInventory": 2.33
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 3564.0,
    "ComponentsMass": 169.0,
    "Dimensions": {
      "Length": 6.0,
      "Width": 4,
      "Height": 2.5
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2000.0
        },
        "Parts": {
          "rear_armor_plating_left": 50.0,
          "mud_flap_bl": 25.0,
          "mud_flap_fl": 25.0,
          "mud_flap_fr": 25.0,
          "rear_armor_plating_right": 50.0,
          "mud_flap_br": 25.0,
          "hood": 1.0,
          "wheelBL": 800.0,
          "wheelBR": 800.0,
          "wheelFL": 800.0,
          "wheelFR": 800.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 200.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 175.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1517.0,
        "SCMActive": 1966.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1155.0
      },
      "CrossSection": {
        "Front": 843.0,
        "Side": 1647.0,
        "Top": 2011.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 2.03,
      "ExpeditedClaimTime": 0.68,
      "ExpeditedCost": 810.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "New Deal, Lorville": 110170.0
    }
  },
  {
    "ClassName": "TMBL_Cyclone_AA",
    "Name": "Tumbril Cyclone AA",
    "Description": "A battlefield equalizer, the Cyclone AA comes equipped with a surface-to-air missile and countermeasure package to provide cover for ground troops against airborne targets.",
    "Career": "Ground",
    "Role": "Support",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.8,
      "PersonalInventory": 1.72
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 3564.0,
    "ComponentsMass": 791.0,
    "Dimensions": {
      "Length": 6.0,
      "Width": 4,
      "Height": 2.5
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2000.0
        },
        "Parts": {
          "rear_armor_plating_left": 50.0,
          "mud_flap_bl": 25.0,
          "mud_flap_fl": 25.0,
          "mud_flap_fr": 25.0,
          "rear_armor_plating_right": 50.0,
          "mud_flap_br": 25.0,
          "hood": 1.0,
          "wheelBL": 800.0,
          "wheelBR": 800.0,
          "wheelFL": 800.0,
          "wheelFR": 800.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 200.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 175.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 3055.0,
        "SCMActive": 4537.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1855.0
      },
      "CrossSection": {
        "Front": 726.0,
        "Side": 1475.0,
        "Top": 1999.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalEMPDmg": 1000.0,
      "TotalMissilesDmg": 4801.0
    },
    "Insurance": {
      "StandardClaimTime": 2.03,
      "ExpeditedClaimTime": 0.68,
      "ExpeditedCost": 1345.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "New Deal, Lorville": 160247.0
    }
  },
  {
    "ClassName": "TMBL_Cyclone_MT",
    "Name": "Tumbril Cyclone MT",
    "Description": "Following the success of the initial release of the Cyclone, Tumbril has taken your feedback and expanded their popular line of tactical vehicles with the all new Cyclone MT. Outfitted with a combination gun and missile turret, this module offers increased combat options in the field.",
    "Career": "Ground",
    "Role": "Combat",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.8,
      "PersonalInventory": 1.72
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 3564.0,
    "ComponentsMass": 1168.0,
    "Dimensions": {
      "Length": 6.0,
      "Width": 4,
      "Height": 2.5
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.9,
        "Energy": 0.9,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2000.0
        },
        "Parts": {
          "rear_armor_plating_left": 50.0,
          "mud_flap_bl": 25.0,
          "mud_flap_fl": 25.0,
          "mud_flap_fr": 25.0,
          "rear_armor_plating_right": 50.0,
          "mud_flap_br": 25.0,
          "hood": 1.0,
          "wheelBL": 800.0,
          "wheelBR": 800.0,
          "wheelFL": 800.0,
          "wheelFR": 800.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 200.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 175.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1823.0,
        "SCMActive": 2272.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1559.0
      },
      "CrossSection": {
        "Front": 843.0,
        "Side": 1647.0,
        "Top": 2011.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 202.0,
      "TotalMissilesDmg": 9602.0
    },
    "Insurance": {
      "StandardClaimTime": 2.03,
      "ExpeditedClaimTime": 0.68,
      "ExpeditedCost": 1605.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "New Deal, Lorville": 150232.0
    }
  },
  {
    "ClassName": "TMBL_Cyclone_RC",
    "Name": "Tumbril Cyclone RC",
    "Description": "For those who like to push the limits of speed, the Cyclone RC features a modified intake system to allow for controlled bursts of speed as well as tools to customize handling.",
    "Career": "Ground",
    "Role": "Racing",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.8,
      "PersonalInventory": 1.72
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 3564.0,
    "ComponentsMass": 169.0,
    "Dimensions": {
      "Length": 6.0,
      "Width": 4,
      "Height": 2.5
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2000.0
        },
        "Parts": {
          "rear_armor_plating_left": 50.0,
          "mud_flap_bl": 25.0,
          "mud_flap_fl": 25.0,
          "mud_flap_fr": 25.0,
          "rear_armor_plating_right": 50.0,
          "mud_flap_br": 25.0,
          "hood": 1.0,
          "wheelBL": 800.0,
          "wheelBR": 800.0,
          "wheelFL": 800.0,
          "wheelFR": 800.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 200.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 175.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1517.0,
        "SCMActive": 1966.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1155.0
      },
      "CrossSection": {
        "Front": 862.0,
        "Side": 1592.0,
        "Top": 2045.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 2.84,
      "ExpeditedClaimTime": 0.95,
      "ExpeditedCost": 1135.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "New Deal, Lorville": 130201.0
    }
  },
  {
    "ClassName": "TMBL_Cyclone_RN",
    "Name": "Tumbril Cyclone RN",
    "Description": "Stay mobile and aware with the Cyclone RN. This light reconnaissance vehicle is the perfect solution for scouting runs, providing fast and detailed scans of terrain as well as beacon placement.",
    "Career": "Ground",
    "Role": "Exploration",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.8,
      "PersonalInventory": 2.15
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 3564.0,
    "ComponentsMass": 169.0,
    "Dimensions": {
      "Length": 6.0,
      "Width": 4,
      "Height": 2.5
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2000.0
        },
        "Parts": {
          "rear_armor_plating_left": 50.0,
          "mud_flap_bl": 25.0,
          "mud_flap_fl": 25.0,
          "mud_flap_fr": 25.0,
          "rear_armor_plating_right": 50.0,
          "mud_flap_br": 25.0,
          "hood": 1.0,
          "wheelBL": 800.0,
          "wheelBR": 800.0,
          "wheelFL": 800.0,
          "wheelFR": 800.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 200.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 175.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1517.0,
        "SCMActive": 1966.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1155.0
      },
      "CrossSection": {
        "Front": 1032.0,
        "Side": 1485.0,
        "Top": 1983.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 2.03,
      "ExpeditedClaimTime": 0.68,
      "ExpeditedCost": 810.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "New Deal, Lorville": 130201.0
    }
  },
  {
    "ClassName": "TMBL_Cyclone_TR",
    "Name": "Tumbril Cyclone TR",
    "Description": "Designed for militia and security use, the Cyclone TR module features upgraded armor and a single Human-operated turret capable of mounting a Size 1 weapon and a responsive 360° field of fire.",
    "Career": "Ground",
    "Role": "Combat",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.8,
      "PersonalInventory": 1.72
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 3564.0,
    "ComponentsMass": 284.0,
    "Dimensions": {
      "Length": 6.0,
      "Width": 4,
      "Height": 2.5
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.9,
        "Energy": 0.9,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2000.0
        },
        "Parts": {
          "rear_armor_plating_left": 50.0,
          "mud_flap_bl": 25.0,
          "mud_flap_fl": 25.0,
          "mud_flap_fr": 25.0,
          "rear_armor_plating_right": 50.0,
          "mud_flap_br": 25.0,
          "hood": 1.0,
          "wheelBL": 800.0,
          "wheelBR": 800.0,
          "wheelFL": 800.0,
          "wheelFR": 800.0
        }
      }
    },
    "SteerCharacteristics": {
      "V0SteerSpeed": 200.0,
      "VMaxSteerSpeed": 15.0,
      "V0SteerMaxAngle": 50.0,
      "SteerSubtractV": 40.0,
      "SteerSubtractAngle": 0.0,
      "SteerRelaxationSpeed": 175.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 1517.0,
        "SCMActive": 1966.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1459.0
      },
      "CrossSection": {
        "Front": 956.0,
        "Side": 1802.0,
        "Top": 2041.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 202.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 2.03,
      "ExpeditedClaimTime": 0.68,
      "ExpeditedCost": 810.0
    },
    "DriveCharacteristics": {
      "Acceleration": 0.0,
      "Decceleration": 0.0,
      "TopSpeed": 0.0,
      "ReverseSpeed": 0.0
    },
    "Buy": {
      "New Deal, Lorville": 130201.0
    }
  },
  {
    "ClassName": "TMBL_Nova",
    "Name": "Tumbril Nova",
    "Description": "Tumbril's new Nova is a classic battlefield warrior, reimagined for the modern age. This heavy tank offers a devastating combination of weaponry to eliminate threats on the ground and in the air.",
    "Career": "Ground Combat",
    "Role": "Heavy Tank",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.0,
      "PersonalInventory": 3.17
    },
    "Crew": 1,
    "WeaponCrew": 1,
    "OperationsCrew": 0,
    "Mass": 74950.0,
    "ComponentsMass": 4564.0,
    "Dimensions": {
      "Length": 16.0,
      "Width": 7.0,
      "Height": 5.0
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.9,
        "Energy": 0.9,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.6,
        "Infrared": 0.7,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body_mesh": 40000.0
        },
        "Parts": {
          "hardpoint_drive_sprocket_right": 800.0,
          "hardpoint_wheel_small_right": 800.0,
          "hardpoint_drive_sprocket_left": 800.0,
          "hardpoint_wheel_small_left": 800.0,
          "primary_turret_debris": 30000.0,
          "hardpoint_wheel_right_07": 800.0,
          "hardpoint_wheel_right_06": 800.0,
          "hardpoint_wheel_right_05": 800.0,
          "hardpoint_wheel_right_04": 800.0,
          "hardpoint_wheel_right_03": 800.0,
          "hardpoint_wheel_right_02": 800.0,
          "hardpoint_wheel_right_01": 800.0,
          "hardpoint_wheel_left_07": 800.0,
          "hardpoint_wheel_left_06": 800.0,
          "hardpoint_wheel_left_05": 800.0,
          "hardpoint_wheel_left_04": 800.0,
          "hardpoint_wheel_left_03": 800.0,
          "hardpoint_wheel_left_02": 800.0,
          "hardpoint_wheel_left_01": 800.0,
          "hardpoint_wheel_left_hidden_rear_09": 800.0,
          "hardpoint_wheel_left_hidden_front_08": 800.0,
          "hardpoint_wheel_right_hidden_front_08": 800.0,
          "hardpoint_wheel_right_hidden_rear_09": 800.0
        }
      }
    },
    "TrackWheeledCharacteristics": {
      "EnginePower": 1750.0,
      "EngineMinRPM": 500.0,
      "EngineIdleRPM": 1000.0,
      "EngineMaxRPM": 10000.0,
      "MaxSpeed": 25.0
    },
    "TrackSteerCharacteristics": {
      "SteerSpeed": 150.0,
      "SteerSpeedMin": 110.0,
      "V0SteerMax": 40.0,
      "KvSteerMax": 26.0,
      "VMaxSteerMax": 20.0,
      "VMaxSteerSpeed": 150.0,
      "V0SteerSpeed": 110.0,
      "V0SteerMaxAngle": 40.0,
      "SteerSubtractAngle": 26.0,
      "SteerSubtractV": 20.0,
      "SteerRelaxationSpeed": 100.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 788.0,
        "SCMActive": 1598.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1772.0
      },
      "CrossSection": {
        "Front": 1478.0,
        "Side": 1712.0,
        "Top": 2810.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 1635.0,
      "PilotBurstDPS": 6400.0,
      "TurretsBurstDPS": 656.0,
      "TotalMissilesDmg": 57088.0
    },
    "Insurance": {
      "StandardClaimTime": 12.38,
      "ExpeditedClaimTime": 4.13,
      "ExpeditedCost": 7398.0
    },
    "Buy": {
      "New Deal, Lorville": 961482.0
    }
  },
  {
    "ClassName": "TMBL_Storm",
    "Name": "Tumbril Storm",
    "Description": "Manufacturer: Tumbril Land SystemsFocus: Combat Originally introduced in 2606 during the Second Tevarin War, the Tumbril Storm single-operator mini-tank was built to blitz battlefields and take out enemy artillery. Reimagined from the ground up to be faster, stronger, and more impactful than ever, the latest Storm is a true force of nature, well-suited to the frenetic landscape of modern warfare.",
    "Career": "Ground Combat",
    "Role": "Light Tank",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.45,
      "PersonalInventory": 0.99
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 57270.0,
    "ComponentsMass": 894.0,
    "Dimensions": {
      "Length": 10.5,
      "Width": 7.5,
      "Height": 3.6
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.9,
        "Energy": 0.9,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 27000.0
        },
        "Parts": {
          "tread_cover_FL": 5000.0,
          "Component_Door_FL_Back": 500.0,
          "Component_Door_FL_Front": 500.0,
          "blast_plate_front_left": 200.0,
          "radar_detail_front_left": 100.0,
          "tread_cover_RL": 5000.0,
          "component_door_RL_front": 500.0,
          "component_door_RL_back": 500.0,
          "blast_plate_a_rear_left": 200.0,
          "blast_plate_b_rear_left": 200.0,
          "tread_cover_RR": 5000.0,
          "component_door_RR_front": 500.0,
          "component_door_RR_back": 500.0,
          "blast_shield_a_back_right": 200.0,
          "blast_shield_b_rear_right": 200.0,
          "tread_cover_FR": 5000.0,
          "blast_plate_front_right": 200.0,
          "Component_Door_FR_Back": 500.0,
          "Component_Door_FR_Front": 500.0,
          "radar_detail_front_right": 100.0,
          "component_door_rear_left": 500.0,
          "component_door_rear_right": 500.0,
          "hardpoint_wheel_front_right_00": 700.0,
          "hardpoint_wheel_rear_right_hidden": 700.0,
          "hardpoint_wheel_rear_right_014": 700.0,
          "hardpoint_wheel_rear_left_014": 700.0,
          "hardpoint_wheel_rear_right_013": 700.0,
          "hardpoint_wheel_rear_left_013": 700.0,
          "hardpoint_wheel_front_right_hidden": 700.0,
          "hardpoint_wheel_front_left_hidden": 700.0,
          "hardpoint_wheel_front_right_06": 700.0,
          "hardpoint_wheel_front_left_06": 700.0,
          "hardpoint_wheel_rear_right_12": 700.0,
          "hardpoint_wheel_rear_right_11": 700.0,
          "hardpoint_wheel_front_right_01": 700.0,
          "hardpoint_wheel_rear_right_08": 700.0,
          "hardpoint_wheel_rear_right_06": 700.0,
          "hardpoint_wheel_rear_left_hidden": 700.0,
          "hardpoint_wheel_front_right_04": 700.0,
          "hardpoint_wheel_front_right_02": 700.0,
          "hardpoint_wheel_rear_left_12": 700.0,
          "hardpoint_wheel_front_left_00": 700.0,
          "hardpoint_wheel_rear_left_11": 700.0,
          "hardpoint_wheel_rear_left_08": 700.0,
          "hardpoint_wheel_rear_left_06": 700.0,
          "hardpoint_wheel_front_left_01": 700.0,
          "hardpoint_wheel_front_left_04": 700.0,
          "hardpoint_wheel_front_left_02": 700.0,
          "hardpoint_wheel_front_left_gap1": 700.0,
          "hardpoint_wheel_front_right_gap1": 700.0,
          "hardpoint_wheel_front_left_gap2": 700.0,
          "hardpoint_wheel_front_right_gap2": 700.0,
          "hardpoint_wheel_front_left_center2": 700.0,
          "hardpoint_wheel_front_right_center1": 700.0,
          "hardpoint_wheel_front_right_center2": 700.0,
          "hardpoint_wheel_front_left_center1": 700.0,
          "hardpoint_wheel_front_bumper_left": 700.0,
          "hardpoint_wheel_front_bumper_right": 700.0,
          "hardpoint_wheel_rear_left_hidden2": 700.0,
          "hardpoint_wheel_rear_right_hidden2": 700.0,
          "blast_plate_body_right": 200.0,
          "radar_detail_body_left": 100.0,
          "radar_detail_body_right": 100.0,
          "blast_plate_body_left": 200.0
        }
      }
    },
    "TrackWheeledCharacteristics": {
      "EnginePower": 4700.0,
      "EngineMinRPM": 500.0,
      "EngineIdleRPM": 1000.0,
      "EngineMaxRPM": 10000.0,
      "MaxSpeed": 30.0
    },
    "TrackSteerCharacteristics": {
      "SteerSpeed": 170.0,
      "SteerSpeedMin": 220.0,
      "V0SteerMax": 40.0,
      "KvSteerMax": 26.0,
      "VMaxSteerMax": 20.0,
      "VMaxSteerSpeed": 170.0,
      "V0SteerSpeed": 220.0,
      "V0SteerMaxAngle": 40.0,
      "SteerSubtractAngle": 26.0,
      "SteerSubtractV": 20.0,
      "SteerRelaxationSpeed": 170.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 217.0,
        "SCMActive": 667.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1440.0
      },
      "CrossSection": {
        "Front": 1478.0,
        "Side": 1712.0,
        "Top": 2810.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 2042.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 5.33,
      "ExpeditedClaimTime": 1.33,
      "ExpeditedCost": 1730.0
    },
    "New Vehicle": "Tumbril Storm",
    "Buy": {
      "New Deal, Lorville": 453600.0
    }
  },
  {
    "ClassName": "TMBL_Storm_AA",
    "Name": "Tumbril Storm AA",
    "Description": "Originally introduced in 2606 during the Second Tevarin War, the Tumbril Storm single-operator mini-tank was built to blitz battlefields and take out enemy artillery. Reimagined from the ground up to be faster, stronger, and more impactful than ever, the Storm AA is a true force of nature, equipped with a barrage of missiles to provide cover against airborne and ground targets.",
    "Career": "Ground Combat",
    "Role": "Light Tank",
    "Size": 4,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.45,
      "PersonalInventory": 0.99
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 57270.0,
    "ComponentsMass": 6251.0,
    "Dimensions": {
      "Length": 10.5,
      "Width": 7.5,
      "Height": 3.6
    },
    "IsSpaceship": false,
    "IsVehicle": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.9,
        "Energy": 0.9,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.85,
        "Infrared": 0.85,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 27000.0
        },
        "Parts": {
          "tread_cover_FL": 5000.0,
          "Component_Door_FL_Back": 500.0,
          "Component_Door_FL_Front": 500.0,
          "blast_plate_front_left": 200.0,
          "radar_detail_front_left": 100.0,
          "tread_cover_RL": 5000.0,
          "component_door_RL_front": 500.0,
          "component_door_RL_back": 500.0,
          "blast_plate_a_rear_left": 200.0,
          "blast_plate_b_rear_left": 200.0,
          "tread_cover_RR": 5000.0,
          "component_door_RR_front": 500.0,
          "component_door_RR_back": 500.0,
          "blast_shield_a_back_right": 200.0,
          "blast_shield_b_rear_right": 200.0,
          "tread_cover_FR": 5000.0,
          "blast_plate_front_right": 200.0,
          "Component_Door_FR_Back": 500.0,
          "Component_Door_FR_Front": 500.0,
          "radar_detail_front_right": 100.0,
          "component_door_rear_left": 500.0,
          "component_door_rear_right": 500.0,
          "hardpoint_wheel_front_right_00": 700.0,
          "hardpoint_wheel_rear_right_hidden": 700.0,
          "hardpoint_wheel_rear_right_014": 700.0,
          "hardpoint_wheel_rear_left_014": 700.0,
          "hardpoint_wheel_rear_right_013": 700.0,
          "hardpoint_wheel_rear_left_013": 700.0,
          "hardpoint_wheel_front_right_hidden": 700.0,
          "hardpoint_wheel_front_left_hidden": 700.0,
          "hardpoint_wheel_front_right_06": 700.0,
          "hardpoint_wheel_front_left_06": 700.0,
          "hardpoint_wheel_rear_right_12": 700.0,
          "hardpoint_wheel_rear_right_11": 700.0,
          "hardpoint_wheel_front_right_01": 700.0,
          "hardpoint_wheel_rear_right_08": 700.0,
          "hardpoint_wheel_rear_right_06": 700.0,
          "hardpoint_wheel_rear_left_hidden": 700.0,
          "hardpoint_wheel_front_right_04": 700.0,
          "hardpoint_wheel_front_right_02": 700.0,
          "hardpoint_wheel_rear_left_12": 700.0,
          "hardpoint_wheel_front_left_00": 700.0,
          "hardpoint_wheel_rear_left_11": 700.0,
          "hardpoint_wheel_rear_left_08": 700.0,
          "hardpoint_wheel_rear_left_06": 700.0,
          "hardpoint_wheel_front_left_01": 700.0,
          "hardpoint_wheel_front_left_04": 700.0,
          "hardpoint_wheel_front_left_02": 700.0,
          "hardpoint_wheel_front_left_gap1": 700.0,
          "hardpoint_wheel_front_right_gap1": 700.0,
          "hardpoint_wheel_front_left_gap2": 700.0,
          "hardpoint_wheel_front_right_gap2": 700.0,
          "hardpoint_wheel_front_left_center2": 700.0,
          "hardpoint_wheel_front_right_center1": 700.0,
          "hardpoint_wheel_front_right_center2": 700.0,
          "hardpoint_wheel_front_left_center1": 700.0,
          "hardpoint_wheel_front_bumper_left": 700.0,
          "hardpoint_wheel_front_bumper_right": 700.0,
          "hardpoint_wheel_rear_left_hidden2": 700.0,
          "hardpoint_wheel_rear_right_hidden2": 700.0,
          "blast_plate_body_right": 200.0,
          "radar_detail_body_left": 100.0,
          "radar_detail_body_right": 100.0,
          "blast_plate_body_left": 200.0
        }
      }
    },
    "TrackWheeledCharacteristics": {
      "EnginePower": 4700.0,
      "EngineMinRPM": 500.0,
      "EngineIdleRPM": 1000.0,
      "EngineMaxRPM": 10000.0,
      "MaxSpeed": 30.0
    },
    "TrackSteerCharacteristics": {
      "SteerSpeed": 170.0,
      "SteerSpeedMin": 220.0,
      "V0SteerMax": 40.0,
      "KvSteerMax": 26.0,
      "VMaxSteerMax": 20.0,
      "VMaxSteerSpeed": 170.0,
      "V0SteerSpeed": 220.0,
      "V0SteerMaxAngle": 40.0,
      "SteerSubtractAngle": 26.0,
      "SteerSubtractV": 20.0,
      "SteerRelaxationSpeed": 170.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 363.0,
        "SCMActive": 745.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 1054.0
      },
      "CrossSection": {
        "Front": 1557.0,
        "Side": 2094.0,
        "Top": 2650.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 545.0,
      "PilotBurstDPS": 0.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 111028.0
    },
    "Insurance": {
      "StandardClaimTime": 5.33,
      "ExpeditedClaimTime": 1.33,
      "ExpeditedCost": 1740.0
    },
    "New Vehicle": "Tumbril Storm AA",
    "Buy": {
      "New Deal, Lorville": 476280.0
    }
  },
  {
    "ClassName": "VNCL_Blade",
    "Name": "Esperia Blade",
    "Description": "These light fighters, designation 'Blade', are often used by Vanduul as scouts and first wave assault crafts. They have also served well as skirmisher units due to their speed allowing them to chase down any ships attempting to flee the area. For some decades, United Empire of Earth aggressor squadrons have operated replica Blade fighters produced under exclusive contract by Esperia, Inc. ",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.65,
      "PersonalInventory": 0.65
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 23219.0,
    "ComponentsMass": 6492.0,
    "Dimensions": {
      "Length": 16.5,
      "Width": 20.0,
      "Height": 5.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "Nose": 1800.0,
          "Body": 1800.0
        },
        "Parts": {
          "Spoiler": 250.0,
          "Wing_Left": 700.0,
          "Wing_Left_Tip": 275.0,
          "Belly": 750.0,
          "Rib1_Right": 50.0,
          "Rib2_Right": 50.0,
          "Rib3_Right": 50.0,
          "Rib4_Right": 50.0,
          "Rib5_Right": 50.0,
          "Rib6_Right": 50.0,
          "Rib7_Right": 50.0,
          "Rib7_Left": 50.0,
          "Rib6_Left": 50.0,
          "Rib5_Left": 50.0,
          "Rib4_Left": 50.0,
          "Rib3_Left": 50.0,
          "Rib2_Left": 50.0,
          "Rib1_Left": 50.0,
          "Wing_Right": 700.0,
          "Wing_Right_Tip": 275.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_central": 11000.0,
          "engine_left": 11000.0,
          "engine_right": 11000.0
        },
        "Retro": {
          "thruster_retro": 11800.0
        },
        "Maneuvering": {
          "thruster_top_front_left": 11000.0,
          "thruster_top_front_right": 11000.0,
          "thruster_bottom_front_left": 11000.0,
          "thruster_bottom_front_right": 11000.0,
          "thruster_side_front_left": 11000.0,
          "thruster_top_rear_right": 11000.0,
          "thruster_side_rear_left": 11000.0,
          "thruster_side_rear_right": 11000.0,
          "thruster_bottom_rear_left": 11000.0,
          "thruster_bottom_rear_right": 11000.0,
          "thruster_top_rear_left": 11000.0,
          "thruster_side_front_right": 11000.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "MaxSpeed": 1200.0,
      "Pitch": 55.0,
      "Yaw": 65.0,
      "Roll": 200.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 3712000.0,
        "Retro": 1285000.0,
        "Vtol": 0.0,
        "Maneuvering": 10174000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 12.9,
        "Retro": 4.5,
        "Strafe": 9.9,
        "Up": 10.0,
        "Down": 5.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 500.0,
          "BoostSpeedBackward": 260.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.2,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 8000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 3.75,
        "Retro": 1.25,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 464.0,
        "Retro": 160.625,
        "Vtol": 0.0,
        "Maneuvering": 1271.75
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5638.0,
        "SCMActive": 6732.0,
        "NAV": 13171.0
      },
      "Infrared": {
        "Start": 9591.0
      },
      "CrossSection": {
        "Front": 2747.0,
        "Side": 10418.0,
        "Top": 10418.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 2794.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 18662.0
    },
    "Insurance": {
      "StandardClaimTime": 10.33,
      "ExpeditedClaimTime": 3.44,
      "ExpeditedCost": 5124.0
    },
    "Buy": {
      "Astro Armada, Area 18": 7796250.0
    }
  },
  {
    "ClassName": "VNCL_Glaive",
    "Name": "Esperia Glaive",
    "Description": "The Glaive is a symmetrical version of the Scythe. Generally flown by Vanduul with more combat experience, they are better armed and have two huge blades/wings as opposed to one on the standard Scythe.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.6,
      "PersonalInventory": 0.99
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 76520.0,
    "ComponentsMass": 6884.0,
    "Dimensions": {
      "Length": 31.0,
      "Width": 31.5,
      "Height": 8.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 5000.0
        },
        "Parts": {
          "body": 5000.0,
          "landing_gear_rear_cover": 200.0,
          "wing_right_arm": 640.0,
          "wing_right_gun": 640.0,
          "wing_rightA": 720.0,
          "wing_right_blade": 1000.0,
          "wing_rightA_featherD_hinge": 1.0,
          "wing_rightA_featherD_end": 1.0,
          "wing_rightA_featherC_hinge": 1.0,
          "wing_rightA_featherC_end": 1.0,
          "wing_rightA_featherB_hinge": 1.0,
          "wing_rightA_featherB_end": 1.0,
          "wing_rightA_featherA_hinge": 1.0,
          "wing_rightA_featherA_end": 1.0,
          "wing_right_blade_lock": 1.0,
          "wing_right_tailA": 1.0,
          "wing_right_tailB": 1.0,
          "wing_right_tailC": 1.0,
          "wing_right_tailD": 1.0,
          "wing_right_tailD_featherA_hinge": 1.0,
          "wing_right_tailD_featherA_end": 1.0,
          "wing_right_tailD_featherB_hinge": 1.0,
          "wing_right_tailD_featherB_end": 1.0,
          "wing_right_tailD_featherC_hinge": 1.0,
          "wing_right_tailD_featherC_end": 1.0,
          "wing_right_tailD_featherD_hinge": 1.0,
          "wing_right_tailD_featherD_end": 1.0,
          "wing_left_arm": 720.0,
          "wing_left_tailA": 1.0,
          "wing_left_tailB": 1.0,
          "wing_left_tailC": 1.0,
          "wing_left_gun": 640.0,
          "wing_leftA": 720.0,
          "wing_left_blade": 1000.0,
          "wing_leftA_featherA_hinge": 1.0,
          "wing_leftA_featherA_end": 1.0,
          "wing_leftA_featherB_hinge": 1.0,
          "wing_leftA_featherB_end": 1.0,
          "wing_leftA_featherC_hinge": 1.0,
          "wing_leftA_featherC_end": 1.0,
          "wing_leftA_featherD_hinge": 1.0,
          "wing_leftA_featherD_end": 1.0,
          "wing_left_blade_lock": 1.0,
          "wing_left_tailD": 1.0,
          "wing_left_tailD_featherA_hinge": 1.0,
          "wing_left_tailD_featherA_end": 1.0,
          "wing_left_tailD_featherC_hinge": 1.0,
          "wing_left_tailD_featherC_end": 1.0,
          "wing_left_tailD_featherD_hinge": 1.0,
          "wing_left_tailD_featherD_end": 1.0,
          "wing_left_tailD_featherB_hinge": 1.0,
          "wing_left_tailD_featherB_end": 1.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 11200.0,
          "engine_right": 11200.0
        },
        "Retro": {
          "thruster_retro_left": 11200.0,
          "thruster_retro_right": 11200.0
        },
        "Maneuvering": {
          "thruster_top_front_right_fixed": 12300.0,
          "thruster_bottom_back_left_joint": 11200.0,
          "thruster_bottom_back_right_joint": 11200.0,
          "thruster_bottom_front_left_joint": 11200.0,
          "thruster_bottom_front_right_joint": 11200.0,
          "thruster_side_back_left_fixed": 12300.0,
          "thruster_side_back_right_fixed": 12300.0,
          "thruster_side_front_left_fixed": 12300.0,
          "thruster_side_front_right_fixed": 12300.0,
          "thruster_top_back_left_joint": 11200.0,
          "thruster_top_back_right_joint": 11200.0,
          "thruster_top_front_left_fixed": 12300.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 5949678.0,
        "Retro": 3092728.0,
        "Vtol": 0.0,
        "Maneuvering": 21238728.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.1,
        "Retro": 4.0,
        "Strafe": 7.5,
        "Up": 8.0,
        "Down": 4.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 9000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 743.71,
        "Retro": 386.591,
        "Vtol": 0.0,
        "Maneuvering": 2654.841
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5221.0,
        "SCMActive": 6215.0,
        "NAV": 12754.0
      },
      "Infrared": {
        "Start": 8880.0
      },
      "CrossSection": {
        "Front": 2384.0,
        "Side": 9140.0,
        "Top": 11922.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 2470.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 22395.0
    },
    "Insurance": {
      "StandardClaimTime": 7.59375,
      "ExpeditedClaimTime": 2.53125,
      "ExpeditedCost": 3800.0
    }
  },
  {
    "ClassName": "VNCL_Scythe",
    "Name": "Vanduul Scythe",
    "Description": "Fast becoming the symbol of the Vanduul Race, the Scythe is the foot soldier in every raid and the target of every human fighter pilot. Featuring a hefty weapons payload, the Scythe's real asset is its maneuverability, found in the twin main and twelve maneuvering thrusters. This captured Vanduul-made Scythe has been modified by Esperia to be flyable by Human pilots.",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.6,
      "PersonalInventory": 0.0
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 68391.0,
    "ComponentsMass": 6000.0,
    "Dimensions": {
      "Length": 31.0,
      "Width": 23.0,
      "Height": 8.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.48,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.0,
        "Infrared": 1.0,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "nose": 4000.0
        },
        "Parts": {
          "body": 4000.0,
          "wing_left_arm": 500.0,
          "wing_left": 480.0,
          "wing_right_arm": 500.0,
          "wing_right_gun": 500.0,
          "wing_right_tailA": 1.0,
          "wing_right_tailB": 1.0,
          "wing_right_tailC": 1.0,
          "wing_rightA": 500.0,
          "wing_right_blade": 1000.0,
          "wing_rightA_featherA_hinge": 1.0,
          "wing_rightA_featherA_end": 1.0,
          "wing_rightA_featherB_hinge": 1.0,
          "wing_rightA_featherB_end": 1.0,
          "wing_rightA_featherC_hinge": 1.0,
          "wing_rightA_featherC_end": 1.0,
          "wing_rightA_featherD_hinge": 1.0,
          "wing_rightA_featherD_end": 1.0,
          "wing_right_blade_lock": 1.0,
          "wing_right_tailD": 1.0,
          "wing_right_tailD_featherA_hinge": 1.0,
          "wing_right_tailD_featherA_end": 1.0,
          "wing_right_tailD_featherB_hinge": 1.0,
          "wing_right_tailD_featherB_end": 1.0,
          "wing_right_tailD_featherC_hinge": 1.0,
          "wing_right_tailD_featherC_end": 1.0,
          "wing_right_tailD_featherD_hinge": 1.0,
          "wing_right_tailD_featherD_end": 1.0,
          "landing_gear_rear_cover": 200.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_left": 11200.0,
          "engine_right": 11200.0
        },
        "Retro": {
          "thruster_retro_left": 11200.0,
          "thruster_retro_right": 11200.0
        },
        "Maneuvering": {
          "thruster_top_front_right_fixed": 12300.0,
          "thruster_bottom_back_left_joint": 11200.0,
          "thruster_bottom_back_right_joint": 11200.0,
          "thruster_bottom_front_left_joint": 11200.0,
          "thruster_bottom_front_right_joint": 11200.0,
          "thruster_side_back_left_fixed": 12300.0,
          "thruster_side_back_right_fixed": 12300.0,
          "thruster_side_front_left_fixed": 12300.0,
          "thruster_side_front_right_fixed": 12300.0,
          "thruster_top_back_left_joint": 11200.0,
          "thruster_top_back_right_joint": 11200.0,
          "thruster_top_front_left_fixed": 12300.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 220.0,
      "MaxSpeed": 1150.0,
      "Pitch": 56.0,
      "Yaw": 45.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 2600000.0,
        "Retro": 2904083.0,
        "Vtol": 0.0,
        "Maneuvering": 19947190.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 10.9,
        "Retro": 4.0,
        "Strafe": 7.4,
        "Up": 7.9,
        "Down": 4.5
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 480.0,
          "BoostSpeedBackward": 230.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.6,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 22000000.0,
      "FuelIntakeRate": 0.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 2.5,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 15.0
      },
      "FuelUsagePerSecond": {
        "Main": 325.0,
        "Retro": 363.01,
        "Vtol": 0.0,
        "Maneuvering": 2493.399
      },
      "IntakeToMainFuelRatio": 0.0,
      "TimeForIntakesToFillTank": "Infinity"
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 5201.0,
        "SCMActive": 6195.0,
        "NAV": 12734.0
      },
      "Infrared": {
        "Start": 8830.0
      },
      "CrossSection": {
        "Front": 2513.0,
        "Side": 8277.0,
        "Top": 12563.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 6.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 3550.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 18662.0
    },
    "Insurance": {
      "StandardClaimTime": 5.90625,
      "ExpeditedClaimTime": 1.96875,
      "ExpeditedCost": 2955.0
    }
  },
  {
    "ClassName": "XIAN_Nox",
    "Name": "Aopoa Nox",
    "Description": "Hit the skids with the 2947 Nox. This speedy and maneuverable open-canopy racer from Aopoa is capable of zipping along planet surfaces or deep space. Available for the first time in Human space, the Nox has been specifically redesigned for Human pilots and is ready to race.",
    "Career": "Competition",
    "Role": "Racing",
    "Size": 1,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.3,
      "PersonalInventory": 0.39
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 4230.0,
    "ComponentsMass": 893.0,
    "Dimensions": {
      "Length": 5.5,
      "Width": 1.5,
      "Height": 1.5
    },
    "IsSpaceship": false,
    "IsGravlev": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 1.0,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 0.8,
        "Infrared": 0.38,
        "CrossSection": 1.0
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body_back": 400.0,
          "body_front": 120.0,
          "nose": 440.0
        },
        "Parts": {
          "rear_nacelle_l": 320.0,
          "rear_nacelle_r": 320.0,
          "front_cowling": 225.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine": 2750.0
        },
        "Retro": {
          "thruster_retro_left": 2500.0,
          "thruster_retro_right": 2500.0
        },
        "Maneuvering": {
          "thruster_rear_top_left": 2150.0,
          "thruster_rear_left": 2150.0,
          "thruster_rear_bottom_left": 2150.0,
          "gravplate_rear_left": 2750.0,
          "thruster_rear_right": 2150.0,
          "thruster_rear_bottom_right": 2150.0,
          "thruster_rear_top_right": 2150.0,
          "gravplate_rear_right": 2750.0,
          "gravplate_center_right": 2750.0,
          "gravplate_front_left": 2750.0,
          "gravplate_front_right": 2750.0,
          "thruster_front_bottom_left": 2150.0,
          "thruster_front_bottom_right": 2150.0,
          "thruster_front_left_A": 2150.0,
          "thruster_front_left_B": 2150.0,
          "thruster_front_right_A": 2150.0,
          "thruster_front_right_B": 2150.0,
          "thruster_front_top_left": 2150.0,
          "thruster_front_top_right": 2150.0,
          "gravplate_center_left": 2750.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 225.0,
      "HoverMaxSpeed": 225.0,
      "MaxSpeed": 619.0,
      "Pitch": 89.0,
      "Yaw": 89.0,
      "Roll": 138.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 139000.0,
        "Retro": 134200.0,
        "Vtol": 0.0,
        "Maneuvering": 358615.9
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 3.1,
        "Retro": 2.8,
        "Strafe": 1.4,
        "Up": 2.5,
        "Down": 2.3
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "ScmMode": {
          "BoostSpeedForward": 305.0,
          "BoostSpeedBackward": 145.0
        }
      },
      "Boost": {
        "PreDelay": 0.15,
        "RampUp": 0.0,
        "RampDown": 0.2,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.7,
            "Y": 2.3,
            "Z": 1.2
          },
          "NegativeAxis": {
            "X": 1.7,
            "Y": 1.2,
            "Z": 1.2
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 10.0,
        "CapacitorRegenPerSec": 4.0,
        "CapacitorIdleCost": 4.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 1.0,
        "RegenerationTime": 2.5,
        "X_AccelMultiplicator": 2.0,
        "Y_AccelMultiplicator": 2.0,
        "Z_AccelMultiplicator": 2.0
      }
    },
    "FuelManagement": {
      "FuelCapacity": 1500000.0,
      "FuelIntakeRate": 1.0,
      "QuantumFuelCapacity": 0.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 1.25,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 25.0
      },
      "FuelUsagePerSecond": {
        "Main": 17.375,
        "Retro": 16.775,
        "Vtol": 0.0,
        "Maneuvering": 44.827
      },
      "IntakeToMainFuelRatio": 5.76,
      "TimeForIntakesToFillTank": 1500000.0
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 506.0,
        "SCMActive": 782.0,
        "NAV": 0.0
      },
      "Infrared": {
        "Start": 593.0
      },
      "CrossSection": {
        "Front": 333.0,
        "Side": 467.0,
        "Top": 550.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 2.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 0.0,
      "PilotBurstDPS": 438.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 0.10125,
      "ExpeditedClaimTime": 0.0,
      "ExpeditedCost": 55.0
    },
    "Buy": {
      "Astro Armada, Area 18": 722925.0
    }
  },
  {
    "ClassName": "XIAN_Scout",
    "Name": "Aopoa Khartu-al",
    "Description": "The Xi'an Aopoa corporation manufactures an export model of the Qhire Khartu, the Khartu-al, for sale to human civilians as a dedicated scout/explorer. The export model features the same Xi'an maneuvering rig, but control surfaces modified for Human use and a more limited armament.",
    "Career": "Combat",
    "Role": "Light Fighter",
    "Size": 3,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 1.05,
      "PersonalInventory": 1.08
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 68311.0,
    "ComponentsMass": 6870.0,
    "Dimensions": {
      "Length": 15.0,
      "Width": 21.5,
      "Height": 30.5
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 0.95,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.2,
        "Infrared": 1.2,
        "CrossSection": 1.2
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 2100.5
        },
        "Parts": {
          "body_nose": 2250.0,
          "cockpit_rim": 1600.0,
          "sub_frame": 2000.0,
          "small_wing_left": 300.0,
          "small_wing_right": 300.0,
          "Wing_Right_Upper_Thruster_Shoulder": 300.0,
          "Wing_Right_Upper_Thruster_Elbow": 300.0,
          "Wing_Right_Upper_Thruster_Housing": 500.0,
          "Wing_Right_Upper": 300.0,
          "Wing_Right_Lower_Thruster_Shoulder": 300.0,
          "Wing_Right_Lower_Thruster_Elbow": 300.0,
          "Wing_Right_Lower_Thruster_Housing": 500.0,
          "Wing_Right_Lower": 300.0,
          "Wing_Left_Upper_Thruster_Shoulder": 300.0,
          "Wing_Left_Upper_Thruster_Elbow": 300.0,
          "Wing_Left_Upper_Thruster_Housing": 500.0,
          "Wing_Left_Upper": 300.0,
          "Wing_Left_Lower_Thruster_Shoulder": 300.0,
          "Wing_Left_Lower_Thruster_Elbow": 300.0,
          "Wing_Left_Lower_Thruster_Housing": 500.0,
          "Wing_Left_Lower": 300.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "engine_right_upper": 15000.0,
          "engine_right_lower": 15000.0,
          "engine_left_upper": 15000.0,
          "engine_left_lower": 15000.0
        },
        "Maneuvering": {
          "thruster_left_front_upper": 12500.0,
          "thruster_left_rear_upper": 12500.0,
          "thruster_right_rear_lower": 12500.0,
          "thruster_right_front_lower": 12500.0,
          "thruster_left_rear_lower": 12500.0,
          "thruster_left_front_lower": 12500.0,
          "thruster_right_rear_upper": 12500.0,
          "thruster_right_front_upper": 12500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 226.0,
      "MaxSpeed": 1206.0,
      "Pitch": 75.0,
      "Yaw": 55.0,
      "Roll": 211.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 6304000.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 3264000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 13.2,
        "Retro": 4.5,
        "Strafe": 10.5,
        "Up": 10.3,
        "Down": 5.3
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 506.0,
          "BoostSpeedBackward": 263.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.3,
            "Y": 1.6,
            "Z": 1.3
          },
          "NegativeAxis": {
            "X": 1.3,
            "Y": 1.38,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 1.5,
        "Y_AccelMultiplicator": 1.5,
        "Z_AccelMultiplicator": 1.5
      }
    },
    "FuelManagement": {
      "FuelCapacity": 26000000.0,
      "FuelIntakeRate": 29.0,
      "QuantumFuelCapacity": 1100000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 10.0
      },
      "FuelUsagePerSecond": {
        "Main": 788.0,
        "Retro": 0.0,
        "Vtol": 0.0,
        "Maneuvering": 408.0
      },
      "IntakeToMainFuelRatio": 3.68,
      "TimeForIntakesToFillTank": 896551.72
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 7187.0,
        "SCMActive": 8609.0,
        "NAV": 16227.0
      },
      "Infrared": {
        "Start": 11576.0
      },
      "CrossSection": {
        "Front": 7216.0,
        "Side": 9866.0,
        "Top": 7266.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 3460.0,
      "PilotBurstDPS": 1636.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 0.0
    },
    "Insurance": {
      "StandardClaimTime": 5.0625,
      "ExpeditedClaimTime": 1.6875,
      "ExpeditedCost": 2535.0
    },
    "Buy": {
      "Astro Armada, Area 18": 7229250.0
    }
  },
  {
    "ClassName": "XNAA_SanTokYai",
    "Name": "Aopoa San'tok.yāi",
    "Description": "Harnessing the power of next-generation Xi'an flight systems, upgraded dual-vector thrusters, and a daunting weapons package, Aopoa has crafted a fighter that retains the nimble dexterity and tight handling the brand is known for. ",
    "Career": "Combat",
    "Role": "Medium Fighter",
    "Size": 2,
    "Cargo": {
      "CargoGrid": 0.0,
      "CargoContainers": 0.0,
      "ExternalStorage": 0.45,
      "PersonalInventory": 0.0
    },
    "Crew": 1,
    "WeaponCrew": 0,
    "OperationsCrew": 0,
    "Mass": 82224.0,
    "ComponentsMass": 10038.0,
    "Dimensions": {
      "Length": 22.0,
      "Width": 23.0,
      "Height": 23.0
    },
    "IsSpaceship": true,
    "Armor": {
      "DamageMultipliers": {
        "Physical": 0.5,
        "Energy": 0.95,
        "Distortion": 1.0
      },
      "SignalMultipliers": {
        "Electromagnetic": 1.2,
        "Infrared": 1.2,
        "CrossSection": 1.2
      }
    },
    "Hull": {
      "StructureHealthPoints": {
        "VitalParts": {
          "body": 3675.88
        },
        "Parts": {
          "ejection_mesh_top": 100.0,
          "tail_left": 600.0,
          "wings_rotator_bottom_left": 1000.0,
          "wing_front_bottom_left": 500.0,
          "wings_rotator_top_left": 1000.0,
          "wing_front_left": 500.0,
          "wings_rotator_bottom_right": 1000.0,
          "wing_front_bottom_right": 500.0,
          "wings_rotator_top_right": 1000.0,
          "wing_front_right": 500.0,
          "tail_right": 600.0,
          "front_item_tray_door_left": 250.0,
          "front_item_tray_door_right": 250.0
        }
      },
      "ThrustersHealthPoints": {
        "Main": {
          "main_thruster_bottom_left": 15000.0,
          "main_thruster_top_left": 15000.0,
          "main_thruster_bottom_right": 15000.0,
          "main_thruster_top_right": 15000.0
        },
        "Retro": {
          "mav_thruster_forward_left": 12500.0,
          "mav_thruster_forward_right": 12500.0
        },
        "Maneuvering": {
          "mav_thruster_downward_front": 12500.0,
          "mav_thruster_upward_rear": 12500.0,
          "mav_thruster_upward_front": 12500.0,
          "mav_thruster_rightward_front": 12500.0,
          "mav_thruster_leftward_front": 12500.0,
          "mav_thruster_downward_rear": 12500.0,
          "mav_thruster_backward_left": 12500.0,
          "mav_thruster_backward_right": 12500.0,
          "mav_thruster_leftward_rear": 12500.0,
          "mav_thruster_downward_right": 12500.0,
          "mav_thruster_upward_right": 12500.0,
          "mav_thruster_rightward_rear": 12500.0,
          "mav_thruster_downward_left": 12500.0,
          "mav_thruster_upward_left": 12500.0
        }
      }
    },
    "FlightCharacteristics": {
      "ScmSpeed": 227.0,
      "MaxSpeed": 1161.0,
      "Pitch": 51.0,
      "Yaw": 51.0,
      "Roll": 150.0,
      "IsVtolAssisted": false,
      "UseDirectionModifiers": true,
      "ThrustCapacity": {
        "Main": 8400000.0,
        "Retro": 524000.0,
        "Vtol": 0.0,
        "Maneuvering": 15836000.0
      },
      "AccelerationG": {
        "IsValidated": true,
        "Main": 11.5,
        "Retro": 8.0,
        "Strafe": 11.3,
        "Up": 8.3,
        "Down": 5.0
      },
      "MasterModes": {
        "BaseSpoolTime": 1.0,
        "QuantumDriveSpoolTime": 4.0,
        "ScmMode": {
          "BoostSpeedForward": 493.0,
          "BoostSpeedBackward": 225.0
        }
      },
      "Boost": {
        "PreDelay": 0.0,
        "RampUp": 0.6,
        "RampDown": 0.3,
        "AccelerationMultiplier": {
          "PositiveAxis": {
            "X": 1.35,
            "Y": 1.55,
            "Z": 1.35
          },
          "NegativeAxis": {
            "X": 1.35,
            "Y": 1.4,
            "Z": 1.35
          }
        },
        "AngularAccelerationMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        },
        "AngularVelocityMultiplier": {
          "Pitch": 1.2,
          "Yaw": 1.2,
          "Roll": 1.2
        }
      },
      "Capacitors": {
        "ThrusterCapacitorSize": 20.0,
        "CapacitorRegenPerSec": 0.75,
        "CapacitorIdleCost": 1.0,
        "CapacitorLinearCost": 0.0,
        "CapacitorUsageModifier": 1.0,
        "CapacitorRegenDelay": 0.5,
        "RegenerationTime": 26.7,
        "X_AccelMultiplicator": 2.2,
        "Y_AccelMultiplicator": 2.2,
        "Z_AccelMultiplicator": 2.2
      }
    },
    "FuelManagement": {
      "FuelCapacity": 14700000.0,
      "FuelIntakeRate": 29.0,
      "QuantumFuelCapacity": 1300000.0,
      "FuelBurnRatePer10KNewton": {
        "Main": 5.0,
        "Retro": 2.5,
        "Vtol": 0.0,
        "Maneuvering": 17.5
      },
      "FuelUsagePerSecond": {
        "Main": 1050.0,
        "Retro": 65.5,
        "Vtol": 0.0,
        "Maneuvering": 1979.5
      },
      "IntakeToMainFuelRatio": 2.76,
      "TimeForIntakesToFillTank": 506896.55
    },
    "Emissions": {
      "Electromagnetic": {
        "SCMIdle": 9638.0,
        "SCMActive": 12152.0,
        "NAV": 18678.0
      },
      "Infrared": {
        "Start": 15896.0
      },
      "CrossSection": {
        "Front": 5167.0,
        "Side": 14254.0,
        "Top": 14789.0
      }
    },
    "ResourceNetwork": {
      "ItemPools": {
        "WeaponPoolSize": 4.0
      }
    },
    "Weapons": {
      "PilotWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TurretsWeaponRegenPool": {
        "RegenFillRate": 0.0,
        "AmmoLoad": 0
      },
      "TotalShieldHP": 4740.0,
      "PilotBurstDPS": 1823.0,
      "TurretsBurstDPS": 0.0,
      "TotalMissilesDmg": 13362.0
    },
    "Insurance": {
      "StandardClaimTime": 7.5,
      "ExpeditedClaimTime": 2.5,
      "ExpeditedCost": 3800.0
    },
    "New Ship": "Aopoa San'tok.yāi",
    "Dimensions2": {
      "Length": 24.0,
      "Width": 18.0,
      "Height": 9.0
    },
    "Buy": {
      "Astro Armada, Area 18": 9355500.0
    }
  }
];

export default shipList;