import React from 'react'
import { Button, TextInput, View, Text } from 'react-native'
import * as yup from 'yup'

import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import FlatButton from '../shared/button'

let reviewSchema = yup.object().shape({
  title: yup.string().required().min(4),
  body: yup.string().required().min(4),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number from 1 to 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0
    }),
})

export const ReviewForm = ({ addReview }) => (
  <View style={globalStyles.container}>
    <Formik
      initialValues={{ title: '', body: '', rating: '' }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        console.log(values)
        addReview(values)
        actions.resetForm()
      }}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        handleBlur,
      }) => (
        <View>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange('title')}
            placeholder='Review title'
            onBlur={handleBlur('title')}
            value={values.title}
          />
          <Text style={globalStyles.errorText}>
            {touched.title && errors.title}
          </Text>
          <TextInput
            style={globalStyles.input}
            multiline
            onChangeText={handleChange('body')}
            placeholder='Review body'
            onBlur={handleBlur('body')}
            value={values.body}
          />
          <Text style={globalStyles.errorText}>
            {touched.body && errors.body}
          </Text>
          <TextInput
            style={globalStyles.input}
            onChangeText={handleChange('rating')}
            placeholder='Review rating(1-5)'
            value={values.rating}
            onBlur={handleBlur('rating')}
            keyboardType='numeric'
          />
          <Text style={globalStyles.errorText}>
            {touched.rating && errors.rating}
          </Text>
          <FlatButton onPress={handleSubmit} color='plum' text='Submit' />
        </View>
      )}
    </Formik>
  </View>
)

export default ReviewForm
