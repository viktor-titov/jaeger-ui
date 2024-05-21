import { defaultTheme } from "@ant-design/compatible";
import { ConfigProvider } from "antd";
import { PureComponent } from "react";
import { Provider } from "react-redux";

import { history, store } from 'jaeger-ui-monorepo/packages/jaeger-ui/src/utils/configure-store.js'
import { HistoryProvider } from 'jaeger-ui-monorepo/packages/jaeger-ui/src/utils/useHistory'
// import { default as TracePageImpl } from 'jaeger-ui-monorepo/packages/jaeger-ui/src/components/TracePage'


const jaegerTheme = {
    token: {
      ...defaultTheme.token,
      colorPrimary: '#199',
    },
    components: {
      ...defaultTheme.components,
      Layout: {
        ...defaultTheme.components?.Layout,
        bodyBg: '#fff',
        headerBg: '#404040',
        footerBg: '#fff',
        headerHeight: 48,
        headerPadding: '0 50',
        footerPadding: '24 50',
        siderBg: '#404040',
        triggerHeight: 48,
        triggerBg: 'tint(#fff, 20%)',
        zeroTriggerWidth: 36,
        zeroTriggerHeight: 42,
      },
      Menu: {
        ...defaultTheme.components?.Menu,
        darkItemBg: '#151515',
      },
      Table: {
        ...defaultTheme.components?.Table,
        rowHoverBg: '#e5f2f2',
      },
    },
  };

export default class TracePage extends PureComponent {

    render() {
        return (
            <ConfigProvider theme={jaegerTheme}>
                <Provider store={store}>
                    <HistoryProvider history={history}>
                        {/* <TracePageImpl></TracePageImpl> */}
                        trace page
                    </HistoryProvider>
                </Provider>
            </ConfigProvider>
        )
    }
}