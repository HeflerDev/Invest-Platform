import {createSlice} from '@reduxjs/toolkit';

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
        ['Valor Final Bruto', 'R$ ' + action.payload.valorFinalBruto],
        aliquotaIR: ['Alíquota IR', action.payload.aliquotaIR + ' %'],
        valorPagoIR: ['Valor Pago IR', 'R$ ' + action.payload.valorPagoIR],
        valorTotalInvestido:
          ['Valor Total Investido','R$ ' + action.payload.valorTotalInvestido],
        valorFinalLiquido:
          ['Valor Final Líquido','R$ ' + action.payload.valorFinalLiquido],
        ganhoLiquido: ['Ganho Liquido','R$ ' + action.payload.ganhoLiquido]
      };

      state.graphicData = action.payload.graficoValores;
    },
  },
});

export const {swapLoadingState, storeErrors, storeData} = apiDataSlice.actions;
export default apiDataSlice.reducer;
