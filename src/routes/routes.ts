import { lazy, LazyExoticComponent } from 'react';

import NoLazy from '../01-lazyload/pages/NoLazy';
import ShoppingPage from '../02-components-patterns/pages/ShoppingPage';
import {
  FormikAbstraction,
  FormikBasicPage,
  FormikComponent,
  FormikYupPage,
  RegisterPage,
} from '../03-forms/pages/';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
    )
);

/*const Lazy1 = lazy(
  () =>
    import(/!* webpackChunkName: "LazyPage1" *!/ '../01-lazyload/pages/LazyPage1')
);
const Lazy2 = lazy(
  () =>
    import(/!* webpackChunkName: "LazyPage2" *!/ '../01-lazyload/pages/LazyPage2')
);
const Lazy3 = lazy(
  () =>
    import(/!* webpackChunkName: "LazyPage3" *!/ '../01-lazyload/pages/LazyPage3')
);*/

/*export const routes: Route[] = [
  {
    to: 'lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy-1',
  },
  {
    to: 'lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy-2',
  },
  {
    to: 'lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy-3',
  },
];*/

// Routes Lazy
export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'Lazy Layout - Dashboard',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No lazy',
  },
  {
    to: '/shopping',
    path: 'shopping',
    Component: ShoppingPage,
    name: 'ShoppingPage',
  },
  {
    to: '/register',
    path: 'register',
    Component: RegisterPage,
    name: 'Register Page',
  },
  {
    to: '/formik-basic',
    path: 'formik-basic',
    Component: FormikBasicPage,
    name: 'Formik Basic',
  },
  {
    to: '/formik-yup',
    path: 'formik-yup',
    Component: FormikYupPage,
    name: 'Formik Yup',
  },
  {
    to: '/formik-component',
    path: 'formik-component',
    Component: FormikComponent,
    name: 'Formik Components',
  },
  {
    to: '/formik-abstraction',
    path: 'formik-abstraction',
    Component: FormikAbstraction,
    name: 'Formik Abstraction',
  },
];
