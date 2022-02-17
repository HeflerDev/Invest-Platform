import {createSlice} from '@reduxjs/toolkit';
import {formatMoneyValue} from '../helpers/formatInput';

export const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: {
    loading: false,
    errors: null,
    data: null,
    graphicData: null,
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

      state.graphicData = action.payload.graficoValores;
    },
  },
});

export const {swapLoadingState, storeErrors, storeData} = apiDataSlice.actions;
export default apiDataSlice.reducer;
