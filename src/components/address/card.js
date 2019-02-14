import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from "prop-types";

export default class AddressCard extends Component {
    static propTypes = {
        name: PropTypes.string,
        phone: PropTypes.string,
        address: PropTypes.string,
        checked: PropTypes.bool
    };
    static defaultProps = {
        name: null,
        phone: null,
        address: null,
        checked: false,
    };

    onEdit(id) {
        if (this.props.onEdit) {
            this.props.onEdit(id);
        }
    }

    onAddressChecked(id) {
        if (this.props.onAddressChecked) {
            this.props.onAddressChecked(id);
        }
    }

    render() {
        const { id, name, phone, address } = this.props
        return <View style={styles.addressCard}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.info}
                onPress={() => {
                    this.onAddressChecked(id)
                }}>
                <View style={styles.user}>
                    <View style={styles.namePhone}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.phone}>{phone}</Text>
                    </View>
                    <View style={styles.address}><Text>{address}</Text></View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={() => {
                this.onEdit(id)
            }}>
                <Text style={styles.edit}>编辑</Text>
            </TouchableOpacity>
        </View>
    }
};
const styles = StyleSheet.create({
    addressCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
    },
    checked: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    info: {
        flexDirection: 'row',
        padding: 15,
    },
    namePhone: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: '800',
        marginRight: 15,
        lineHeight: 14,

    },
    phone: {
        fontSize: 14,
        fontWeight: '800',
        marginRight: 15,
        lineHeight: 14,

    },
    address: {
        fontSize: 14,
        lineHeight: 14,

        color: '#999999'
    },
    action: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    edit: {
        fontSize: 14,
        lineHeight: 14,

        color: '#ff4400'
    }
})
