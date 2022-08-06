import { Typography, Rating } from "@mui/material";

export const UserColumns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "firstName", headerName: "First name", width: 100 },
  { field: "lastName", headerName: "Last name", width: 100 },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 190,
  },
  {
    field: "password",
    headerName: "Password",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    width: 150,
  },
  {
    field: "role",
    headerName: "Role",
    sortable: false,
    width: 160,
  },
];

export const ClientColumns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 100 },
  { field: "lastName", headerName: "Last name", width: 100 },
  {
    field: "email",
    headerName: "Email",
    type: "number",
    width: 160,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "sex",
    headerName: "Sex",
    sortable: false,
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    sortable: false,
    width: 350,
  },
  {
    field: "callCenter",
    headerName: "Call Center",
    sortable: false,
    width: 160,
  },
  {
    field: "clientClass",
    headerName: "Client Class",
    sortable: false,
    width: 140,
    renderCell: (params) => {
      return (
        <Typography>
          <Rating
            name="half-rating"
            value={parseInt(params.row.clientClass)}
            precision={0.5}
            readOnly
          />
        </Typography>
      );
    },
  },
  {
    field: "memberId",
    headerName: "Member ID",
    sortable: false,
    width: 160,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    width: 160,
  },
];

export const LocationColumns = [
  { field: "id", headerName: "ID", width: 290 },
  { field: "name", headerName: "Name", width: 300 },
];

export const ProductColumns = [
  { field: "id", headerName: "ID", width: 230 },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "brand",
    headerName: "Brand",
    width: 160,
  },
  {
    field: "minPrice",
    headerName: "Min Price",
    width: 160,
  },
  {
    field: "maxPrice",
    headerName: "Max Price",
    width: 160,
  },
];

export const ScheduleColumns = [
  { field: "id", headerName: "ID", width: 230 },
  {
    field: "client",
    headerName: "Client",
    width: 160,
  },
  { field: "location", headerName: "Location", width: 200 },
  {
    field: "facial",
    headerName: "Facial",
    width: 120,
  },
  {
    field: "rf",
    headerName: "RF",
    width: 120,
  },
  {
    field: "cocoon",
    headerName: "Cocoon",
    width: 120,
  },
  {
    field: "ems",
    headerName: "EMS",
    width: 120,
  },
];

export const SalesColumns = [
  { field: "id", headerName: "Sales Number", width: 230 },
  { field: "name", headerName: "Client", width: 200 },
  {
    field: "brand",
    headerName: "Products",
    width: 160,
  },
  {
    field: "minPrice",
    headerName: "Bought Machine",
    width: 160,
  },
  {
    field: "maxPrice",
    headerName: "Warranty Id",
    width: 160,
  },
];

export const ClientArrivalColumns = [
  { field: "scheduleBy", headerName: "Sceduled By", width: 150 },
  {
    field: "assistedBy",
    headerName: "Assisted By",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "locationName",
    headerName: "Location",
    width: 120,
  },
  {
    field: "companions",
    headerName: "Companions",
    width: 100,
  },
  {
    field: "facialUsed",
    headerName: "Facials Used",
    width: 100,
  },
  {
    field: "slimmingUsed",
    headerName: "Slimming Used",
    width: 115,
  },
];
