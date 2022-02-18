import {createSlice} from '@reduxjs/toolkit';
import {formatMoneyValue} from '../helpers/formatInput';
import formatData from '../helpers/formatData';

export const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: {
    loading: false,
    errors: null,
    data: null,
    dataComAporte: null,
    dataSemAporte: null,
  },
  reducers: {
    swapLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    storeErrors: (state, action) => {
      state.errors = action.payload;
    },
    storeData: (state, action) => {
      state.data = {
        valorFinalBruto:
        ['Valor Final Bruto', formatMoneyValue(action.payload.valorFinalBruto)],
        aliquotaIR: ['Alíquota IR', action.payload.aliquotaIR + ' %'],
        valorPagoIR: [
          'Valor Pago IR',
          formatMoneyValue(action.payload.valorPagoIR),
        ],
        valorTotalInvestido: [
          'Valor Total Investido',
          formatMoneyValue(action.payload.valorTotalInvestido),
        ],
        valorFinalLiquido: [
          'Valor Final Líquido',
          formatMoneyValue(action.payload.valorFinalLiquido)],
        ganhoLiquido: [
          'Ganho Liquido',
          formatMoneyValue(action.payload.ganhoLiquido),
        ],
      };

      state.dataComAporte = formatData(action.payload.graficoValores.comAporte)

      state.dataSemAporte = formatData(action.payload.graficoValores.semAporte)
    },
  },
});

export const {swapLoadingState, storeErrors, storeData} = apiDataSlice.actions;
export default apiDataSlice.reducer;
