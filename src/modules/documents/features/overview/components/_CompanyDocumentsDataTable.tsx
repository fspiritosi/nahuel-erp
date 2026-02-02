'use client';

import {
  AlertCircle,
  CheckCircle2,
  Circle,
  Clock,
  XCircle,
} from 'lucide-react';

import { DocumentState } from '@/generated/prisma/enums';
import {
  DataTable,
  type DataTableFacetedFilterConfig,
  type DataTableSearchParams,
} from '@/shared/components/common/DataTable';
import { documentStateLabels } from '@/shared/utils/mappers';

import type { CompanyDocumentListItem, DocumentTypeFilterOption } from '../actions.server';
import { getCompanyDocumentsColumns } from './_companyDocumentsColumns';

// Iconos para estados
const stateIcons = {
  PENDING: Clock,
  SUBMITTED: Circle,
  APPROVED: CheckCircle2,
  REJECTED: XCircle,
  EXPIRED: AlertCircle,
};

interface Props {
  data: CompanyDocumentListItem[];
  totalRows: number;
  searchParams: DataTableSearchParams;
  documentTypes: DocumentTypeFilterOption[];
}

export function _CompanyDocumentsDataTable({
  data,
  totalRows,
  searchParams,
  documentTypes,
}: Props) {
  const columns = getCompanyDocumentsColumns();

  // Configurar filtros faceteados
  const facetedFilters: DataTableFacetedFilterConfig[] = [
    {
      columnId: 'state',
      title: 'Estado',
      options: Object.values(DocumentState).map((value) => ({
        value,
        label: documentStateLabels[value],
        icon: stateIcons[value],
      })),
    },
    {
      columnId: 'documentType',
      title: 'Tipo de Documento',
      options: documentTypes.map((dt) => ({
        value: dt.id,
        label: dt.name,
      })),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      totalRows={totalRows}
      searchParams={searchParams}
      searchPlaceholder="Buscar por tipo de documento..."
      facetedFilters={facetedFilters}
      enableRowSelection={true}
      showRowSelection={true}
      emptyMessage="No hay documentos de empresa"
      data-testid="company-documents-table"
    />
  );
}
