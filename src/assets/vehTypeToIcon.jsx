import {
  mdiArrowDecision,
  mdiCogs,
  mdiCubeOutline,
  mdiPlusOutline,
  mdiTarget,
  mdiTire,
  mdiTrophyVariantOutline,
  mdiWeb,
} from "@mdi/js";

const vehTypeToIcon = {
  combat: mdiTarget,
  transport: mdiCubeOutline,
  exploration: mdiWeb,
  industrial: mdiCogs,
  support: mdiPlusOutline,
  competition: mdiTrophyVariantOutline,
  ground: mdiTire,
  multi: mdiArrowDecision,
};

export default vehTypeToIcon;
