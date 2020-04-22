import _ from 'lodash';

import { reverse } from 'utils/urls';

export const pageFactory = routes => {
  let pageIndex = new Map(routes.map(route => [route.component, route]));

  const pageUrl = (component, params = {}) => {
    return reverse(pageIndex.get(component).path, params);
  };

  const pageBreadcrumb = (component, params = {}) => {
    const data = pageIndex.get(component);

    const breadcrumbData = {
      path: pageUrl(data.component, params),
      title: data.title
    };

    if (_.isNil(data.parent)) return [breadcrumbData];

    return [...pageBreadcrumb(data.parent, params), breadcrumbData];
  };

  return { pageUrl, pageBreadcrumb };
};
