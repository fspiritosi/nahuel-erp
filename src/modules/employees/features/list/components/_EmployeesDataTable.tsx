'use client';

import {
  AlertCircle,
  CheckCircle2,
  Circle,
  Clock,
  XCircle,
} from 'lucide-react';
import { useMemo } from 'react';

import { EmployeeStatus } from '@/generated/prisma/enums';
import {
  DataTable,
  type DataTableFacetedFilterConfig,
  type DataTableSearchParams,
} from '@/shared/components/common/DataTable';
import type { ModulePermissions } from '@/shared/lib/permissions';
import { employeeStatusLabels } from '@/shared/utils/mappers';

import { getColumns } from '../columns';
import type { EmployeeListItem, JobPositionOption, ContractTypeOption } from '../actions.server';

// Iconos para estados - definidos en el cliente
const statusIcons = {
  INCOMPLETE: Clock,
  COMPLETE: Circle,
  COMPLETE_EXPIRED_DOCS: AlertCircle,
  APPROVED: CheckCircle2,
  NOT_APPROVED: XCircle,
};

interface Props {
  data: EmployeeListItem[];
  totalRows: number;
  searchParams: DataTableSearchParams;
  jobPositions: JobPositionOption[];
  contractTypes: ContractTypeOption[];
  permissions: ModulePermissions;
}

export function _EmployeesDataTable({
  data,
  totalRows,
  searchParams,
  jobPositions,
  contractTypes,
  permissions,
}: Props) {
  // Generar columnas con permisos (pasados desde el servidor)
  const columns = useMemo(() => getColumns(permissions), [permissions]);

  // Configurar filtros faceteados - en el cliente para poder usar iconos
  const facetedFilters: DataTableFacetedFilterConfig[] = [
    {
      columnId: 'status',
      title: 'Estado',
      options: Object.values(EmployeeStatus).map((value) => ({
        value,
        label: employeeStatusLabels[value],
        icon: statusIcons[value],
      })),
    },
    {
      columnId: 'jobPosition',
      title: 'Puesto',
      options: jobPositions.map((jp) => ({
        value: jp.id,
        label: jp.name,
      })),
    },
    {
      columnId: 'contractType',
      title: 'Contrato',
      options: contractTypes.map((ct) => ({
        value: ct.id,
        label: ct.name,
      })),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      totalRows={totalRows}
      searchParams={searchParams}
      searchPlaceholder="Buscar por nombre, legajo, documento o CUIL..."
      facetedFilters={facetedFilters}
      enableRowSelection={true}
      showRowSelection={true}
      emptyMessage="No hay empleados registrados"
      data-testid="employees-table"
    />
  );
}
