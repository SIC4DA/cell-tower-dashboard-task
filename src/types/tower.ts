type NetworkType = "4G" | "5G";
type TowerStatus = "active" | "offline";
type SignalStrength = 1 | 2 | 3 | 4 | 5;

export interface CellTower {
  id: string;
  name: string;
  city: string;
  networkType: NetworkType;
  status: TowerStatus;
  signalStrength: SignalStrength;
}
