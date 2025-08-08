import styles from "./DataTable.module.scss";

interface FilterDropdownProps {
  label: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

const FilterDropdown = ({
  label,
  options,
  selected,
  onChange,
}: FilterDropdownProps) => {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className={styles.filterDropdown}
    >
      <option value="">All {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
