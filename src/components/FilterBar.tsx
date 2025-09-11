interface Props {
    search: string;
    setSearch: (v: string) => void;
    role: string;
    setRole: (v: string) => void;
    placeholder?: string;
  }
  
  export default function FilterBar({ search, setSearch, role, setRole, placeholder = "Search..." }: Props) {
    return (
      <div className="grid md:grid-cols-3 gap-3 mb-4">
        <input
          className="input border rounded p-2"
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select border rounded p-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">All Roles</option>
          <option>Academic Staff</option>
          <option>Non-Academic Staff</option>
          <option>Operations</option>
          <option>Undergraduate</option>
          <option>Master’s</option>
          <option>PhD</option>
        </select>
        <button className="btn" onClick={() => { setSearch(""); setRole(""); }}>
          Reset
        </button>
      </div>
    );
  }
  