```
import { RouteConfig } from 'vue-router';

/**
 * Interface for activity logs index route
 */
interface ActivityLogsIndexRoute extends RouteConfig {
  /**
   * Name of the route
   */
  name: 'core.activityLogs.index';
  /**
   * Path of the route
   */
  path: string;
  /**
   * Component for activity logs index
   */
  component: () => Promise<typeof import('../pages/activityLog/Index.vue')>;
  /**
   * Meta information for the route
   */
  meta: {
    /**
     * Breadcrumb for the route
     */
    breadcrumb: string;
    /**
     * Title for the route
     */
    title: string;
  };
}

/**
 * Activity logs index route configuration
 */
const activityLogsRoute: ActivityLogsIndexRoute = {
  name: 'core.activityLogs.index',
  path: '/activityLog',
  component: () => import('../pages/activityLog/Index.vue'),
  meta: {
    breadcrumb: 'activity log',
    title: 'Activity Log',
  },
};

export default activityLogsRoute;
```